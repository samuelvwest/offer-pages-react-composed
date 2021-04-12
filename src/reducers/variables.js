import variables from '../data/variables';
import { setVariablesLocal, displayLowerOfferCalculation } from '../actions/variables';

export default (state = variables, action) => {
    switch (action.type) {
        case 'REPLACE_VARIABLES':
            setVariablesLocal(action.variables);
            nextState.displayLowerOffer = displayLowerOfferCalculation(action.variables);
            return action.variables;
        case 'MODIFY_VARIABLES':
            const nextState = Object.assign({}, state);
            Object.keys(action.variables).forEach((key) => {
                nextState[key] = action.variables[key];
            });
            setVariablesLocal(nextState);
            nextState.displayLowerOffer = displayLowerOfferCalculation(nextState);
            return nextState;
        default: 
            return state;
    }
}