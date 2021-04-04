import React from 'react';
import { connect } from 'react-redux';
import Control from './Control'
import SparklyDragon from './SparklyDragon'
import PrettyGrid from './PrettyGrid'

const mapStateToProps = (state) => {
    return {
        headerStyle: state.variables.headerStyle
    }
};

const HeaderStyle = connect(mapStateToProps)(({ headerStyle }) => {
    switch (headerStyle) {
        case 'sparkly-dragon':
            return <SparklyDragon/>
        case 'pretty-grid':
            return <PrettyGrid/>
        default: 
            return <Control/>;
    }
});

export default HeaderStyle;