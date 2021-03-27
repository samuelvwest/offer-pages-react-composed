import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../actions/pageSettings';
import { denyType } from '../actions/pageSettings';
import { modifyVariables } from '../actions/variables';
import { buildDisplayOffersData, replaceSubscriptions } from '../actions/subscriptions';
import SettingsControl from './SettingsControl';
import ColorStack from '../pages/ColorStack';
import ColorGrid from '../pages/ColorGrid';
import BonsaiGrid from '../pages/BonsiaGrid';
import GreenTop from '../pages/GreenTop';
import SparklyDragon from '../pages/SparklyDragon';
import HeaderStyle from './HeaderStyle';
import Offerings from './offerings/Offerings';
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
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight
                });
                delete window._resizeBuffer;
            }, 500)
        }
    }
    getDenyType = () => {
        // console.log('ran deny type function');
        if (this.props.pageSettings.location === 'join') {
            if (!window.deniedTo || (!!window.deniedTo && !window.deniedTo.DenyToV1)) {
                window._gDTI = setInterval(() => {
                    // console.log('checked');
                    if (!!window.deniedTo && !!window.deniedTo.DenyToV1 && !!window.deniedTo.DenyToV2) {
                        this.props.modifyPageSettings({
                            denyType: denyType(this.props.pageSettings.location)
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
        this.getDenyType();
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

                {/* <ColorStack /> */}
                {/* <ColorGrid /> */}
                {/* <BonsaiGrid /> */}
                {/* <GreenTop /> */}
                {/* <SparklyDragon /> */}

                <HeaderStyle />
                <Offerings />
                <LegalText />
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
