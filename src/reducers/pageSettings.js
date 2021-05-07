import { pageSettings, displayPackages } from '../data/pageSettings';
import { setPageSettingsLocal, getElligibility } from '../actions/pageSettings';
import { buildDisplayOffersData, filterDisplayPackages } from './../actions/subscriptions';
import { adobeTargetTrackEvent } from './../actions/tracking';

export default (state = pageSettings, action) => {
    switch (action.type) {
        case 'REPLACE_PAGE_SETTINGS':
            setPageSettingsLocal(action.pageSettings);
            return action.pageSettings;
        case 'MODIFY_PAGE_SETTINGS':
            const nextState = Object.assign({}, state);
            Object.keys(action.pageSettings).forEach((key) => {
                if (key !== 'subscriptions') {
                    nextState[key] = action.pageSettings[key];
                }
            });
            if (!!action.pageSettings.location) {
                nextState.elligibility = getElligibility(nextState.location, action.pageSettings.elligibility || nextState.elligibility);
            }
            if (!!action.pageSettings.displayPackages || !!action.pageSettings.denyLevel || !!action.pageSettings.packageData) {
                nextState.displayPackages = filterDisplayPackages(
                    action.pageSettings.displayPackages || displayPackages, 
                    action.pageSettings.packagesData || state.packagesData, 
                    action.pageSettings.denyLevel || state.denyLevel
                )
            }
            const subscriptionsToUse = !!action.pageSettings.subscriptions ? action.pageSettings.subscriptions : state.subscriptions.offersMap;
            nextState.subscriptions = buildDisplayOffersData(nextState, subscriptionsToUse);
            setPageSettingsLocal(nextState);
            if (!!action.pageSettings.selectedOffer) {
                const passObj = {
                    eventType: 'changedSelectedOffer'
                };
                Object.keys(state.selectedOffer).forEach((key) => {
                    passObj[key] = !!action.pageSettings.selectedOffer[key] ? action.pageSettings.selectedOffer[key].toString() : state.selectedOffer[key].toString();
                })
                Object.keys(action.pageSettings.selectedOffer).forEach((key) => {
                    if (state.selectedOffer[key] !== action.pageSettings.selectedOffer[key]) {
                        passObj[key] = `${action.pageSettings.selectedOffer[key]}_changed`;
                    }
                })
                // if (Object.keys(passObj).length > 1) {
                    adobeTargetTrackEvent(passObj)
                // }
            }
            return nextState;
        default: 
            return state;
    }
}