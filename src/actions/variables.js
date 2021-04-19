import { showSettingsTest } from './pageSettings';

// Set variables {} in localStorage
export const setVariablesLocal = (variables) => {
    // if (showSettingsTest()) {
        const variablesObj = Object.assign({}, variables)
        window.localStorage.variables = JSON.stringify(variablesObj);
    // }
}

// Get variables {} from localStorage
export const getVariablesLocal = () => {
    // if (!!window.localStorage && !!window.localStorage.variables && showSettingsTest()) {
    if (!!window.localStorage && !!window.localStorage.variables) {
        return JSON.parse(window.localStorage.variables);
    }
    return false;
}

// Remove variables {} from localStorage
export const removeVariablesLocal = () => {
    delete window.localStorage.variables;
}

// Calculate lower offerings location
export const variablesData = {
    headerStyle: {
        trackViewport: false,
        heightScore: 0
    },
    headerText: {
        trackViewport: false,
        heightScore: 0
    },
    timeline: {
        trackViewport: false,
        heightScore: 0
    },
    offerings: {
        trackViewport: false,
        heightScore: 0
    },
    packageEmphasis: {
        trackViewport: false,
        heightScore: 0
    },
    durationEmphasis: {
        trackViewport: false,
        heightScore: 0
    },
    testimonialSection: {
        trackViewport: true,
        heightScore: 3
    },
    featuresGrid: {
        trackViewport: true,
        heightScore: 10
    },
    supportSection: {
        trackViewport: true,
        heightScore: 1
    },
    infoSections: {
        trackViewport: true,
        heightScore: 12
    },
    videoSection: {
        trackViewport: true,
        heightScore: 2
    },
    examplesSection: {
        trackViewport: true,
        heightScore: 5
    },
    privacySection: {
        trackViewport: true,
        heightScore: 1
    },
    faqsSection: {
        trackViewport: true,
        heightScore: 4
    },
    otherProductsSection: {
        trackViewport: true,
        heightScore: 2
    },
    feedbackSection: {
        trackViewport: true,
        heightScore: 1
    },
    lowerOfferings: {
        trackViewport: true,
        heightScore: 0
    }
}

export const lowerOfferingsDisplayCalculation = (variables) => {
    let score = 0;
    Object.keys(variablesData).forEach((key) => {
        const variableStr = variables[key];
        if (!!variableStr && !/not-included/.test(variableStr)) {
            score = score + variablesData[key].heightScore;
        }
    })
    return score > 18;
}

export const mapScrollTrackingVariables = (variables) => {
    const scrollableElems = Object.keys(variables).filter((key) => {
        const variableStr = variables[key];
        // console.log(key, variablesData[key])
        return (
            !!variableStr 
            && !/not-included/.test(variableStr)
            && variablesData[key].trackViewport
        )
    })
    return scrollableElems
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