import React from 'react';
import { connect } from 'react-redux';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import { USMap, Globe, GlobePlus, CheckIcon, XIcon } from '../SVGs';
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
        type: `global-feature`,
        text: <div>
                <img className="feature-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/Leaf Solid.png" />
                Ancestry Hints®
                <div className="topSpacing plan-para-color">Where we do the searching for you to expand your family&nbsp;tree.</div>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `global-feature`,
        text: <div>
                <img className="feature-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/iconTree.png" />
                Family Tree Building&nbsp;Tools
                <div className="topSpacing plan-para-color">See how you're related to family members across&nbsp;generations.</div>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `global-feature`,
        text: <div>
                <img className="feature-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/tree_plus.png" />
                Family Tree Sharing
                <div className="topSpacing plan-para-color">Invite other family and friends to view or edit your&nbsp;tree.</div>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `global-feature`,
        text: <div>
                <img className="feature-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/pictures.png" />
                Family Media Upload
                <div className="topSpacing plan-para-color">Save and preserve family records, stories, and photos to your&nbsp;account.</div>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `global-feature`,
        text: <div>
                <img className="feature-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/people_man_comment.png" />
                Ancestry Member Community
                <div className="topSpacing plan-para-color">Connect with millions of other Ancestry© members to ask for help, share ideas, and make&nbps;discoveries.</div>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `global-feature`,
        text: <div>
                <img className="feature-img-new mobile-support-img lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/phone1.png" />
                Support
                <br /><strong className="textlrg bamboo4">Need help?</strong>
                <span className="bamboo4 help-contact">1-800-ANCESTRY</span>
                <br /><span className="support-timings-txt">7 days a week, 9am–11pm&nbsp;ET</span>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `record-access`,
        text: <div>
                Access to all <span className="bold">U.S. records</span> on&nbsp;Ancestry 
                <br />
                <div className="topSpacing plan-para-color">Explore the billions of records in our U.S. record collection including birth, marriage, death and census&nbsp;records.</div>
            </div>,
        appliesTo: [ 'usdiscovery', 'worldexplorer', 'allaccess' ]
    }, {
        type: `record-access`,
        text: <div>
                <span>
                    <span>Access to all <span className="bold">international records</span> on&nbsp;Ancestry</span> 
                </span>
                <div className="topSpacing plan-para-color">Access more than 3 billion international birth, marriage, death, census, military, religious, and other&nbsp;records.</div>
            </div>,
        appliesTo: [ 'worldexplorer', 'allaccess' ]
    }, {
        type: `record-access`,
        text: <div>
                <span className="table-row-head">
                    <img className="table-newspapers-img lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.17/images/newspapers.svg" /> 
                </span>
                <span className="textsml basicsubs-wrap">
                    <span className="mr-1">Basic subscription</span>
                </span>
                <div className="tooltip">
                    <img className="align-middle lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" />
                    <span className="tooltiptext tooltip-top normal">
                        <LegalNewspapersBasic />
                    </span>
                </div>
                <div className="topSpacing plan-para-color">Search for family stories in more than 142 million U.S. and world articles on&nbspyarn;Newspapers.com™.</div>
            </div>,
        appliesTo: [ 'allaccess' ]
    }, {
        type: `record-access`,
        text: <div>
                <span className="table-row-head">
                    <img className="table-fold-img lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.17/images/fold-3.svg" /> 
                </span>
                <span className="textsml">Additional military records</span>
                <div className="topSpacing plan-para-color">Search for family stories in more than 537 million U.S. military records on&nbsp;Fold3®.</div>
            </div>,
        appliesTo: [ 'allaccess' ]
    }
];

