import React from 'react';
import { connect } from 'react-redux';
import ColorStack from './Control';
import Timeline from '../Timeline';
import HeaderText from '../HeaderText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} header-style header-style--${styleName}`
}

const PrettyGrid = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        return <ColorStack/>
    }
    // Tablet Desktop version of PrettyGrid
    return (
        <div className={`${classesMaker('prettygrid')} offerings-variable--${props.variables.offerings}`}>
            <header className="offerPageHeader">
                <div className="page pagePadded pageWidth1">
                    <div className="offerPageHeaderImg"></div>
                    <div className="headerContent">
                        <h1 className="offerPageTitle text6xlrg light">
                            <HeaderText/>
                        </h1>
                        {/initial/.test(pS.elligibility) ? 
                            <p className="offerPageIntro text2xlrg topSpacingBlock">
                                Trace your family tree with millions of fascinating&nbsp;records. 
                                <br />Pick the membership below for your 14 day free&nbsp;trial.
                            </p> :
                            <p className="offerPageIntro text2xlrg topSpacingBlock">
                                Explore millions of fascinating records and delve into your family’s past.
                                <br />Just pick the membership that’s right for you below.
                            </p>
                        }
                    </div>
                    <Timeline/>
                </div>
            </header>
        </div>
    )
})

export default PrettyGrid;