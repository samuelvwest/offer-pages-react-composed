import React from 'react';
import { connect } from 'react-redux';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import { LegalNewspapersBasic } from '../LegalText';
import ColorColumns from './ColorColumns';

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
        text: <span>Find stories among 8 billion articles, dating back to the 1700s, on Newspapers.com™ with Publisher&nbsp;Extra.</span>,
        appliesTo: [ 'aaextra' ]
    }, {
        text: <span>Find stories among 2 billion articles, dating back to the 1700s with Newspapers.com™&nbsp;Basic. <LegalNewspapersBasic /></span>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <span>Explore millions of global military records on Fold3®, including many from WWII and the US&nbsp;Civil&nbsp;War.</span>,
        appliesTo: [ 'allaccess', 'aaextra' ]
    }, {
        text: <span>Enjoy unlimited access to more than 3 billion international birth, marriage, death, census, military, church and other&nbsp;records</span>,
        appliesTo: [ 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Discover your immigrant ancestors and learn more about your family’s homeland in detailed passenger lists, border crossings and&nbsp;more</span>,
        appliesTo: [ 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Travel back to the 16th century in popular UK birth, marriage and death records and see original hand-written&nbsp;documents</span>,
        appliesTo: [ 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Learn about your ancestors in more than 80 countries outside the U.S., including the UK, Ireland, Canada, Germany, Australia, France, Denmark, Norway, Sweden and&nbsp;more</span>,
        appliesTo: [ 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Explore all our U.S. record collections including birth, marriage, death and census records detailing occupations, ages, siblings, birthplaces, addresses, and more – even maiden&nbsp;names</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Connect with millions of other Ancestry members to ask for help, share ideas, make discoveries and possibly discover living relatives you never knew you&nbsp;had</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Organize, preserve and share your family tree online with advanced tools that help you grow your tree and upload photos and&nbsp;stories</span>,
        appliesTo: [ 'treebuilder', 'usdiscovery', 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Learn from our exclusive Ancestry Hints – where we do the searching for you to expand your family&nbsp;tree</span>,
        appliesTo: [ 'treebuilder', 'usdiscovery', 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Make discoveries in Ancestry special collections with records and help focusing on African-American and Jewish family&nbsp;history</span>,
        appliesTo: [ 'treebuilder', 'usdiscovery', 'worldexplorer', 'allaccess', 'aaextra' ]
    }, {
        text: <span>Get simple-to-understand guidance every step of the way so you can start making discoveries on day&nbsp;one</span>,
        appliesTo: [ 'treebuilder', 'usdiscovery', 'worldexplorer', 'allaccess', 'aaextra' ]
    }
]

const PrettyGrid = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const adjustColorColumnsBreak = Math.max(subs.display.packages.length - 3, 0) * 50;
    if (pS.windowWidth < (pS.breaks.prettyGrid.tablet + adjustColorColumnsBreak)) {
        // Color Columns for Phone on all offer pages
        return <ColorColumns/>
    }

    const featureCheckColumnStyles = {
        width: `calc(60% / ${subs.display.packages.length})`
    }
    const filteredFeaturesData = [...featuresData].filter((featureData) => subs.display.packages.some((pkgData) => featureData.appliesTo.indexOf(pkgData.id) > -1));

    return (
        <section className={`${classesMaker(`prettygrid`)} scroll-tracking--featuresGrid`}
            onClick={() => {
                adobeTargetTrackEvent({
                    eventType: 'clickSection',
                    section: 'featuresGrid',
                    gridType: `prettyGrid`
                })
            }}
        >
            <div className="page pagePadded pageWidth1 clearfix">
                <table className="offerCompareTable">
                    <tbody>
                        <tr>
                            <th className="feature-text">
                                <h2 className="text3xlrg coloraltblue">Compare our memberships:</h2>
                            </th>
                            {subs.display.packages.map((pkgData) => (
                                <th 
                                    key={pkgData.id} 
                                    className={`package-heading-cell package-heading-cell--${pkgData.color} ${(((window.outerWidth * .6) - 40) / subs.display.packages.length) < 110 ? `package-heading-cell--smaller` : ``}`}
                                >
                                    {pkgData.name}
                                </th>
                            ))}
                        </tr>

                        {filteredFeaturesData.map((featureData, index) => {
                            return (
                                <tr key={index}>
                                    <td className="feature-text">
                                        {featureData.text}
                                    </td>
                                    {subs.display.packages.map((pkgData) => (
                                        <td key={pkgData.id}
                                            className="inclusion-wrapper"
                                        >
                                            {featureData.appliesTo.indexOf(pkgData.id) !== -1 &&
                                                <div className="icon iconLeaf text2xlrg"></div>
                                            }
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
})

export default PrettyGrid;