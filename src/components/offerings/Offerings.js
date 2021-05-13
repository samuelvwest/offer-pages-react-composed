import React from 'react';
import { connect } from 'react-redux';
import { scrollTo } from '../../actions/utilities';
import ColorStack from './ColorStack';
import ColorGrid from './ColorGrid';
import BonsaiGrid from './BonsaiGrid';
import GreenTop from './GreenTop';
import SparklyDragon from './SparklyDragon';
import PrettyGrid from './PrettyGrid';

const mapPageSettingsStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings
    }
};

const mapVariableToProps = (state) => {
    return {
        offerings: state.variables.offerings
    }
};

const mapVariablesToProps = (state) => {
    return {
        variables: state.variables
    }
};

export const OffersLink = connect(mapVariableToProps)(({ offerings }) => (
    <section className={`offerings-scroll-link finalCTACon offerings-variable--${offerings} scroll-tracking--lowerOffersLink`}>
        <div className="btnCon">
            <button className="ancBtn lrg"
                onClick={() => {
                    scrollTo({
                        selector: `.offerings-style:not(.offerings-placement--modal)`, 
                        trackStr: `scroll-to-offers-link`,
                        highlight: false
                    })
                }}
            >
                Choose a membership
            </button>
        </div>
    </section>
))

const Control = connect(mapPageSettingsStateToProps)((props) => {
    if (props.pageSettings.windowWidth < props.pageSettings.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        return <ColorStack placement={props.placement}/>
    } else if (props.pageSettings.location === 'join') {
        // Green Top for Tablet & Desktop for CARE pages
        return <GreenTop placement={props.placement}/>
    } else if (props.pageSettings.windowWidth < props.pageSettings.breaks.control.desktop) {
        // Color Grid for Tablet on FTLP & HOLP
        return <ColorGrid placement={props.placement}/>
    } else {
        // Bonsai Grid for Desktp on FTLP & HOLP
        return <BonsaiGrid placement={props.placement}/>
    }
});


const Offerings = connect(mapVariableToProps)(({ offerings, placement }) => {
    switch (offerings) {
        case 'sparkly-dragon':
            return <SparklyDragon placement={placement} />
        case 'pretty-grid':
            return <PrettyGrid placement={placement} />
        default: 
            return <Control placement={placement} />;
    }
});

export default Offerings;