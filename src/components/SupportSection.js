import React from 'react';
import { connect } from 'react-redux';
import { adobeTargetTrackEvent } from '../actions/tracking';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} support-section support-section--${styleName}`
}

const SupportSection = connect(mapStateToProps)(({ pageSettings: pS, variables }) => {
    const bonsaiSupportSectionTest = pS.windowWidth >= pS.breaks.control.desktop && /control/.test(variables.offerings) && !/join/.test(pS.location);
    if (variables.supportSection){
        if (!bonsaiSupportSectionTest) {
            return (
                <div className={`feature-wrap-new flex-container ${classesMaker(`sparkly-dragon`)} offerings-variable--${variables.offerings} scroll-tracking--supportSection`}
                    onClick={() => {
                        adobeTargetTrackEvent({
                            eventType: 'clickSection',
                            section: 'supportSection'
                        })
                    }}
                >
                    <div className="feature-description-new">
                        <p className="feature-title-new">
                            <img className="feature-img-new mobile-support-img lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/phone1.png" />
                            Support
                        </p>
                        <strong className="textlrg bamboo4">Need help?</strong>
                        <span className="bamboo4 help-contact">1-800-ANCESTRY</span>
                        <br /><span className="support-timings-txt">7 days a week, 9am–11pm ET</span>
                    </div>
                </div>
            )
        } else {
            return <div className="support-section--in-bonsai-offerings"></div>
        }
    }
    return <div className="support-section--not-included"></div>
});

export default SupportSection;