const FeatureRow = ({ featureData, idx, subs, mobileTest, offeringsVar }) => {
    if (featureData.mobile && featureData.fullRow) {
        return ( 
            <tr key={idx} className={mobileTest ? `mobile-row mobile-row--feature-text` : ``}>
                <td className={featureData.type === `global-feature` ? `feature-cell--icon-left` : ``} 
                    colSpan={subs.display.packages.length}
                >
                    {featureData.text}
                </td>
            </tr>
        )
    }
    return (
        <tr key={idx} className={mobileTest ? `mobile-row mobile-row--feature-checks` : ``}>
            {!featureData.mobile &&
                <td className="feature-cell--icon-left">
                    {featureData.text}
                </td>
            }
            {subs.display.packages.map((pkgData) => {
                const pkgVars = pkgData.order === 3  ? {
                    bgClass: `allaccess-bg`,
                    checkClass: `icon-check-fill-allacc`
                } : pkgData.order === 2 ? {
                    bgClass: `worldexplorer-bg`,
                    checkClass: `icon-check-fill-worldex`
                } : {
                    bgClass: `usdiscovery-bg`,
                    checkClass: `icon-check-fill-usdis`
                }
                const includedTest = featureData.appliesTo.indexOf(pkgData.id) !== -1;
                return (
                    <td key={pkgData.id}>
                        <div className={`check-wrapper ${pkgVars.bgClass} ${pkgVars.bgClass}--offerings-${offeringsVar}${!includedTest ? ` cross-bg` : ``}`}>
                            {includedTest ? 
                                <CheckIcon classNames="plan-comp-check-icon" pathClassNames={`${pkgVars.checkClass} ${pkgVars.checkClass}--offerings-${offeringsVar}`} />  : 
                                <XIcon classNames="plan-comp-cross-icon" />
                            }
                        </div>
                    </td>
                )
            })}
        </tr>
    )
}

