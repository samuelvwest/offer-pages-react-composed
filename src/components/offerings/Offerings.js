import React from 'react';
import { connect } from 'react-redux';
import PrettyGrid from './PrettyGrid';

const mapVariableToProps = (state) => {
    return {
        offerings: state.variables.offerings
    }
};

const Offerings = connect(mapVariableToProps)(({ offerings, placement }) => {
    switch (offerings) {
        // case 'sparkly-dragon':
        //     return <SparklyDragon placement={placement} />
        default: 
            return <PrettyGrid placement={placement} />
    }
});

export default Offerings;