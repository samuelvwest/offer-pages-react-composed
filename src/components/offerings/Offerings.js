import React from 'react';
import { connect } from 'react-redux';
import ColorStack from './ColorStack';
import ColorGrid from './ColorGrid';
import BonsaiGrid from './BonsaiGrid';
import GreenTop from './GreenTop';
import SparklyDragon from './SparklyDragon';
import PrettyGrid from './PrettyGrid';
import { promoSubscriptions } from '../../data/subscriptions';

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