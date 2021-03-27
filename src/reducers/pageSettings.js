import pageSettings from '../data/pageSettings';
import { setPageSettingsLocal } from '../actions/pageSettings';
import { buildDisplayOffersData } from './../actions/subscriptions';

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
            nextState.subscriptions = buildDisplayOffersData(nextState, !!action.pageSettings.subscriptions ? action.pageSettings.subscriptions : state.subscriptions.offersMap);
            setPageSettingsLocal(nextState);
            return nextState;
        default: 
            return state;
    }
}