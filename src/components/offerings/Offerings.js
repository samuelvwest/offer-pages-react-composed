import React from 'react';
import { connect } from 'react-redux';
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

const Control = connect(mapPageSettingsStateToProps)((props) => {
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        return <ColorStack/>
    } else if (props.pageSettings.location === 'join') {
        // Green Top for Tablet & Desktop for CARE pages
        return <GreenTop/>
    } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        // Color Grid for Tablet on FTLP & HOLP
        return <ColorGrid/>
    } else {
        // Bonsai Grid for Desktp on FTLP & HOLP
        return <BonsaiGrid/>
    }
});


const Offerings = connect(mapVariableToProps)(({ offerings }) => {
    switch (offerings) {
        case 'sparkly-dragon':
            return <SparklyDragon/>
        case 'pretty-grid':
            return <PrettyGrid/>
        default: 
            return <Control/>;
    }
});

export default Offerings;