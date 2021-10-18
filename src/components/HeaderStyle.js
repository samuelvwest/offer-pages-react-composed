import React from 'react';
import { connect } from 'react-redux';
import HeaderText from './HeaderText';
import { LegalSup } from './LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName, offeringsVariable) => {
    return `container container--${styleName} header-style header-style--${styleName} offerings-variable--${offeringsVariable}`
}

const HeaderStyle = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    // Tablet Desktop version of PrettyGrid
    return (
        <div className="header-style">
            {window.innerWidth < props.pageSettings.breaks.control.tablet ? 
                <div className="colorstack">
                    <section className="aboveFoldCon">
                        <h1 className="chooseMemText" elementtiming="ancestry_meaningful_paint">
                            <HeaderText />
                        </h1>
                    </section>
                </div> : 
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
                    </div>
                </header>
            }
        </div>
    )
})





export default HeaderStyle;