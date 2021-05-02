import React from 'react';
import { connect } from 'react-redux';
import SparklyDragon from './SparklyDragon';
import PrettyGrid from './PrettyGrid';

const mapVariableToProps = (state) => {
    return {
        faqsSection: state.variables.faqsSection
    }
};

const FAQsSection = connect(mapVariableToProps)(({ faqsSection }) => {
    switch (faqsSection) {
        case 'sparkly-dragon':
            return <SparklyDragon/>
        case 'pretty-grid':
            return <PrettyGrid/>
        default: 
            return <div className="faqs-section--not-included"></div>;
    }
});

export default FAQsSection;