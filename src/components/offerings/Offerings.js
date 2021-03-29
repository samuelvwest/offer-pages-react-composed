import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import ColorStack from './ColorStack';
import ColorGrid from './ColorGrid';
import BonsaiGrid from './BonsaiGrid';
import GreenTop from './GreenTop';

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

export default Offerings;