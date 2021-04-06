import React from 'react';
import { connect } from 'react-redux';
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
        text: <span>Find stories among 142 million plus articles on Newspapers.com <LegalNewspapersBasic /></span>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <span>Explore more than 537 million records on Fold3, our historical military records&nbsp;website</span>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <span>Enjoy unlimited access to more than 3 billion international birth, marriage, death, census, military, church and other&nbsp;records</span>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Discover your immigrant ancestors and learn more about your family’s homeland in detailed passenger lists, border crossings and&nbsp;more</span>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Travel back to the 16th century in popular UK birth, marriage and death records and see original hand-written&nbsp;documents</span>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Learn about your ancestors in more than 80 countries outside the U.S., including the UK, Ireland, Canada, Germany, Australia, France, Denmark, Norway, Sweden and&nbsp;more</span>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Explore all our U.S. record collections including birth, marriage, death and census records detailing occupations, ages, siblings, birthplaces, addresses, and more – even maiden&nbsp;names</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Connect with millions of other Ancestry members to ask for help, share ideas, make discoveries and possibly discover living relatives you never knew you&nbsp;had</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Organize, preserve and share your family tree online with advanced tools that help you grow your tree and upload photos and&nbsp;stories</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Learn from our exclusive Ancestry Hints – where we do the searching for you to expand your family&nbsp;tree</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Make discoveries in Ancestry special collections with records and help focusing on African-American and Jewish family&nbsp;history</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <span>Get simple-to-understand guidance every step of the way so you can start making discoveries on day&nbsp;one</span>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }
]

const PrettyGrid = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    if (pS.windowWidth < pS.breaks.prettyGrid.tablet) {
        // Color Columns for Phone on all offer pages
        return <ColorColumns/>
    }

    const subs = pS.subscriptions;
    const featureCheckColumnStyles = {
        width: `calc(60% / ${subs.display.packages.length})`
    }
    const filteredFeaturesData = [...featuresData].filter((featureData) => subs.display.packages.some((pkgData) => featureData.appliesTo.indexOf(pkgData.id) > -1));

    return (
        <section className={classesMaker(`prettygrid`)}>
            <div className="page pagePadded pageWidth1 clearfix">
            <table className="offerCompareTable">
                <tbody>
                    <tr>
                        <th className="w40">
                            <h2 className="text3xlrg coloraltblue">Compare our memberships:</h2>
                        </th>
                        {subs.display.packages.map((pkgData) => {
                            const bgColorClass = `bgColor-${pkgData.id}`;
                            return (
                                <th key={pkgData.id} 
                                    className={`w20 bgDark textCenter ${bgColorClass} ${bgColorClass}--offerings-${props.variables.offerings}`}
                                    style={featureCheckColumnStyles}
                                >
                                    <h2 className="text2xlrg">{pkgData.name}</h2>
                                </th>
                            )
                        })}
                    </tr>

                    {filteredFeaturesData.map((featureData, index) => {
                        return (
                            <tr key={index}>
                                <td className="w40">
                                    {featureData.text}
                                </td>
                                {subs.display.packages.map((pkgData) => (
                                    <td key={pkgData.id}
                                        className="w20 textCenter"
                                        style={featureCheckColumnStyles}
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
            {/* <ul className="paymentMethodList clearfix topSpacingBlock">
                <li>
                    <p className="italic">Payment methods</p>
                </li>
                <li>
                    <div className="paymentMethod pymtVisa"><span className="hideVisually">VISA</span></div>
                </li>
                <li>
                    <div className="paymentMethod pymtMasterCard"><span className="hideVisually">MasterCard</span></div>
                </li>
                <li>
                    <div className="paymentMethod pymtAmex"><span className="hideVisually">American Express</span></div>
                </li>
                <li>
                    <div className="paymentMethod pymtPayPal"><span className="hideVisually">PayPal</span></div>
                </li>
            </ul> */}
        </div>
    </section>
    )
})

export default PrettyGrid;