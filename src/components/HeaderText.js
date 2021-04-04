import React from 'react';
import { connect } from 'react-redux';
import { LegalSup } from './LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const mapElligibilityStateToProps = (state) => {
    return {
        elligibility: state.pageSettings.elligibility
    }
};

const mapVariableStateToProps = (state) => {
    return {
        headerText: state.variables.headerText
    }
};

const classesMaker = (styleName) => {
    return `header-text header-text--${styleName}`
}

const ColorStack = connect(mapElligibilityStateToProps)(({ elligibility }) => (
    <span className={classesMaker('colorstack')}>
        Choose a membership to try
        {/initial/.test(elligibility) ? 
            <span> 
                <strong className="header-text__free-for">FREE for 14 days.</strong><LegalSup supRef="freeTrial"/>
            </span> : 
            <span>.</span>
        }
    </span>
));

const GreenTop = () => (
    <span className={classesMaker('greentop')}>We're giving you access to <i>your</i> history.</span>
);

const ColorGrid = connect(mapElligibilityStateToProps)(({ elligibility }) => (
    <span className={classesMaker('colorgrid')}>
        Discover your family story with an Ancestry&nbsp;membership
        {/initial/.test(elligibility) ? 
            <span><strong className="header-text__free-for">FREE for 14 days.</strong><LegalSup supRef="freeTrial"/></span> : 
            <span>.</span>
        }
    </span>
));

const BonsaiGrid = connect(mapElligibilityStateToProps)(({ elligibility }) => /initial/.test(elligibility) ? (
    <span className={classesMaker('bonsaigrid')}>
        Explore the world's largest online family history resource<span className="header-text__free-for">FREE for 14 days.<LegalSup supRef="freeTrial"/></span>
    </span>
) : (
    <span className={classesMaker('bonsaigrid')}>
        Start exploring the world’s largest online family history resource today.
    </span>
));

const Control = connect(mapStateToProps)(( { pageSettings: pS } ) => {
    if (window.innerWidth < pS.breaks.control.tablet) {
        // Control text from Color Stack design – phone on all offer pages
        return <ColorStack/>
    } else if (pS.location === 'join') {
        // Control text for Green Top design – tablet & desktop on CARE pages
        return <GreenTop/>
    } else if (window.innerWidth < pS.breaks.control.desktop) {
        // Control text for Color Grid design – tablet on FTLP & HOLP
        return <ColorGrid/>
    }
    // Control text for Bonsai Grid design – desktop on FTLP & HOLP
    return <BonsaiGrid/>
});

const SparklyDragon = connect(mapElligibilityStateToProps)(({ elligibility }) => (
    <span className={classesMaker('sparklydragon')}>
        Connect with your ancestors through historical documents. 
        {/initial/.test(elligibility) && 
            <span className="header-text__free-for">Free for 14 days<LegalSup supRef="freeTrial"/></span>
        }
    </span>
));

const PrettyGrid = connect(mapStateToProps)(( { pageSettings: pS } ) => {
    if (window.innerWidth < pS.breaks.prettyGrid.tablet) {
        // Control text from Color Stack design – phone on all offer pages
        return <ColorStack/>
    }
    // Control text for Bonsai Grid design – desktop on FTLP & HOLP
    return /initial/.test(pS.elligibility) ? (
        <span className={classesMaker('prettygrid')}>
            Try us <span className="coloraltgreen">FREE for 14&nbsp;days.<LegalSup supRef="freeTrial"/></span>
        </span>
    ) : (
        <span className={classesMaker('prettygrid')}>
            Start tracing your family tree
        </span>
    )
});

const HeaderText = connect(mapVariableStateToProps)(({ headerText }) => {
    switch (headerText) {
        case 'sparkly-dragon':
            return <SparklyDragon/>
        case 'pretty-grid':
            return <PrettyGrid/>
        default: 
            return <Control/>;
    }
});

export default HeaderText;