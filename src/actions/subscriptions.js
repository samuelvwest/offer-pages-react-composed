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

        const ldbmTest = (ldbm) => ldbm ? /front|side|only/.test(pageSettings.LDBM) : false;
        // Identify default offer if exact match found
        if (pageSettings.selectedOffer.renewMonths === offer.renewalPeriod.renewMonths && pageSettings.selectedOffer.packageID === offer.packageID && ldbmTest(pageSettings.selectedOffer.ldbm) === offer.ldbm) {
            data.selectedOffer = offer;
        }
        // Identify best offer if exact match found
        if (pageSettings.bestOffer.renewMonths === offer.renewalPeriod.renewMonths && pageSettings.bestOffer.packageID === offer.packageID && ldbmTest(pageSettings.bestOffer.ldbm) === offer.ldbm) {
            data.bestOffer = offer;
        }
    });

    // Finish building packages specific data
    const minPackageOrder = Math.min.apply(null, data.display.packages.map((pckg) => pckg.order));
    const maxPackageOrder = Math.max.apply(null, data.display.packages.map((pckg) => pckg.order));
    data.display.minPackage = data.display.packages.find((pkg) => pkg.order === minPackageOrder);
    data.display.maxPackage = data.display.packages.find((pkg) => pkg.order === maxPackageOrder);

    // Identify closest thing to default offer if exact offer not found above
    if (!data.selectedOffer) {
        // Check if package exists regardless of ldbm
        data.selectedOffer = data.display.offersMap.find((offer) => pageSettings.selectedOffer.renewMonths === offer.renewalPeriod.renewMonths && pageSettings.selectedOffer.packageID === offer.packageID);
        if (!data.selectedOffer) {
            // Check if package exists with the smallest possible duration
            data.selectedOffer = data.display.offersMap.find((offer) => data.minDuration === offer.renewalPeriod.renewMonths && pageSettings.selectedOffer.packageID === offer.packageID);
            if (!data.selectedOffer) {
                // Check if duration exists for smallest possible duration
                data.selectedOffer = data.display.offersMap.find((offer) => pageSettings.selectedOffer.renewMonths === offer.renewalPeriod.renewMonths && data.display.minPackage.id === offer.packageID);
                if (!data.selectedOffer) {
                    // Just populate with the smallest duration and package type possible out of what can be displayed
                    data.selectedOffer = data.display.offersMap.find((offer) => data.minDuration === offer.renewalPeriod.renewMonths && data.display.minPackage.id === offer.packageID);
                }
            }
        }
    }
    data.selectedOffer.renewMonths = data.selectedOffer.renewalPeriod.renewMonths;

    // Identify closest thing to best offer if exact offer not found above
    if (!data.bestOffer) {
        // Check if package exists regardless of ldbm
        data.bestOffer = data.display.offersMap.find((offer) => pageSettings.bestOffer.renewMonths === offer.renewalPeriod.renewMonths && pageSettings.bestOffer.packageID === offer.packageID);
        if (!data.bestOffer) {
            // Check if package exists with the largest possible duration
            data.bestOffer = data.display.offersMap.find((offer) => data.maxDuration === offer.renewalPeriod.renewMonths && pageSettings.bestOffer.packageID === offer.packageID);
            if (!data.bestOffer) {
                // Check if duration exists for largest possible duration
                data.bestOffer = data.display.offersMap.find((offer) => pageSettings.bestOffer.renewMonths === offer.renewalPeriod.renewMonths && data.display.maxPackage.id === offer.packageID);
                if (!data.bestOffer) {
                    // Just populate with the largest duration and package type possible out of what can be displayed
                    data.bestOffer = data.display.offersMap.find((offer) => data.maxDuration === offer.renewalPeriod.renewMonths && data.display.maxPackage.id === offer.packageID);
                }
            }
        }
    }
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