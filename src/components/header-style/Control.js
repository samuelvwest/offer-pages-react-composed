import React from 'react';
import { connect } from 'react-redux';
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

const Control = connect(mapStateToProps)((props) => {
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        return (
            <div className={classesMaker('colorstack')}>
                <section className="aboveFoldCon">
                    <h1 className="chooseMemText" elementtiming="ancestry_meaningful_paint">
                        <HeaderText />
                    </h1>
                    <Timeline />
                </section>
            </div>
        )
    } else if (props.pageSettings.location === 'join') {
        // Green Top for Tablet & Desktop for CARE pages
        const packageData = props.pageSettings.packagesData.find((pkg) => pkg.order === props.pageSettings.denyLevel);
        return (
            <div className={classesMaker('greentop')}>
                <header className="ftSubPageHeader bgDark bgTexture3 bgColor4">
                    <div className="page">
                        <p className="bold ftSubPageIntro">
                            {packageData.name} membership
                        </p>
                        <h1 className="ftSubPageTitle">
                            <HeaderText />
                        </h1> 
                        <Timeline />
                        <div className="pageHeroImg pageHeroImg--header"></div>
                    </div>
                </header>
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
})

export default Control;