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

// Calculate lower offerings location
const variableHeightValues = {
    testimonialSection: 3,
    featuresGrid: 10,
    supportSection: 1,
    videoSection: 2,
    examplesSection: 5,
    privacySection: 1,
    faqsSection: 4,
    otherProductsSection: 2,
    feedbackSection: 1
}

export const displayLowerOfferCalculation = (variables) => {
    let score = 0;
    Object.keys(variableHeightValues).forEach((key) => {
        const varVal = variables[key];
        if (!!varVal && !/not-included/.test(varVal)) {
            score = score + variableHeightValues[key];
        }
    })
    return score > 18;
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