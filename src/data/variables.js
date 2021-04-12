import { getVariablesLocal, displayLowerOfferCalculation } from '../actions/variables';

export const variables = getVariablesLocal() || {
    headerStyle: `control`,
    headerText: `control`,
    timeline: false,
    offerings: `control`,
    testimonialSection: true,
    featuresGrid: `control`,
    supportSection: true,
    videoSection: false,
    examplesSection: false,
    privacySection: false,
    faqsSection: false,
    otherProductsSection: false,
    feedbackSection: false
}

variables.displayLowerOffer = displayLowerOfferCalculation(variables);

export default variables;