import { showSettingsTest } from './pageSettings';

// Set variables {} in localStorage
export const setVariablesLocal = (variables) => {
    if (showSettingsTest()) {
        const variablesObj = Object.assign({}, variables)
        window.localStorage.variables = JSON.stringify(variablesObj);
    }
}

// Get variables {} from localStorage
export const getVariablesLocal = () => {
    if (!!window.localStorage && !!window.localStorage.variables && showSettingsTest()) {
        return JSON.parse(window.localStorage.variables);
    }
    return false;
}

// Remove variables {} from localStorage
export const removeVariablesLocal = () => {
    delete window.localStorage.variables;
}

// Replace Variables in REDUX
export const replaceVariables = (variables) => ({
    type: 'REPLACE_VARIABLES',
    variables
});

// Edit Variables in REDUX
export const modifyVariables = (variables) => ({
    type: 'MODIFY_VARIABLES',
    variables
});