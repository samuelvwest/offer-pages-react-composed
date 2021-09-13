import React from 'react';
import { connect } from 'react-redux';
import { LegalSup } from './LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const simpleMapStateToProps = (state) => {
    return {
        elligibility: state.pageSettings.elligibility,
        audiences: state.pageSettings.audiences,
        headerText: state.variables.headerText,
        timeline: state.variables.timeline
    }
}

const mapVariableStateToProps = (state) => {
    return {
        headerText: state.variables.headerText
    }
};

const classesMaker = (styleName) => {
    return `header-text header-text--${styleName}`
}

const winbackHeaderText = <span className="header-text__intro header-text__intro--winback">Save up to 30% on semi&ndash;annual&nbsp;packages.</span>

const ColorStack = connect(mapStateToProps)(( { pageSettings: pS } ) => (
    <span className={classesMaker('colorstack')}>
        {[
            'winback_days55_58_90_bau', // Email Winback Discount Test Cell
            'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
        ].some((audience) => pS.audiences.indexOf(audience) > -1) && winbackHeaderText}
        Choose a membership to&nbsp;try
        {/initial/.test(pS.elligibility) ? 
            <span> 
                <strong className="header-text__free-for">FREE for 14&nbsp;days.</strong><LegalSup supRef="freeTrial" goToOnClick={true} />
            </span> : 
            <span>.<LegalSup supRef="hardOffer" goToOnClick={true} /></span>
        }
    </span>
));

const GreenTop = connect(mapStateToProps)(( { pageSettings: pS } ) => {
    const winbackTest = [
            'winback_days55_58_90_bau', // Email Winback Discount Test Cell
            'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
        ].some((audience) => pS.audiences.indexOf(audience) > -1);
    return (
        <span className={`${classesMaker('greentop')}${winbackTest ? ` header-text--greentop--winback` : ``}`}>
            {winbackTest ?
                winbackHeaderText :
                <span>We're giving you access to <i>your</i>&nbsp;history.</span>
            }
            {/initial/.test(pS.elligibility) ? (
                    <LegalSup supRef="freeTrial" goToOnClick={true} />
                ) : (
                    <LegalSup supRef="hardOffer" goToOnClick={true} />
                )
            }
        </span>
    )
});

const ColorGrid = connect(mapStateToProps)(( { pageSettings: pS } ) => (
    <span className={classesMaker('colorgrid')}>
        {[
            'winback_days55_58_90_bau', // Email Winback Discount Test Cell
            'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
        ].some((audience) => pS.audiences.indexOf(audience) > -1) ? 
            winbackHeaderText : 
            <span>
                Discover your family story with an Ancestry&nbsp;membership
                {/initial/.test(pS.elligibility) ? 
                    <span><strong className="header-text__free-for">FREE for 14&nbsp;days.</strong><LegalSup supRef="freeTrial" goToOnClick={true} /></span> : 
                    <span>.<LegalSup supRef="hardOffer" goToOnClick={true} /></span>
                }
            </span>
        }
    </span>
));

const BonsaiGrid = connect(mapStateToProps)(({ pageSettings: pS }) => /initial/.test(pS.elligibility) ? (
    <span className={classesMaker('bonsaigrid')}>
        Explore the world's largest online family history resource<span className="header-text__free-for">FREE for 14&nbsp;days.<LegalSup supRef="freeTrial" goToOnClick={true} /></span>
    </span>
) : [
        'winback_days55_58_90_bau', // Email Winback Discount Test Cell
        'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
    ].some((audience) => pS.audiences.indexOf(audience) > -1) ? 
winbackHeaderText : 
(
    <span className={classesMaker('bonsaigrid')}>
        Start exploring the world’s largest online family history resource&nbsp;today.<LegalSup supRef="hardOffer" goToOnClick={true}/>
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

const SparklyDragon = connect(simpleMapStateToProps)(({ elligibility }) => (
    <span className={classesMaker('sparklydragon')}>
        Connect with your ancestors through historical documents. 
        {/initial/.test(elligibility) ? 
            <span className="header-text__free-for">Free for 14 days<LegalSup supRef="freeTrial" goToOnClick={true} /></span> :
            <span><LegalSup supRef="hardOffer" goToOnClick={true} /></span>
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
            Try us <span className="coloraltgreen">FREE for 14&nbsp;days.<LegalSup supRef="freeTrial" goToOnClick={true} /></span>
        </span>
    ) : (
        <span className={classesMaker('prettygrid')}>
            Start tracing your family&nbsp;tree.<LegalSup supRef="hardOffer" goToOnClick={true} />
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