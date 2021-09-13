import React from 'react';
import { connect } from 'react-redux';
import Timeline from '../Timeline';
import HeaderText from '../HeaderText';
import { LegalSup } from '../LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const mapPageSettingsToProps = (state) => {
    return {
        pS: state.pageSettings
    }
}

const classesMaker = (styleName, offeringsVariable) => {
    return `container container--${styleName} header-style header-style--${styleName} offerings-variable--${offeringsVariable}`
}

export const ColorStack = connect(mapStateToProps)((props) => (
    <div className={classesMaker('colorstack', props.variables.offerings )}>
        <section className="aboveFoldCon">
            <h1 className="chooseMemText" elementtiming="ancestry_meaningful_paint">
                <HeaderText />
            </h1>
            <Timeline />
        </section>
    </div>
));

const GreenTop = connect(mapStateToProps)((props) => {
    const packageData = props.pageSettings.packagesData.find((pkg) => pkg.order === props.pageSettings.denyLevel);
    return (
        <div className={classesMaker('greentop', props.variables.offerings)}>
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
})

const ColorGrid = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    return (
        <div className={classesMaker('colorgrid', props.variables.offerings)}>
            <header id="smpAncHeaderWrap" aria-label="Main Navigation" role="banner" className="clearfix">
                <div className="offerHeadlineWrap">
                    <h1 className="offerHeadline coloralt text5xlrg" elementtiming="ancestry_meaningful_paint">
                        <HeaderText />
                    </h1>
                    <br />
                    <p className="offerHeadline coloralt" style={{fontSize: `17px`}}>
                        <strong>Choose a membership to try.{[
                                'winback_days55_58_90_bau', // Email Winback Discount Test Cell
                                'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
                            ].some((audience) => pS.audiences.indexOf(audience) > -1) && <LegalSup supRef="hardOffer" goToOnClick={true} />}
                        </strong>
                        {/initial/.test(pS.elligibility) && <span> There’s no risk - you’ll only be billed if you decide to keep your membership after&nbsp;your&nbsp;free&nbsp;trial.</span>}
                    </p>
                    {props.variables.timeline && <br />}
                    <Timeline />
                </div>
            </header>
        </div>
    )
})

const BonsaiGrid = connect(mapStateToProps)((props) => (
    <div className={classesMaker('bonsaigrid', props.variables.offerings)}>
        <section className="offerGrid"> 
            <div className="ancGrid priceGrid">
                <div className="ancCol full480 w75">
                    <div className="headlines">
                        <h1 className="greenTxt text4xlrg" elementtiming="ancestry_meaningful_paint">
                            <HeaderText />
                        </h1>
                        <p className="textlrg">
                            <strong>
                                Choose a membership to try.{[
                                    'winback_days55_58_90_bau', // Email Winback Discount Test Cell
                                    'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
                                ].some((audience) => props.pageSettings.audiences.indexOf(audience) > -1) && <LegalSup supRef="hardOffer" goToOnClick={true} />}
                            </strong> 
                            {/initial/.test(props.pageSettings.elligibility) && ` There's no risk – you'll only be billed if you decide to keep your membership after your free trial.`}
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
))

const Control = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    if (window.innerWidth < pS.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        return <ColorStack/>
    } else if (pS.location === 'join') {
        // Green Top for Tablet & Desktop for CARE pages
        return <GreenTop/>
    } else if (window.innerWidth < pS.breaks.control.desktop) {
        // Color Grid for Tablet on FTLP & HOLP
        return <ColorGrid/>
    }
    // Bonsai Grid for Desktop on FTLP & HOLP
    return <BonsaiGrid/>
})

export default Control;