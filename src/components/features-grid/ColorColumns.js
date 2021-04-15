import React from 'react';
import { connect } from 'react-redux';
import { LegalSup } from '../LegalText';

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
        text: <span>Build your family&nbsp;tree</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Discover new details with Ancestry&nbsp;Hints®</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Search over 3 billion international historical&nbsp;records</span>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Read over 1 billion historical articles with Newspapers.com™&nbsp;Basic<LegalSup supRef="newspapersBasic" /></span>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <span>Discover more than 500 million military records on&nbsp;Fold3.com®</span>,
        appliesTo: [ 'allaccess' ]
    }
]

const ColorColumns = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const filteredFeaturesData = [...featuresData].filter((featureData) => subs.display.packages.some((pkgData) => featureData.appliesTo.indexOf(pkgData.id) > -1));
    const styles = {
        width: `calc(100% / ${subs.display.packages.length})`
    }
    const featureRowsAndHeadsArray = [];
    filteredFeaturesData.forEach((featureData) => {
        featureRowsAndHeadsArray.push({
            fullRow: true,
            text: featureData.text
        });
        featureRowsAndHeadsArray.push({
            fullRow: false,
            appliesTo: featureData.appliesTo
        });
    })
    return (
        <div className={`${classesMaker('colorcolumns')} offerings-variable--${props.variables.offerings}`}>
            <div className="compareCon">
                <table className="compareTable">
                    <caption className="textCenter bold">Compare memberships</caption>
                    <thead>
                        <tr>
                            {subs.display.packages.map((pkgData) => (
                                <th key={pkgData.id} 
                                    scope="col" 
                                    abbr={pkgData.name}
                                    className={`txtColor txtColor--${pkgData.id} bold text2xlrg`}
                                    style={styles}
                                >
                                        {pkgData.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {subs.display.packages.map((pkgData) => (
                                <td key={pkgData.id} 
                                    data-label={pkgData.name}
                                    className={`textsml txtColor txtColor--${pkgData.id}`}
                                    style={styles}
                                >
                                    {/usdiscovery/.test(pkgData.id) && <span>15 billion US records</span>}
                                    {/worldexplorer/.test(pkgData.id) && <span>20 billion global records</span>}
                                    {/allaccess/.test(pkgData.id) && <span>20 billion global records <br/>500 million military records on Fold3® <br/>1 billion articles on Newspapers.com™ Basic<LegalSup supRef="newspapersBasic" /></span>}
                                </td>
                            ))}
                        </tr>
                        {featureRowsAndHeadsArray.map((featureData, index) => {
                            if (featureData.fullRow) {
                                return (
                                    <tr key={index}>
                                        <th colSpan={subs.display.packages.length}>{featureData.text}</th>
                                    </tr>
                                )
                            }
                            return (
                                <tr key={index}>
                                    {subs.display.packages.map((pkgData) => {
                                        const includedTest = featureData.appliesTo.indexOf(pkgData.id) !== -1;
                                        return (
                                            <td key={pkgData.id} data-label={pkgData.name} style={styles}>
                                                <span className={`${includedTest ? `icon iconCheck` : ``} txtColor txtColor--${pkgData.id} text2xlrg`}>
                                                    <span className="hideVisually">{includedTest ? `Not ` : ``}Included</span>
                                                </span>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

export default ColorColumns;