export class SparklyDragon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIncludedInAll: !(this.props.pageSettings.windowWidth < 768)
        }
    }
    toggleAllIncludedState = () => {
        this.setState((prevState) => {
            return { 
                showIncludedInAll: !prevState.showIncludedInAll 
            }
        })
    }
    render() {
        const pS = this.props.pageSettings;
        const subs = pS.subscriptions;
        const mobileTest = this.props.pageSettings.windowWidth < 768;
        const filteredFeaturesData = [...featuresData].filter((featureData) => subs.display.packages.some((pkgData) => featureData.appliesTo.indexOf(pkgData.id) > -1));
        const featureRowsAndHeadsArray = [];
        filteredFeaturesData.forEach((featureData) => {
            featureRowsAndHeadsArray.push({
                mobile: true,
                fullRow: true,
                type: featureData.type,
                text: featureData.text
            });
            featureRowsAndHeadsArray.push({
                mobile:true,
                fullRow: false,
                type: featureData.type,
                appliesTo: featureData.appliesTo
            });
        })
        const useThisFeaturesArray = mobileTest ? featureRowsAndHeadsArray : filteredFeaturesData;
        const globalHeadingCells = subs.display.packages.map((pkgData, index, array) =>{
            const recordsTriangleClasses = []
            array.forEach((pD) => recordsTriangleClasses.push(`triangle-start--${pD.id}`))
            const pkgVars = pkgData.order === 3  ? {
                imgFile: <GlobePlus classNames="allaccess-img" />,
                colorClass: `color-allaccess`
            } : pkgData.order === 2 ? {
                imgFile: <Globe classNames="usnintrecords-img" />,
                colorClass: `color-worldexplorer`
            } : {
                imgFile: <USMap classNames="usrecords-img" />,
                colorClass: `color-usdiscovery`
            }
            return (
                <th key={pkgData.id} className={`bold textxlrg ${pkgVars.colorClass} ${pkgVars.colorClass}--offerings-${this.props.variables.offerings} textCenter align-base ${(index === 0 || index === (array.length - 1)) ? `rel-pos` : ``} `}>
                    <span className="show768 hidden-lg-up">
                        {pkgVars.imgFile}
                        {pkgData.name.split(' ').map((str, index) => <span key={index}><br />{str}</span>)}
                    </span> 
                    <span className="tb-plan-head hide768">
                        {pkgData.name}
                        {pkgVars.imgFile}
                    </span>
                </th>
            )
        })
        const recordHeadingCells = subs.display.packages.map((pkgData, index, array) =>{
            const multipleTest = array.length > 1
            const firstTest = multipleTest && index === 0
            const lastTest = multipleTest && index === (array.length - 1)
            const recordsTriangleClasses = []
            array.forEach((pD) => recordsTriangleClasses.push(`triangle-start--${pD.id}`))
            const pkgVars = pkgData.order === 3  ? {
                colorClass: `color-allaccess`
            } : pkgData.order === 2 ? {
                colorClass: `color-worldexplorer`
            } : {
                colorClass: `color-usdiscovery`
            }
            return (
                <th key={pkgData.id} className={`bold textxlrg ${pkgVars.colorClass} ${pkgVars.colorClass}--offerings-${this.props.variables.offerings} textCenter align-base ${(index === 0 || index === (array.length - 1)) ? `rel-pos` : ``} ${firstTest ? `triangle-start ${recordsTriangleClasses.join(' ')}` : ``} triangle-start--offerings-${this.props.variables.offerings}`}>
                    {firstTest && <div className="least-rec-txt">Least Records</div>}
                    {lastTest && <div className="most-rec-txt">Most<br /><span>Records</span></div>}
                </th>
            )
        })
        return (
            <div className={`${classesMaker('sparklydragon')} offerings-variable--${this.props.variables.offerings} scroll-tracking--featuresGrid`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'featuresGrid',
                        gridType: `sparklyDragon`
                    })
                }}
            >
                <section className={`plan-comparison-chart plan-comparison-chart--offerings-${this.props.variables.offerings}`}>
                    <table>
                        <tbody>
                            <tr className="table-title">
                                <th className="bold text2xlrg" colSpan={mobileTest ? subs.display.packages.length : 1}>
                                    <span className="text3xlrg">Plan Comparison</span>
                                    <br />
                                    <div className="topSpacingBlock includedInPlanText">
                                        Included in All Plans
                                        <button type="button" className={`showHideBtn link iconAfter textlrg btn-pointer ${this.state.showIncludedInAll ? `iconArrowUpAfter` : `iconArrowDownAfter`}`} onClick={this.toggleAllIncludedState}>
                                            <span className="mr-1 textlrg">{this.state.showIncludedInAll ? `Hide` : `Show`} All</span>
                                        </button>
                                    </div>
                                </th>
                                {!mobileTest && globalHeadingCells}
                            </tr>
                            {mobileTest && 
                                <tr className="mobile-row mobile-row--global-heading">
                                    {globalHeadingCells}
                                </tr>
                            }
                            {this.state.showIncludedInAll && useThisFeaturesArray.filter(({ type }) => type === `global-feature`).map((featureData, index) => (
                                <FeatureRow key={index} featureData={featureData} idx={index} subs={subs} mobileTest={mobileTest} offeringsVar={this.props.variables.offerings} />
                            ))}
                            <tr className="table-title">
                                <th className="rec-acc bold text2xlrg" colSpan={mobileTest ? subs.display.packages.length : 1}>
                                    <div className="topSpacingBlock">Record Access</div>
                                </th>
                                {!mobileTest && recordHeadingCells}
                            </tr>
                            {mobileTest && 
                                <tr className="mobile-row mobile-row--record-access">
                                    {recordHeadingCells}
                                </tr>
                            }
                            {useThisFeaturesArray.filter(({ type }) => type === `record-access`).map((featureData, index) => (
                                <FeatureRow key={index} featureData={featureData} idx={index} subs={subs} mobileTest={mobileTest} offeringsVar={this.props.variables.offerings} />
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>              
        )
    }
}

export default connect(mapStateToProps)(SparklyDragon);