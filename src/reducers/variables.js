import variables from '../data/variables';
import { setVariablesLocal, lowerOfferingsDisplayCalculation } from '../actions/variables';

export default (state = variables, action) => {
    switch (action.type) {
        case 'REPLACE_VARIABLES':
            setVariablesLocal(action.variables);
            nextState.lowerOfferings = lowerOfferingsDisplayCalculation(action.variables);
            return action.variables;
        case 'MODIFY_VARIABLES':
            const nextState = Object.assign({}, state);
            Object.keys(action.variables).forEach((key) => {
                nextState[key] = action.variables[key];
            });
            setVariablesLocal(nextState);
            nextState.lowerOfferings = lowerOfferingsDisplayCalculation(nextState);
            return nextState;
        default: 
            return state;
    }
}