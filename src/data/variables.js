import { showSettingsTest } from '../actions/pageSettings';
import { getVariablesLocal } from '../actions/variables';

export const variables = getVariablesLocal() || {
        headerStyle: `control`,
        headerText: `control`,
        timeline: false,
        offerings: `control`
    }

export default variables;