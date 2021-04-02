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

const HeaderStyle = connect(mapStateToProps)((props) => {
    if (/sparkly-dragon/.test(props.headerStyle)) {
        return <SparklyDragon/>
    } else if (/pretty-grid/.test(props.headerStyle)) {
        return <PrettyGrid/>
    }
    return <Control/>
});

export default HeaderStyle;