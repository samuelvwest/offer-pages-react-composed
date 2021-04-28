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
    return `container container--${styleName} feedback-section feedback-section--${styleName}`
}

const FeedbackSection = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    if (props.variables.feedbackSection) {
        return (
            <div className={`over-the-top ${classesMaker(`sparkly-dragon`)} offerings-variable--${props.variables.offerings} scroll-tracking--feedbackSection`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'feedbackSection'
                    })
                }}
            >
                <div className="feedback">
                    <h1 className="conTitle feature-title">Feedback</h1>
                    <p>Please let us know if you have any <a href="https://ancestry.az1.qualtrics.com/jfe/form/SV_bPMuBO4OJgA3adL" target="_blank"
                        onClick={() => {
                            adobeTargetTrackEvent({
                                eventType: 'clickButton',
                                button: 'feedbackLink'
                            })
                        }}
                    >feedback</a> about membership plans or this page.</p>
                </div>
            </div>
        )
    }
    return <div></div>
});

export default FeedbackSection;