import subscriptions from "../reducers/subscriptions";

// Add calculated variables to offers map where needed
export const processSubscriptions = (offersMap) => {
    const subscriptions = {
        billedMonthlies: false,
        packageNames: [],
        durations: [],
        offersMap
    }
    subscriptions.offersMap.forEach((offer) => {
        // Build packageNames array
        if (subscriptions.packageNames.indexOf(offer.packageName) === -1) {
            subscriptions.packageNames.push(offer.packageName);
        }
        // Build durations array
        const durationNames = {
            dur1: `Monthly`,
            dur3: `Quarterly`,
            dur6: `Semi-Annual`,
            dur12: `Annual`
        }
        const durationStr = `${offer.renewalPeriod.renewMonths}|${offer.renewalPeriod.billMonths}|${durationNames[`dur${offer.renewalPeriod.renewMonths}`]}`;
        if (subscriptions.durations.indexOf(durationStr) === -1) {
            subscriptions.durations.push(durationStr);
        }
        if (offer.renewalPeriod.renewMonths > 1) {
            // Add save from duration totals
            offer.durationSavings = {};
            const shorterDurationOffers = subscriptions.offersMap.filter((compareOffer) => {
                return compareOffer.package === offer.package && compareOffer.renewalPeriod.renewMonths < offer.renewalPeriod.renewMonths;
            })
            shorterDurationOffers.forEach((shorterOffer) => {
                const savings = ((offer.renewalPeriod.renewMonths / shorterOffer.renewalPeriod.renewMonths) * shorterOffer.renewalPeriod.displayPrice) - offer.renewalPeriod.displayPrice;
                offer.durationSavings[`${shorterOffer.renewalPeriod.renewMonths}month`] = {
                    actual: savings,
                    display: Math.floor(savings)
                }
            })
            // Add monthly equivalent pricing (MEP)
            offer.renewalPeriod.displayPriceMEP = (offer.renewalPeriod.displayPrice / offer.renewalPeriod.renewMonths).toFixed(2)
            // Change billed monthly variables
            offer.longDurationBilledMonthly = offer.renewalPeriod.renewMonths !== offer.renewalPeriod.billMonths;
            if (!offer.longDurationBilledMonthly) {
                subscriptions.billedMonthlies = true;
            }
        }
        // Add promo savings if applicable
        if (offer.renewalPeriod.renewMonths.displayPrice < offer.renewalPeriod.renewMonths.MSRP) {
            offer.promoSavings = offer.renewalPeriod.renewMonths.MSRP - offer.renewalPeriod.renewMonths.displayPrice
        }
    });
    subscriptions.minDuration = Math.min.apply(null, subscriptions.durations.map(dur => dur.split('|')[0]));
    subscriptions.maxDuration = Math.max.apply(null, subscriptions.durations.map(dur => dur.split('|')[0]));
    return subscriptions;
} 

export const builSubscriptionDataForPage = (obj) => {
    const subscriptions = processSubscriptions(obj.offersMap.filter((offer) => {
        return obj.pageSettings.displayPackages.indexOf(offer.packageName) > -1
            && obj.pageSettings.displayDurations.indexOf(offer.renewalPeriod.renewMonths) > -1
            && (offer.renewalPeriod.renewMonths !== offer.renewalPeriod.billMonths ? !!obj.pageSettings.LDBM : true);
    }));
    return subscriptions
}

// Replace Page Settings in REDUX
export const replaceSubscriptions = (subscriptions) => ({
    type: 'REPLACE_SUBSCRIPTIONS',
    subscriptions
});