import { durationTexts, freemiumSubscription } from '../data/subscriptions';

const roundNum = function(num, decimals, roundDown) {
    const decs = decimals || 0;
    const multDiv = 10 ** decs;
    const dirFunc = !!roundDown ? Math.floor : Math.ceil;
    return (dirFunc(num * multDiv) / multDiv).toFixed(decs)
}

export const buildDisplayOffersData = (pageSettings, subscriptions) => {
    const data = {
        ldbms: false,
        durations: [],
        offersMap: subscriptions,
        display: {
            packages: [],
            durations: [],
            offersMap: []
        },
        // offerElligibilityType: pageSettings.elligibility === `freetrial` ? `initial` : /CSub%3d1/.test(document.cookie) ? 'migration' : 'renewal'
        offerElligibilityType: pageSettings.elligibility === `freetrial` ? `initial` : 'renewal'
    }

    // Build OfferMap based on Page Settings
    data.display.offersMap = [...subscriptions.filter((offer) => {
        // Define if offer is a longer duration billed monthly
        offer.ldbm = offer.renewalPeriod.renewMonths !== offer.renewalPeriod.billMonths;

        // Embed package data in offer
        offer.packageData = pageSettings.packagesData.find((pkg) => pkg.id === offer.packageID);

        // Determine if freemium should be included

        // Define filter tests
        const packagesTest = pageSettings.displayPackages.indexOf(offer.packageID) > -1;
        const durationsTest = pageSettings.displayDurations.indexOf(offer.renewalPeriod.renewMonths) > -1;
        const ldbmTest = offer.ldbm ? !!pageSettings.LDBM : true;
        return packagesTest 
            && ((durationsTest && ldbmTest) 
                || offer.packageData.type === `freemium`);
    })];
    // // "Freemium" ("Treebuilder") package level should be displayed
    // if (/treebuilder/.test(pageSettings.displayPackages)) {
    //     data.display.packages.push(pageSettings.packagesData.find((pkg) => pkg.id === `treebuilder`));
    // }
    // Determine actual offerings and display data
    data.display.offersMap.forEach((offer) => {
        // Determine if Long Durations Billed Monthly are supported
        if (offer.ldbm) {
            data.ldbms = true;
        }
        // Log packages to be displayed
        // console.log(data.display);
        if (!data.display.packages.find((packageData) => packageData.id === offer.packageID)) {
            data.display.packages.push(offer.packageData);
        }
        // Log bill and/or commitment durations to be displayed
        // console.log(offer.packageData)
        if (!/freemium/.test(offer.packageData.type)
            && !data.durations.find((duration) => duration.num === offer.renewalPeriod.renewMonths && duration.ldbm === offer.ldbm)
        ) {
            const durationText = durationTexts[`dur${offer.renewalPeriod.renewMonths}`];
            data.durations.push({
                id: `${durationText}|${offer.renewalPeriod.renewMonths}|${offer.ldbm}`,
                num: offer.renewalPeriod.renewMonths,
                text: durationText,
                ldbm: offer.ldbm 
            });
        }
        // Add monthly equivalent pricing (MEP)
        offer.renewalPeriod.displayPriceMEP = roundNum(offer.renewalPeriod.displayPrice / offer.renewalPeriod.renewMonths, 2, true)
        offer.renewalPeriod.MSRPMEP = roundNum(offer.renewalPeriod.MSRP / offer.renewalPeriod.renewMonths, 2, true)
        // Add promo savings if applicable
        if (offer.renewalPeriod.displayPrice < offer.renewalPeriod.MSRP) {
            data.promoSaveOffers = data.promoSaveOffers || [];
            const savings = offer.renewalPeriod.MSRP - offer.renewalPeriod.displayPrice;
            const ppt = (savings / offer.renewalPeriod.MSRP) * 100;
            offer.promoSavings = {
                actual: savings,
                display: Math.floor(savings),
                actualPPT: ppt,
                displayPPT: Math.floor(ppt)
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
    data.display.minDuration = Math.min.apply(null, data.display.durations.map((duration) => duration.num))
    data.display.maxDuration = Math.max.apply(null, data.display.durations.map((duration) => duration.num))
    data.display.offersMap.forEach((offer) => {
        // Add save from duration totals if applicable
        if (offer.renewalPeriod.renewMonths > data.display.minDuration) {
            const shortDurationCompareOffer = data.display.offersMap.find((sDCOffer) => {
                return sDCOffer.packageID === offer.packageID && sDCOffer.renewalPeriod.renewMonths === data.display.minDuration
            });
            if (!!shortDurationCompareOffer) {
                data.durationSaveOffers = data.durationSaveOffers || [];
                const savings = ((offer.renewalPeriod.renewMonths / shortDurationCompareOffer.renewalPeriod.renewMonths) * shortDurationCompareOffer.renewalPeriod.displayPrice) - offer.renewalPeriod.displayPrice;
                if (savings >= 1) {
                    offer.durationSavings = {
                        compareMonths: data.display.minDuration,
                        actual: savings,
                        display: Math.floor(savings),
                        compareOffer: shortDurationCompareOffer
                    }
                    if (!offer.promoSavings) {
                        data.durationSaveOffers.push(offer);
                    }
                }
            }
        } else if (!!offer.durationSavings) {
            delete offer.durationSavings;
        }
    });

    // Finish building packages specific data
    const minPackageOrder = Math.min.apply(null, data.display.packages.filter((pckg) => pckg.type !== 'freemium').map((pckg) => pckg.order));
    const maxPackageOrder = Math.max.apply(null, data.display.packages.map((pckg) => pckg.order));
    data.display.minPackage = data.display.packages.find((pkg) => pkg.order === minPackageOrder);
    data.display.maxPackage = data.display.packages.find((pkg) => pkg.order === maxPackageOrder);

    const findOfferTypeOrClosestToIt = (matchOffer, minOrMax) => {
        // check for freemium offer
        let offer = data.display.offersMap.find((ofr) => ofr.packageID === matchOffer.packageID);
        if (!!offer && 'freemium' === offer.packageData.type) { 
            offer.ldbm = matchOffer.ldbm;
            offer.renewalPeriod.renewMonths = matchOffer.renewMonths;
            // console.log(matchOffer, offer);
            return offer; 
        }
        // if not freemium offer, do regular stuff below
        const ldbmTest = (ldbm) => ldbm ? /front|side|only/.test(pageSettings.LDBM) : false;
        // find exact match if can be found
        offer = data.display.offersMap.find((ofr) => ofr.packageID === matchOffer.packageID && ofr.renewalPeriod.renewMonths === matchOffer.renewMonths && ldbmTest(matchOffer.ldbm) === ofr.ldbm);
        if (!!offer) { return offer; }
        // Check if different package exists with renewal and billing information the same
        offer = data.display.offersMap.find((ofr) => ofr.packageID === data.display[`${minOrMax}Package`].id && ofr.renewalPeriod.renewMonths === matchOffer.renewMonths && ldbmTest(matchOffer.ldbm) === ofr.ldbm);
        if (!!offer) { return offer; }
        // Check if different package exists with renewal information the same
        offer = data.display.offersMap.find((ofr) => ofr.packageID === data.display[`${minOrMax}Package`].id && ofr.renewalPeriod.renewMonths === matchOffer.renewMonths);
        if (!!offer) { return offer; }
        // Check if different package exists with different renewal information
        offer = data.display.offersMap.find((ofr) => ofr.packageID === data.display[`${minOrMax}Package`].id && ofr.renewalPeriod.renewMonths === data.display[`${minOrMax}Duration`]);
        if (!!offer) { return offer; }
    }

    data.selectedOffer = findOfferTypeOrClosestToIt(pageSettings.selectedOffer, 'min');
    data.bestOffer = findOfferTypeOrClosestToIt(pageSettings.bestOffer, 'max');
    // console.log(data);
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