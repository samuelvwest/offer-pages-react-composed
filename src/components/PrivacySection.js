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
    return `container container--${styleName} privacy-section privacy-section--${styleName}`
}

const PrivacySection = connect(mapStateToProps)(({ pageSettings: pS, variables }) => {
    if (variables.privacySection) {
        return (
            <div className={`privacy-wrapper offerings-variable--${variables.offerings} scroll-tracking--privacySection`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'privacySection'
                    })
                }}
            >
                <div className={`privacy-container mb-6 over-the-top m10 ${classesMaker(`sparkly-dragon`)}`}>
                    <div className="privacy-head-wrapper">
                        <h1 className="conTitle feature-title flex-container flex-center">
                            <img className="lock-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/lock.png" />
                            Privacy
                        </h1>
                        <a href="https://www.ancestry.com/cs/legal/privacystatement" target="_blank"
                            onClick={() => {
                                adobeTargetTrackEvent({
                                    eventType: 'clickButton',
                                    button: 'privacyStatement'
                                })
                            }}
                        >View Privacy Statement</a>
                    </div>
                    <p>Your privacy is important to us. You control who sees the information in your family tree. Living people are always hidden by default.</p>
                </div>
            </div>
        )
    }
    return <div className="privacy-section--not-included"></div>
});

export default PrivacySection;