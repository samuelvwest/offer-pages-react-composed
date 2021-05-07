import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../actions/pageSettings';
import { modifyVariables, mapScrollTrackingVariables } from '../actions/variables';
import { adobeTargetTrackEvent, elemIsInViewport } from '../actions/tracking';
import SettingsControl from './SettingsControl';
import HeaderStyle from './header-style/HeaderStyle';
import Offerings, { OffersLink }  from './offerings/Offerings';
import TestimonialSection from './TestimonialSection';
import FeaturesGrid from './features-grid/FeaturesGrid';
import SupportSection from './SupportSection';
import VideoSection from './VideoSection';
import ExamplesSection from './ExamplesSection';
import PrivacySection from './PrivacySection';
import FAQsSection from './faqs-section/FAQsSection';
import OtherProductsSection from './OtherProductsSection';
import FeedbackSection from './FeedbackSection';
import InfoSections from './InfoSections';
import LegalText from './LegalText';

const mapStateToProps = (state) => ({
    pageSettings: state.pageSettings,
    variables: state.variables
});

const mapDispatchToProps = (dispatch) => ({
    modifyPageSettings: (modifications) => dispatch(modifyPageSettings(modifications)),
    modifyVariables: (modifications) => dispatch(modifyVariables(modifications))
});


export class OfferPage extends React.Component {
    // state = {
    //     location: !!document.location.pathname.match(`offers\/?(.*)`) ? document.location.pathname.match(`offers\/?(.*)`)[1] : `freetrial`,
    //     elligibility: !document.cookie.match(`BAIT([^; ]+)`) ? `freetrial` : /E(Trial|Sub)%3D1/.test(document.cookie.match(`BAIT([^; ]+)`)[0]) ? `hardoffer` : `freetrial`,
    //     variableHeaderStyle: `bonsai-grid`,
    //     variableHeaderText: `bonsai-grid`,
    //     variableTimeline: false
    // }
    // changeStateValues = (newState) => {
    //     this.setState(prevState => ( 
    //         newState 
    //     ));
    // }
    setTitleAttribute = () => {
        document.title = this.props.pageSettings.location === `freetrial` ? 
            `Start your FREE trial at Ancestry` : this.props.pageSettings.location === 'hardoffer' ? 
            `Become a member` : `Join Ancestry`;
    }
    updateDimensions = () => {
        if (!window._resizeBuffer) {
            window._resizeBuffer = 'active';
            setTimeout(() => {
                this.props.modifyPageSettings({
                    windowWidth: window.outerWidth,
                    windowHeight: window.outerWidth
                });
                delete window._resizeBuffer;
            }, 500)
        }
    }
    trackElemsInViewport = () => {
        if (!window._scrollTrackingData.triggered) {
            window._scrollTrackingData.triggered = true;
            setTimeout(() => {
                const toReport = window._scrollTrackingData.elems.reportable.filter((elemStr) => {
                    return !window._scrollTrackingData.elems.reported.some((elemStr2) => elemStr === elemStr2);
                })
                toReport.forEach((elemStr) => {
                    if (elemIsInViewport(document.querySelector(`.scroll-tracking--${elemStr}`))) {
                        window._scrollTrackingData.elems.reported.push(elemStr);
                        adobeTargetTrackEvent({ 
                            eventType: 'sectionInView',
                            section: elemStr
                        })
                    }
                })
                // console.log(window._scrollTrackingData);
                window._scrollTrackingData.triggered = false;
            }, 500)
        }
    }
    getDenyPackageLevel = () => {
        // console.log('ran deny type function');
        if (this.props.pageSettings.location === 'join') {
            const setDenyType = () => {
                const denyPackage = this.props.pageSettings.packagesData.find((pkg) => pkg.denyStr === window.deniedTo.DenyToV1);
                // console.log(denyPackage);
                this.props.modifyPageSettings({
                    denyLevel: !!denyPackage ? denyPackage.order : 'NA'
                });
            }
            if (!window.deniedTo || (!!window.deniedTo && !window.deniedTo.DenyToV1)) {
                window._gDTI = setInterval(() => {
                    // console.log('checked');
                    if (!!window.deniedTo && !!window.deniedTo.DenyToV1 && !!window.deniedTo.DenyToV2) {
                        setDenyType();
                        // console.log('cleared interval');
                        clearInterval(window._gDTI);
                    }
                }, 100)
            } else {
                setDenyType();
            }
        }
    }
    updatePageSettingsforEmphasis = (varObj) => {
        if (!!varObj.packageEmphasis || !!varObj.durationEmphasis) {
            const pSMods = {
                selectedOffer: {
                    renewMonths: this.props.pageSettings.selectedOffer.renewMonths,
                    packageID: this.props.pageSettings.selectedOffer.packagID,
                    ldbm: this.props.pageSettings.selectedOffer.ldbm 
                }
            }
            if (!!varObj.packageEmphasis) {
                pSMods.selectedOffer.packageID = varObj.packageEmphasis
            }
            if (!!varObj.durationEmphasis) {
                pSMods.selectedOffer.renewMonths = /monthly/.test(varObj.durationEmphasis) ? 1 : 6
                pSMods.selectedOffer.ldbm = /sabm/.test(varObj.durationEmphasis)
                if (/toggle/.test(this.props.pageSettings.LDBM) && pSMods.selectedOffer.renewMonths > 1) {
                    pSMods.LDBM = `toggle-${pSMods.selectedOffer.ldbm ? `front` : `back`}`;
                }
            }
            this.props.modifyPageSettings(pSMods);
        }
    }
    buildVariantTracking = (passObj) => {
        console.log('started build variant tracking');
        const milBuffer = 2000
        if (!window._bVT) {
            window._bVT = {
                bufferMark: new Date().getTime() + milBuffer,
                started: false,
                complete: false,
                passObj: {
                    mbox: `spaVariantTracking`,
                    pageLoc: this.props.pageSettings.location,
                    denyLevel: this.props.pageSettings.denyLevel
                }
            }
        } else {
            window._bVT.bufferMark = new Date().getTime() + milBuffer;
        }
        Object.keys(passObj).forEach((key) => {
            window._bVT.passObj[key] = passObj[key]
        })
        if (!window._bVT.started) {
            window._bVT.started = true;
            window._bVT.interval = setInterval(() => {
                const currentTimeTest = new Date().getTime() > window._bVT.bufferMark;
                console.log(currentTimeTest);
                if (!window._bVT.complete && currentTimeTest) {
                    if (!!window.tao.g.additionalVariantAttributes) {
                        Object.keys(window.tao.g.additionalVariantAttributes).forEach((key) => {
                            window._bVT.passObj[key] = window.tao.g.additionalVariantAttributes[key];
                        });
                    }
                    adobeTargetTrackEvent(window._bVT.passObj);
                    window._bVT.complete = true;
                    clearInterval(window._bVT.interval);
                }
            }, 200)
        }
    }
    setupTargetIntegration = () => {
        if (!!window.tao && !!window.tao.g) {
            if (!!window.tao.g.modifyVariables) {
                // console.log(`state from init: `, window.tao.g.modifyVariables);
                this.updatePageSettingsforEmphasis(window.tao.g.modifyVariables);
                this.props.modifyVariables(tao.g.modifyVariables);
                delete tao.g.modifyVariables;
            }
        }
        window._mV = (newState) => {
            // console.log(`state from _mV: `, newState);
            this.updatePageSettingsforEmphasis(newState);
            this.props.modifyVariables(newState);
            this.buildVariantTracking(newState);
        };
    }
    componentWillMount = () => {
        if (!window.coreJSLoad && !document.querySelector('script[src*="core.js"]') && !window.ui) {
            window.coreJSLoad = 'started';
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.onload = () => window.coreJSLoad = 'complete';
            script.src = "https://www.ancestrycdn.com/ui/2.10.0/js/core.js";
            document.head.appendChild(script);
        }
        window.removeEventListener('resize', this.updateDimensions);
        if (!window._scrollTrackingData) {
            window._scrollTrackingData = {
                triggered: false,
                elems: {
                    reportable: [],
                    reported: []
                }
            }
            this.trackElemsInViewport();
        }
        // mapScrollTrackingVariables(this.props.variables)
        // console.log(window._scrollTrackingData);
        window.removeEventListener('scroll', this.trackElemsInViewport);
        this.getDenyPackageLevel();
        this.setupTargetIntegration();
        // window._rS = (newState) => {
        //     this.props.replaceSubscriptions(newState);
        // };
        window._mPS = (newState) => {
            this.props.modifyPageSettings(newState);
        };
    }
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      window.addEventListener('scroll', this.trackElemsInViewport);
      this.setTitleAttribute();
    }
    render() {
        window._scrollTrackingData.elems.reportable = mapScrollTrackingVariables(this.props.variables)
        return (
            <div className={`page-wrap page-wrap--offerings-variable-${this.props.variables.offerings} page-wrap--location-${this.props.pageSettings.location} page-wrap--elligibility-${this.props.pageSettings.elligibility}`}>
                {!!this.props.pageSettings.showSettings && <SettingsControl />}
                <HeaderStyle />
                <Offerings placement="top" />
                <SupportSection />
                <FeaturesGrid />
                <TestimonialSection />
                <InfoSections />
                <VideoSection />
                <ExamplesSection />
                <FAQsSection />
                {/link/.test(this.props.variables.lowerOfferings) && <OffersLink/>}
                {/full/.test(this.props.variables.lowerOfferings) && <Offerings placement="bottom" />}
                <OtherProductsSection />
                <PrivacySection />
                <FeedbackSection />
                <LegalText />
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
