import pageSettings from '../data/pageSettings';
import { setPageSettingsLocal } from '../actions/pageSettings';

export default (state = pageSettings, action) => {
    switch (action.type) {
        case 'REPLACE_PAGE_SETTINGS':
            setPageSettingsLocal(action.pageSettings);
            return action.pageSettings;
        case 'MODIFY_PAGE_SETTINGS':
            const nextState = Object.assign({}, state);
            Object.keys(action.pageSettings).forEach((key) => {
                nextState[key] = action.pageSettings[key];
            });
            setPageSettingsLocal(nextState);
            return nextState;
        default: 
            return state;
    }
}