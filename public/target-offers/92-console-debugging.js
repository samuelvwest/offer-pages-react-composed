// Set up variable control function if not defined yet
window._mV = window._mV || function(newState) {
    tao.g.modifyVariables = tao.g.modifyVariables || {};
    Object.keys(newState).forEach((key) => {
        tao.g.modifyVariables[key] = newState[key];
    });
}
// Set this variable variant definition.
window._mV({ headerStyle: `control` })
window._mV({ headerText: `sparkly-dragon` })
window._mV({ timeline: true })
window._mV({ offerings: `pretty-grid` })
window._mV({ packageEmphasis: `worldexplorer` })
window._mV({ durationEmphasis: `sabm` })
window._mV({ supportSection: false })
window._mV({ featuresGrid: `pretty-grid` })
window._mV({ testimonialSection: true })
window._mV({ infoSections: true })
window._mV({ videoSection: false })
window._mV({ examplesSection: true })
window._mV({ faqsSection: `pretty-grid` })
window._mV({ otherProductsSection: false })
window._mV({ privacySection: false })
window._mV({ feedbackSection: true })