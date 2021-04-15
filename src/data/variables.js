import { getVariablesLocal, displayLowerOfferCalculation } from '../actions/variables';

export const variables = getVariablesLocal() || {
    headerStyle: `control`,
    headerText: `control`,
    timeline: false,
    offerings: `control`,
    packageEmphasis: `usdiscovery`,
    durationEmphasis: `monthly`,
    testimonialSection: true,
    featuresGrid: `control`,
    supportSection: true,
    infoSections: false,
    videoSection: false,
    examplesSection: false,
    privacySection: false,
    faqsSection: false,
    otherProductsSection: false,
    feedbackSection: false
}

variables.displayLowerOffer = displayLowerOfferCalculation(variables);

export default variables;