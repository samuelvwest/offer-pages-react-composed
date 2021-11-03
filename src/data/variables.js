import { getVariablesLocal, lowerOfferingsDisplayCalculation } from '../actions/variables';

export const variables = getVariablesLocal() || {
    headerStyle: `control`,
    headerText: `control`,
    timeline: false,
    offerings: `control`,
    packageEmphasis: `usdiscovery`,
    durationEmphasis: `monthly`,
    testimonialSection: true,
    featuresGrid: `pretty-grid`,
    supportSection: true,
    videoSection: true,
    examplesSection: false,
    privacySection: false,
    faqsSection: `not-included`,
    otherProductsSection: false,
    feedbackSection: false
}

const lowerOfferingsValue = lowerOfferingsDisplayCalculation(variables)
variables.lowerOfferings = /full/.test(lowerOfferingsValue);
variables.lowerOffersLink = /link/.test(lowerOfferingsValue);

export default variables;