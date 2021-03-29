import pageSettings from '../data/pageSettings';
import { setPageSettingsLocal, getElligibility } from '../actions/pageSettings';
import { buildDisplayOffersData, filterDisplayPackages } from './../actions/subscriptions';

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