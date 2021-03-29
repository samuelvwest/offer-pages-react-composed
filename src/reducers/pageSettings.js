import pageSettings from '../data/pageSettings';
import { setPageSettingsLocal } from '../actions/pageSettings';
import { buildDisplayOffersData, filterDisplayPackages } from './../actions/subscriptions';

export default (state = pageSettings, action) => {
    switch (action.type) {
        case 'REPLACE_PAGE_SETTINGS':
            setPageSettingsLocal(action.pageSettings);
            return action.pageSettings;
        case 'MODIFY_PAGE_SETTINGS':
            const nextState = Object.assign({}, state);
            let denyLevelPackageTest = false;
            Object.keys(action.pageSettings).forEach((key) => {
                if (key !== 'subscriptions') {
                    nextState[key] = action.pageSettings[key];
                    if (/displayPackages|denyLevel|packageData/.test(key)) {
                        denyLevelPackageTest = true;
                    }
                }
            });
            if (denyLevelPackageTest) {
                nextState.displayPackages = filterDisplayPackages(
                    action.pageSettings.displayPackages || state.displayPackages, 
                    action.pageSettings.packagesData || state.packagesData, 
                    action.pageSettings.denyLevel || state.denyLevel
                )
            }
            nextState.subscriptions = buildDisplayOffersData(nextState, !!action.pageSettings.subscriptions ? action.pageSettings.subscriptions : state.subscriptions.offersMap);
            setPageSettingsLocal(nextState);
            return nextState;
        default: 
            return state;
    }
}