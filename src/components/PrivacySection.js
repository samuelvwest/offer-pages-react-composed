import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} privacy-section privacy-section--${styleName}`
}

const PrivacySection = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    if (props.variables.privacySection) {
        return (
            <div className={`privacy-wrapper offerings-variable--${props.variables.offerings}`}>
                <div className={`privacy-container mb-6 over-the-top m10 ${classesMaker(`sparkly-dragon`)}`}>
                    <div className="privacy-head-wrapper">
                        <h1 className="conTitle feature-title flex-container flex-center">
                            <img className="lock-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/lock.png" />
                            Privacy
                        </h1>
                        <a href="https://www.ancestry.com/cs/legal/privacystatement">View Privacy Statement</a>
                    </div>
                    <p>Your privacy is important to us. You control who sees the information in your family tree. Living people are always hidden by default.</p>
                </div>
            </div>
        )
    }
    return <div></div>
});

export default PrivacySection;