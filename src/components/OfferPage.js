import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../actions/pageSettings';
import { modifyVariables } from '../actions/variables';
import SettingsControl from './SettingsControl';
import HeaderStyle from './header-style/HeaderStyle';
import Offerings from './offerings/Offerings';
import FeaturesGrid from './features-grid/FeaturesGrid';
import SupportSection from './SupportSection';
import VideoSection from './VideoSection';
import ExamplesSection from './ExamplesSection';
import PrivacySection from './PrivacySection';
import FAQsSection from './FAQsSection';
import OtherProductsSection from './OtherProductsSection';
import FeedbackSection from './FeedbackSection';
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
    getDenyPackageLevel = () => {
        // console.log('ran deny type function');
        if (this.props.pageSettings.location === 'join') {
            if (!window.deniedTo || (!!window.deniedTo && !window.deniedTo.DenyToV1)) {
                window._gDTI = setInterval(() => {
                    // console.log('checked');
                    if (!!window.deniedTo && !!window.deniedTo.DenyToV1 && !!window.deniedTo.DenyToV2) {
                        const denyPackage = this.props.pageSettings.packagesData.find((pkg) => pkg.denyStr === window.deniedTo.DenyToV1);
                        this.props.modifyPageSettings({
                            denyLevel: !!denyPackage ? denyPackage.order : 'NA'
                        });
                        // console.log('cleared interval');
                        clearInterval(window._gDTI);
                    }
                }, 100)
            }
        }
    }
    setupTargetIntegration = () => {
        if (!!window.tao && !!window.tao.g) {
            if (!!window.tao.g.modifyVariables) {
                this.props.modifyVariables(tao.g.modifyVariables);
                delete tao.g.modifyVariables;
                window._mV = (newState) => {
                    this.props.modifyVariables(newState);
                };
            }
        }
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
        this.setupTargetIntegration();
        window._rS = (newState) => {
            this.props.replaceSubscriptions(newState);
        };
    }
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }
    render() {
        this.setTitleAttribute();
        this.getDenyPackageLevel();
        // this.displayOffersData = buildDisplayOffersData({
        //     pS: this.props.pageSettings,
        //     oM: this.props.subscriptions
        // });
        window._mPS = (newState) => {
            this.props.modifyPageSettings(newState);
        };
        // window._mV = (newState) => {
        //     this.props.modifyVariables(newState);
        // };
        return (
            <div>
                {!!this.props.pageSettings.showSettings && <SettingsControl />}
                <HeaderStyle />
                <Offerings />
                {/* <SupportSection /> */}
                {/* <FeaturesGrid /> */}
                {/* <VideoSection /> */}
                {/* <ExamplesSection /> */}
                {/* <PrivacySection /> */}
                {/* <FAQsSection /> */}
                {/* <OtherProductsSection /> */}
                {/* <FeedbackSection /> */}
                {/* <LegalText /> */}
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
