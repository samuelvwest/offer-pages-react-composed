import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import BonsaiGrid from './BonsaiGrid';
import ColorGrid from './ColorGrid';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const mapDispatchToProps = (dispatch) => ({
    modifyPageSettings: (modifications) => dispatch(modifyPageSettings(modifications))
});


const Offerings = connect(mapStateToProps, mapDispatchToProps)((props) => {
    // if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
    //     // Color Stack for Phone on all offer pages
    // // } else if (props.pageSettings.location === 'join') {
    // //     // Green Top for Tablet & Desktop for CARE pages
    // } else 
    if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        return <ColorGrid {...props}/>
    } else {
        return <BonsaiGrid {...props}/>
    }


});

export default Offerings;