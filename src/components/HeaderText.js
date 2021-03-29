import React from 'react';
import { connect } from 'react-redux';
import { LegalSup } from './LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `header-text header-text--${styleName}`
}

const HeaderText = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    if (props.variables.headerText === `sparkly-dragon`) {
        // Sparkly Dragon Text
        return (
            <span className={classesMaker('sparklydragon')}>
                Connect with your ancestors through historical documents. 
                {/initial/.test(pS.elligibility) && 
                    <span className="header-text__free-for">Free for 14 days<LegalSup supRef="freeTrial"/></span>
                }
            </span>
        )
    } else {
        if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
            // Control text from Color Stack design – phone on all offer pages
            return (
                <span className={classesMaker('colorstack')}>
                    Choose a membership to try
                    {/initial/.test(pS.elligibility) ? 
                        <span> 
                            <strong className="header-text__free-for">FREE for 14 days.</strong><LegalSup supRef="freeTrial"/>
                        </span> : 
                        <span>.</span>
                    }
                </span>
            )
        } else if (props.pageSettings.location === 'join') {
            // Control text for Green Top design – tablet & desktop on CARE pages
            return (
                <span className={classesMaker('greentop')}>We're giving you access to <i>your</i> history.</span>
            )
        } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
            // Control text for Color Grid design – tablet on FTLP & HOLP
            return (
                <span className={classesMaker('colorgrid')}>
                    Discover your family story with an Ancestry&nbsp;membership
                    {/initial/.test(pS.elligibility) ? 
                        <span><strong className="header-text__free-for">FREE for 14 days.</strong><LegalSup supRef="freeTrial"/></span> : 
                        <span>.</span>
                    }
                </span>
            )
        } else {
            // Control text for Bonsai Grid design – desktop on FTLP & HOLP
            return /initial/.test(pS.elligibility) ? (
                <span className={classesMaker('bonsaigrid')}>
                    Explore the world's largest online family history resource<span className="header-text__free-for">FREE for 14 days.<LegalSup supRef="freeTrial"/></span>
                </span>
            ) : (
                <span className={classesMaker('bonsaigrid')}>
                    Start exploring the world’s largest online family history resource today.
                </span>
            )
        }
    }
});

export default HeaderText;