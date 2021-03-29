import React from 'react';
import { connect } from 'react-redux';
import Control from './Control'
import SparklyDragon from './SparklyDragon'

const mapStateToProps = (state) => {
    return {
        variable: state.variables.headerStyle
    }
};

const HeaderStyle = connect(mapStateToProps)((props) => {
    if (props.variable === `sparkly-dragon`) {
        return <SparklyDragon/>
    } else {
        return <Control/>
    }
});

export default HeaderStyle;