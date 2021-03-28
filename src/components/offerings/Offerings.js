import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import ColorStack from './ColorStack';
import ColorGrid from './ColorGrid';
import BonsaiGrid from './BonsaiGrid';

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
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        return <ColorStack/>
    // // } else if (props.pageSettings.location === 'join') {
    // //     // Green Top for Tablet & Desktop for CARE pages
    } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        return <ColorGrid/>
    } else {
        return <BonsaiGrid/>
    }


});

export default Offerings;