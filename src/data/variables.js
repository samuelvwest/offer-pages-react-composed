import { getVariablesLocal, lowerOfferingsDisplayCalculation } from '../actions/variables';

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
    faqsSection: `not-included`,
    otherProductsSection: false,
    feedbackSection: false
}

variables.lowerOfferings = lowerOfferingsDisplayCalculation(variables);

export default variables;