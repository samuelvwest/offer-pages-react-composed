import React from 'react';
import { connect } from 'react-redux';
import { LegalNewspapersBasic } from '../LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};
const classesMaker = (styleName) => {
    return `container container--${styleName} features-grid features-grid--${styleName}`
}

const featuresData = [
    {
        text: <div>Explore all U.S. content &amp; collections to discover ancestors, life events, birthplaces, maiden names, homes, jobs, siblings&nbsp;&amp;&nbsp;more</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Discover, preserve &amp; share your family story with a guided family tree builder that gives you hints on finding your&nbsp;ancestors</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Access special collections on African American &amp; Jewish American family&nbsp;history</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Unlock global collections including billions of birth, marriage, death, census &amp; church records from around the&nbsp;world</div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Explore your ancestors' global immigrations &amp; learn about your family's homeland in passenger lists, border crossings&nbsp;&amp;&nbsp;more</div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Access exclusive stories &amp; articles with a Basic membership to&nbsp;Newspapers.com <LegalNewspapersBasic /></div>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <div>Find details of ancestors' military experience with a full membership to&nbsp;Fold3.com</div>,
        appliesTo: [ 'allaccess' ]
    }
]

const ColorGrid = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const filteredFeaturesData = [...featuresData].filter((featureData) => subs.display.packages.some((pkgData) => featureData.appliesTo.indexOf(pkgData.id) > -1));
    return (
        <table className={`${classesMaker(`colorgrid`)}`}>
            <tbody>
                <tr className={(/control/.test(props.variables.offerings) && subs.display.packages.length === 3) ? `hiddenRow` : ``}>
                    <td className="w40 offerLeftCol" scope="row"></td>
                    {subs.display.packages.map((pkgData) => (
                        <th key={pkgData.id} className={`w20 compareCheckCol columnHead columnHead--${/allaccess/.test(pkgData.id) ? `purple` : /worldexplorer/.test(pkgData.id) ? `blue` : `green`}`}>{pkgData.name}</th>
                    ))}
                </tr>
                {filteredFeaturesData.map((featureData, index) => {
                    return (
                        <tr key={index}>
                            <th className="w40 offerLeftCol" scope="row">
                                <div className="text2xlrg coloralt noTopSpacing">{featureData.text}</div>
                            </th>
                            {subs.display.packages.map((pkgData) => (
                                <td key={pkgData.id} className="w20 compareCheckCol">
                                    <span className={`textxlrg ${/allaccess/.test(pkgData.id) ? `coloraltFuji2` : /worldexplorer/.test(pkgData.id) ? `coloraltWave3` : `coloraltBamboo2`}${featureData.appliesTo.indexOf(pkgData.id) !== -1 ? ` icon iconCheck` : ``}`}></span>
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
})

export default ColorGrid;