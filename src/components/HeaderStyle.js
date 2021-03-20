import React from 'react';
import { connect } from 'react-redux';
import Timeline from './Timeline';
import HeaderText from './HeaderText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables,
        subscriptions: state.subscriptions
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} header-style header-style--${styleName}`
}

const ControlHeader = (props) => {
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        return (
            <div className={classesMaker('colorstack')}>
                <section id="memOptions" className="aboveFoldCon">
                    <h1 className="chooseMemText" elementtiming="ancestry_meaningful_paint">
                        <HeaderText />
                    </h1>
                    <Timeline />
                </section>
            </div>
        )
    } else if (props.pageSettings.location === 'join') {
        // Green Top for Tablet & Desktop for CARE pages
        return (
            <div className={classesMaker('greentop')}>
                <header className="ftSubPageHeader bgDark bgTexture3 bgColor4">
                    <div className="page">
                        <p className="bold ftSubPageIntro">
                            {/World_Deluxe/.test(props.pageSettings.denyType) ? `World Explorer` : `U.S. Discovery`} membership
                        </p>
                        <h1 className="ftSubPageTitle">
                            <HeaderText />
                        </h1> 
                        <Timeline />
                    </div>
                </header>
                <section className="ftSubOfferSection mainOfferSection">
                    <div className="page">
                        <div className="ancGrid full480">
                            <div className="ancCol w60"></div>
                            <div className="ancCol w40 hide480">
                                <div className="pageHeroImg"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        // Color Grid for Tablet on FTLP & HOLP
        return (
            <div className={classesMaker('colorgrid')}>
                <header id="smpAncHeaderWrap" aria-label="Main Navigation" role="banner" className="clearfix">
                    <div className="offerHeadlineWrap">
                        <h1 className="offerHeadline coloralt text5xlrg" elementtiming="ancestry_meaningful_paint">
                            <HeaderText />
                        </h1>
                        <br />
                        <p className="offerHeadline coloralt" style={{fontSize: `17px`}}>
                            <strong>Choose a membership to try.</strong>
                            {props.pageSettings.elligibility === `freetrial` && <span> There’s no risk - you’ll only be billed if you decide to keep your membership after&nbsp;your&nbsp;free&nbsp;trial.</span>}
                        </p>
                        {props.variables.timeline && <br />}
                        <Timeline />
                    </div>
                </header>
            </div>
        )
    } else {
        // Bonsai Grid for Desktp on FTLP & HOLP
        return (
            <div className={classesMaker('bonsaigrid')}>
                <section className="offerGrid"> 
                    <div className="ancGrid priceGrid">
                        <div className="ancCol full480 w75">
                            <div className="headlines">
                                <h1 className="greenTxt text4xlrg" elementtiming="ancestry_meaningful_paint">
                                    <HeaderText />
                                </h1>
                                <p className="textlrg">
                                    <strong>Choose a membership to try.</strong> 
                                    {props.pageSettings.elligibility === `freetrial` && ` There's no risk – you'll only be billed if you decide to keep your membership after your free trial.`}
                                </p>
                                <Timeline />
                            </div>
                        </div>
                        <div className="ancCol hide480 w25">
                            <div className="documentsImg"></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const SparklyDragonHeader = (props) => {
    return (
        <div className={classesMaker('sparklydragon')}>
            <section id="memOptions" className="aboveFoldCon">
                <div className="chooseMemText hide768 show480 hidden-md-up textCenter">
                    <span className="bold headline-text">
                        <HeaderText />
                    </span>
                    <Timeline />
                </div>
                <div className="ancGrid priceGrid hide480 hero-section-container">
                    <div className="ancCol hide480 w25 hide show-lg-up-block">
                        <div className="documentsImg documentimg-hero-desk"></div>
                    </div>
                    <div className="ancCol full480 w75">
                        <div className="headlines">
                            <h1 className="greenTxt text3xlrg bold">
                                <HeaderText />
                            </h1>
                            <p className="textlrg">
                                <span className="cancel-txt">Cancel anytime. Keep your family tree.</span>
                            </p>
                        </div>
                        <Timeline />
                    </div>
                    <div className="ancCol hide480 w25 hide show768 hidden-lg-up">
                        <div className="documentsImg document-hero-img-tab"></div>
                    </div>
                    {/* <div className="buttonpill-wrap" id="form-plan-container">
                        <div className="buttonpill-inner">
                            <div className="buttonPill">
                                <button type="button" id="monthPill" className="activePill monthPill icon iconCheck">Monthly</button> 
                                <input id="monthPillInput" className="radioBtn hide" type="radio" name="planPer" value="monthly" /> 
                                <button type="button" id="month6Pill" className="inactivePill month6Pill">6 Months</button> 
                                <input id="month6PillInput" className="radioBtn hide" type="radio" name="planPer" value="biannual" />
                                <div className="arrow" id="save20">
                                    <span className="textsml">Saves $$</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

const HeaderStyle = connect(mapStateToProps)((props) => {
    if (props.variables.headerStyle === `sparkly-dragon`) {
        return <SparklyDragonHeader {...props} />
    } else {
        return <ControlHeader {...props} />
    }
});

export default HeaderStyle;