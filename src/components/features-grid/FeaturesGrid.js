import React from 'react';
import { connect } from 'react-redux';
import ColorColumns from './ColorColumns'
import ColorGrid from './ColorGrid'
import BonsaiGrid from './BonsaiGrid'
import SparklyDragon from './SparklyDragon'
import PrettyGrid from './PrettyGrid'

const mapPageSettingsStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings
    }
};

const mapVariableToProps = (state) => {
    return {
        featuresGrid: state.variables.featuresGrid
    }
};

const Control = connect(mapPageSettingsStateToProps)((props) => {
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        // Color Columns for Phone on all offer pages
        return <ColorColumns/>
    } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        // Color Grid for Tablet on FTLP & HOLP
        return <ColorGrid/>
    }
    // Bonsai Grid for Desktp on FTLP & HOLP
    return <BonsaiGrid/>
});

const HeaderStyle = connect(mapVariableToProps)(({ featuresGrid }) => {
    switch (featuresGrid) {
        case 'sparkly-dragon':
            return <SparklyDragon/>
        case 'pretty-grid':
            return <PrettyGrid/>
        case 'not-included':
            return <div className="features-grid--not-included"></div>
        default: 
            return <Control/>;
    }
});

export default HeaderStyle;