import React from 'react';
import { connect } from 'react-redux';
import SparklyDragon from './SparklyDragon'
import PrettyGrid from './PrettyGrid'

const mapVariableToProps = (state) => {
    return {
        featuresGrid: state.variables.featuresGrid
    }
};

const FeaturesGrid = connect(mapVariableToProps)(({ featuresGrid }) => {
    switch (featuresGrid) {
        case 'pretty-grid':
            return <PrettyGrid/>
        default: 
            return <SparklyDragon/>
    }
});

export default FeaturesGrid;