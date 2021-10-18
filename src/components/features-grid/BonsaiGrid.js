import React from 'react';
import { connect } from 'react-redux';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import { MaryDQuote } from '../TestimonialSection';
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
        text: <div>Find stories among 142 million plus articles on Newspapers.com <LegalNewspapersBasic /></div>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <div>Explore more than 537 million records on Fold3, our historical military records&nbsp;website</div>,
        appliesTo: [ 'allaccess' ]
    }, {
        text: <div>Enjoy unlimited access to more than 5 billion international birth, marriage, death, census, military, church and other&nbsp;records</div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Discover your immigrant ancestors and learn more about your family’s homeland in detailed passenger lists, border crossings and&nbsp;more</div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Travel back to the 16th century in popular UK birth, marriage and death records and see original hand-written&nbsp;documents</div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Learn about your ancestors in more than 80 countries outside the U.S., including the UK, Ireland, Canada, Germany, Australia, France, Denmark, Norway, Sweden and&nbsp;more</div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Explore all our U.S. record collections including birth, marriage, death and census records detailing occupations, ages, siblings, birthplaces, addresses, and more – even maiden&nbsp;names</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Connect with millions of other Ancestry members to ask for help, share ideas, make discoveries and possibly discover living relatives you never knew you&nbsp;had</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Organize, preserve and share your family tree online with advanced tools that help you grow your tree and upload photos and&nbsp;stories</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Learn from our exclusive Ancestry Hints – where we do the searching for you to expand your family&nbsp;tree</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Make discoveries in Ancestry special collections with records and help focusing on African-American and Jewish family&nbsp;history</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        text: <div>Get simple-to-understand guidance every step of the way so you can start making discoveries on day&nbsp;one</div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }
]

const BonsaiOfferings = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const columnWidth = 88;
    const filteredFeaturesData = [...featuresData].filter((featureData) => subs.display.packages.some((pkgData) => featureData.appliesTo.indexOf(pkgData.id) > -1));
    return (
        <div className={`${classesMaker(`bonsaigrid`)} offerings-variable--${props.variables.offerings} scroll-tracking--featuresGrid`}>
            <section className="benefitListCon">
                {props.variables.testimonialSection &&
                    <div className="testimonials scroll-tracking--testimonialSection"
                        onClick={() => {
                            adobeTargetTrackEvent({
                                eventType: 'clickSection',
                                section: 'testimonialSection'
                            })
                        }}
                    >
                        <p className="quote textalt">“<MaryDQuote />”</p>
                        <p className="source"><strong>Mary D.</strong> – Ancestry Member</p>
                    </div>
                }
                <table className="compareTable2"
                    onClick={() => {
                        adobeTargetTrackEvent({
                            eventType: 'clickSection',
                            section: 'featuresGrid',
                            gridType: `bonsai`
                        })
                    }}
                >
                        <tbody>
                            <tr className="tableHeadingWrap rounded topright">
                                <th scope="col"></th>
                                {subs.display.packages.map((pkgData, index, array) => {
                                    const leftRoundTest = index === 0
                                    const rightRoundTest = index === (array.length - 1)
                                    return (
                                        <th key={pkgData.id}
                                            scope="col" 
                                            className={`tableHeading${(leftRoundTest || rightRoundTest) ? ` rounded` : ``}${leftRoundTest ? ` topleft` : ``}${rightRoundTest ? ` topright` : ``}`} 
                                            style={{
                                                right: `${columnWidth * (array.length - 1 - index)}px`
                                            }}
                                        >
                                            {pkgData.name.split(' ').map((str, index) => <span key={index}>{index > 0 && <br />}{str}</span>)}
                                        </th>
                                    )
                                })}
                            </tr>
                            {filteredFeaturesData.map((featureData, index, array) => {
                                const lastRowTest = index === (array.length - 1);
                                return (
                                    <tr key={index} 
                                        className={`compareTxt${index === 0 ? ` topCompare` : ``}${lastRowTest ? ` rounded bottom` : ``}`}
                                        style={{
                                            paddingRight: `${(columnWidth * subs.display.packages.length) + 10}px`
                                        }}
                                    >
                                        <th scope="row" className="noTopSpacing">
                                            {featureData.text}
                                        </th>
                                        {subs.display.packages.map((pkgData, index, array) => (
                                            <td key={pkgData.id}
                                                className={`leafCol${lastRowTest ? ` rounded bottomright` : ``}`}
                                                style={{
                                                    right: `${columnWidth * (array.length - 1 - index)}px`
                                                }}
                                            >
                                                {featureData.appliesTo.indexOf(pkgData.id) === -1 ?
                                                    <span className="screenReaderText">no</span> :
                                                    <span className="icon iconLeaf"><span className="screenReaderText">yes</span></span>
                                                }
                                            </td>
                                        ))}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </section>
        </div>
    )
})

export default BonsaiOfferings;