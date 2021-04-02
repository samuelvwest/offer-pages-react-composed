import { durationTexts } from '../data/subscriptions'

export const buildDisplayOffersData = (pageSettings, subscriptions) => {
    const data = {
        ldbms: false,
        packages: [],
        packageNames: [],
        durations: [],
        offersMap: subscriptions,
        display: {
            packages: [],
            durations: [],
            offersMap: []
        },
        offerElligibilityType: pageSettings.elligibility === `freetrial` ? `initial` : /CSub%3d1/.test(document.cookie) ? 'migration' : 'renewal'
    }
    // Build OfferMap based on Page Settings
    data.display.offersMap = subscriptions.filter((offer) => {
        // Define if offer is a longer duration billed monthly
        offer.ldbm = offer.renewalPeriod.renewMonths !== offer.renewalPeriod.billMonths;

        // Embed package data in offer
        offer.packageData = pageSettings.packagesData.find((pkg) => pkg.id === offer.packageID);

        // Define filter tests
        const packagesTest = pageSettings.displayPackages.indexOf(offer.packageID) > -1;
        const durationsTest = pageSettings.displayDurations.indexOf(offer.renewalPeriod.renewMonths) > -1;
        const ldbmTest = offer.ldbm ? !!pageSettings.LDBM : true;
        return packagesTest && durationsTest && ldbmTest;
    });
    data.display.offersMap.forEach((offer) => {
        // Determine if Long Durations Billed Monthly are supported
        if (offer.ldbm) {
            data.ldbms = true;
        }
        // Log packages to be displayed
        if (!data.display.packages.find((packageData) => packageData.id === offer.packageID)) {
            data.display.packages.push(offer.packageData);
        }
        // Log bill and/or commitment durations to be displayed
        if (!data.durations.find((duration) => duration.num === offer.renewalPeriod.renewMonths && duration.ldbm === offer.ldbm)) {
            const durationText = durationTexts[`dur${offer.renewalPeriod.renewMonths}`];
            data.durations.push({
                id: `${durationText}|${offer.renewalPeriod.renewMonths}|${offer.ldbm}`,
                num: offer.renewalPeriod.renewMonths,
                text: durationText,
                ldbm: offer.ldbm 
            });
        }
        // Add monthly equivalent pricing (MEP)
        offer.renewalPeriod.displayPriceMEP = (offer.renewalPeriod.displayPrice / offer.renewalPeriod.renewMonths).toFixed(2)
        offer.renewalPeriod.MSRPMEP = (offer.renewalPeriod.MSRP / offer.renewalPeriod.renewMonths).toFixed(2)
        // Add promo savings if applicable
        if (offer.renewalPeriod.displayPrice < offer.renewalPeriod.MSRP) {
            data.promoSaveOffers = data.promoSaveOffers || [];
            const savings = offer.renewalPeriod.MSRP - offer.renewalPeriod.displayPrice;
            offer.promoSavings = {
                actual: savings,
                display: Math.floor(savings)
            }
            data.promoSaveOffers.push(offer);
        }
        // Make custom offerData ID string
        offer.id = `${offer.packageID}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}MB`
        // Make one sentence descriptor string
        offer.description = `${offer.packageData.name} ${offer.renewalPeriod.renewMonths}-month commitment billed ${offer.currency}${offer.renewalPeriod[`displayPrice${offer.ldbm ? `MEP` : ``}`]} every ${offer.renewalPeriod.billMonths === 1 ? `month` : `${offer.renewalPeriod.billMonths} months`}.`
    });

    // Build display data
    data.display.durations = data.durations.filter((duration) => {
        if (duration.ldbm) {
            return /toggle-front|side-by-side|only/.test(pageSettings.LDBM);
        } else if (duration.num > 1 && !!pageSettings.LDBM) {
            return /toggle-back|side-by-side/.test(pageSettings.LDBM);
        }
        return true;
    });

    // Add attributes to used offers
    data.minDuration = Math.min.apply(null, data.durations.map((duration) => duration.num))
    data.maxDuration = Math.max.apply(null, data.durations.map((duration) => duration.num))
    data.display.offersMap.forEach((offer) => {
        // Add save from duration totals if applicable
        if (offer.renewalPeriod.renewMonths > data.minDuration) {
            const shortDurationCompareOffer = data.display.offersMap.find((sDCOffer) => {
                return sDCOffer.packageID === offer.packageID && sDCOffer.renewalPeriod.renewMonths === data.minDuration
            });
            if (!!shortDurationCompareOffer) {
                data.durationSaveOffers = data.durationSaveOffers || [];
                const savings = ((offer.renewalPeriod.renewMonths / shortDurationCompareOffer.renewalPeriod.renewMonths) * shortDurationCompareOffer.renewalPeriod.displayPrice) - offer.renewalPeriod.displayPrice;
                if (savings >= 1) {
                    offer.durationSavings = {
                        compareMonths: data.minDuration,
                        actual: savings,
                        display: Math.floor(savings),
                        compareOffer: shortDurationCompareOffer
                    }
                    data.durationSaveOffers.push(offer);
                }
            }
        }
    });

    // Finish building packages specific data
    const minPackageOrder = Math.min.apply(null, data.display.packages.map((pckg) => pckg.order));
    const maxPackageOrder = Math.max.apply(null, data.display.packages.map((pckg) => pckg.order));
    data.display.minPackage = data.display.packages.find((pkg) => pkg.order === minPackageOrder);
    data.display.maxPackage = data.display.packages.find((pkg) => pkg.order === maxPackageOrder);

    const findOfferTypeOrClosestToIt = (matchOffer, minOrMax) => {
        const ldbmTest = (ldbm) => ldbm ? /front|side|only/.test(pageSettings.LDBM) : false;
        // find exact match if can be found
        let offer = data.display.offersMap.find((ofr) => ofr.packageID === matchOffer.packageID && ofr.renewalPeriod.renewMonths === matchOffer.renewMonths && ldbmTest(matchOffer.ldbm) === ofr.ldbm);
        if (!!offer) { return offer; }
        // Check if different package exists with renewal and billing information the same
        offer = data.display.offersMap.find((ofr) => ofr.packageID === data.display[`${minOrMax}Package`].id && ofr.renewalPeriod.renewMonths === matchOffer.renewMonths && ldbmTest(matchOffer.ldbm) === ofr.ldbm);
        if (!!offer) { return offer; }
        // Check if different package exists with renewal information the same
        offer = data.display.offersMap.find((ofr) => ofr.packageID === data.display[`${minOrMax}Package`].id && ofr.renewalPeriod.renewMonths === matchOffer.renewMonths);
        if (!!offer) { return offer; }
        // Check if different package exists with different renewal information
        offer = data.display.offersMap.find((ofr) => ofr.packageID === data.display[`${minOrMax}Package`].id && ofr.renewalPeriod.renewMonths === data[`${minOrMax}Duration`]);
        if (!!offer) { return offer; }
    }

    data.selectedOffer = findOfferTypeOrClosestToIt(pageSettings.selectedOffer, 'min')
    data.bestOffer = findOfferTypeOrClosestToIt(pageSettings.bestOffer, 'max')
    data.selectedOffer.renewMonths = data.selectedOffer.renewalPeriod.renewMonths;
    data.bestOffer.renewMonths = data.bestOffer.renewalPeriod.renewMonths;

    // Sort Display items to their appropriate order
    data.display.packages.sort((a, b) => a.order - b.order);
    data.display.durations.sort((a, b) => {
        const numTest = a.num - b.num;
        return numTest !== 0 ? numTest : a.ldbm ? 1 : -1;
    });
    
    return data;
}

// Filter display packages
export const filterDisplayPackages = (displayPackages, packagesData, denyLevel) => {
    return displayPackages.map((disPkg) => packagesData.find((pkgData) => pkgData.id === disPkg)).filter((pkgData) => pkgData.order >= denyLevel).map((pkg) => pkg.id);
}

// Replace Subscriptions in REDUX
export const replaceSubscriptions = (subscriptions) => ({
    type: 'REPLACE_SUBSCRIPTIONS',
    subscriptions
});