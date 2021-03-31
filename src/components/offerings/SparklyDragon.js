import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import BonsaiGrid from './BonsaiGrid';
import { LegalSup, LegalText } from '../LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const mapDispatchToProps = (dispatch) => ({
    modifyPageSettings: (modifications) => dispatch(modifyPageSettings(modifications))
});

const classesMaker = (styleName) => {
    return `container container--${styleName} offerings-style offerings-style--${styleName}`
}

export class SparklyDragon extends React.Component {
    render() {
        const pS = this.props.pageSettings;
        const subs = pS.subscriptions;
        const toggleTest = !!pS.LDBM && /toggle/.test(pS.LDBM);
        const sbsTest = !!pS.LDBM && /side-by-side/.test(pS.LDBM);
        return (
            <div className={classesMaker('sparklydragon')}>
                <div className="page-container">
                    <div className="buttonpills-wrap">
                        <div className={`buttonpills-inner${subs.display.durations.length < 5 ? ` buttonpills-inner--narrow` : ``}`}>
                            <div className="buttonPills">
                                {subs.display.durations.map((duration, index, array) => {
                                    const toggleButtonTest = duration.num > 1 && toggleTest;
                                    const privateRowTest = duration.num === 1 && (sbsTest || (toggleTest && subs.display.durations.length > 3) || (subs.display.durations.length % 2) !== 0);
                                    const activeTest = duration.num === subs.selectedOffer.renewMonths && (toggleButtonTest ? true : duration.ldbm === subs.selectedOffer.ldbm);
                                    return (
                                        <button key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} type="button" 
                                            className={`${activeTest ? `activePill icon iconCheck` : `inactivePill`}${privateRowTest ? ` privateRow` : ``}`}
                                            onClick={() => this.props.modifyPageSettings({ 
                                                selectedOffer: { 
                                                    renewMonths: duration.num, 
                                                    packageID: pS.selectedOffer.packageID,
                                                    ldbm: duration.ldbm
                                                }
                                            })}
                                        >
                                            {duration.num === 1 ? duration.text : `${duration.num} MONTHS`}
                                            {duration.num !== 1 && subs.ldbms && sbsTest && <span>paid {duration.ldbm ? `monthly` : `upfront`}</span>}
                                        </button>
                                    )
                                })}
                                {/* <div className="arrow" id="save20" onClick={this.emptyFunction}>
                                    <span className="textsml">Saves $$</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <form action="/checkout/mli?" className="form freetrial-form">
                        <input type="hidden" name="direct" value="1" /> 
                        <input type="hidden" name="rtype" value={/initial/.test(pS.elligibility) ? '14' : '11'} /> 
                        <input type="hidden" name="quantities" value="1" /> 
                        <input type="hidden" name="flow" value="3" />
                        <div className="ancGrid ancGridEqual center-grid hide768 show480 subs-plan-container">
                            {subs.display.packages.map((pkgData) => {
                                const offer = subs.display.offersMap.find((ofr) => {
                                    const packageTest = pkgData.id === ofr.packageID;
                                    const renewMonthsTest = subs.selectedOffer.renewalPeriod.renewMonths === ofr.renewalPeriod.renewMonths;
                                    const ldbmTest = subs.selectedOffer.ldbm === ofr.ldbm;
                                    return packageTest && renewMonthsTest && ldbmTest;
                                });
                                const pkgStrings = offer.packageData.order === 3  ? {
                                    wrapClasses: `allacc-plan-wrap allacc-plan-br-mbl`,
                                    heroClass: `allacc-geo-mbl`,
                                    img: `allacc-mbl.png`,
                                    descClass: ` allacc-plan-desc`,
                                    detailClassStr: `allaccess`,
                                    colorClass: `allaccess-color`,
                                    arrowClass: `allacc-arrow`
                                } : offer.packageData.order === 2 ? {
                                    wrapClasses: `world-ex-plan-wrap usnintrecords`,
                                    heroClass: `world-ex-geo-mbl`,
                                    img: `world-delx-mbl.png`,
                                    descClass: ``,
                                    detailClassStr: `usnint`,
                                    colorClass: `Wave3`,
                                    arrowClass: `world-ex-arrow`
                                } : {
                                    wrapClasses: `us-dis-plan-wrap usrecords`,
                                    heroClass: `us-dis-geo-mbl`,
                                    img: `us-dis-mbl.png`,
                                    descClass: ``,
                                    detailClassStr: `us`,
                                    colorClass: `bamboo3`,
                                    arrowClass: `us-dis-arrow`
                                }
                                return (
                                    <section key={`${pkgData.id}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}BR`}  className={`subs-plan-outer-wrap`} onClick={this.emptyFunction}>
                                        <div className={`subs-plan-wrap ${pkgStrings.wrapClasses}`}>
                                            {!!offer.durationSavings && <div className="saving-plan-sixmonths">Save {offer.currency}{offer.durationSavings.display}<LegalSup supRef="durationSave" /></div>}
                                            <div className={`plan-hero-img ${pkgStrings.heroClass}`}>
                                                <img src={`https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.96/images/${pkgStrings.img}`} />
                                            </div>
                                            <div className={`subs-plan-desc${pkgStrings.descClass}`}>
                                                <h1 className="conTitle planTitle">
                                                    {pkgData.name}
                                                    <br />
                                                    {/usdiscovery/.test(pkgData.id) && <span className="textsml plan-subtitle">Access to billions of U.S. records.</span>}
                                                    {/worldexplorer/.test(pkgData.id) && <span className="textsml plan-subtitle">Access billions of U.S. <span className="bold">and</span> International records.</span>}
                                                    {/allaccess/.test(pkgData.id) && <span className="textsml plan-subtitle">Everything above, <span className="bold">plus</span> access to Newspapers.com™ Basic<LegalSup supRef="newspapersBasic" /> and Fold3.</span>}
                                                </h1>
                                                <span className={`plan-detail ${pkgStrings.detailClassStr}${offer.renewalPeriod.renewMonths === 1 ? `-monthly` : ``}-plan-detail${(/initial/.test(pS.elligibility) && offer.renewalPeriod.renewMonths > 1) ? ` plan-detail--longduration` : ``} textsml`}>
                                                    <span className={`plan-price-wrap ${pkgStrings.colorClass}`}>
                                                        <span className={`plan-price`}>{offer.currency}{!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP}</span>
                                                        {offer.renewalPeriod.renewMonths === 1 ? `/month` : offer.ldbm ? `/mo.` : ``}
                                                    </span>
                                                    {offer.renewalPeriod.renewMonths !== 1 && <span> {!offer.ldbm ? `every` : `for`} <span className="border-highlight">{offer.renewalPeriod.renewMonths} months</span></span>}{offer.ldbm && <LegalSup supRef="longDurationBilledMonthly" />}
                                                    {/initial/.test(pS.elligibility) && <span> after free trial</span>}
                                                </span> 
                                            </div>
                                            <div className={`right-arrow-wrap ${pkgStrings.colorClass}`}>
                                                <span className={`icon iconArrowRight ${pkgStrings.arrowClass}`}></span>
                                            </div>
                                            <input 
                                                value={offer.offerIDs[subs.offerElligibilityType]} 
                                                className="radioBtn hide"
                                                type="radio" 
                                                name="offers" 
                                                aria-labelledby={offer.description} 
                                            />
                                        </div>
                                    </section>
                                )
                            })}
                        </div>
                    </form>
                    {/* <form action="/checkout/mli?" className="form freetrial-form" id="signupForm">
                        <input type="hidden" name="direct" value="1" /> 
                        <input type="hidden" name="rtype" value="14" /> 
                        <input type="hidden" name="quantities" value="1" /> 
                        <input type="hidden" name="flow" value="3" />
                        <div className="ancGrid ancGridEqual center-grid hide480 plan-select-tiles">
                            <section className="ancCol w33 con usrecords grey-border p10 rounded-2 usdis-ps-wrap usrecords-border" id="usdis-sec" onClick={this.emptyFunction}>
                                <header className="conHeader plan-select-header">
                                    <label className="container us-subs-label">
                                        <span className="textxlrg radio-text text-left">U.S. Discovery</span> 
                                        <input data-name="offers" className="month-subs-input" defaultChecked="checked" type="radio" name="offers" value="O-25401" id="usDiscMonthly" aria-labelledby="usDiscovery monthly" onClick={this.emptyFunction} /> 
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className="us-plan-img-wrap">
                                        <img className="usrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/us.svg" />
                                    </div>
                                </header>
                                <div className="conBody">
                                    <span className="usrecordsFreeText text4xlrg">
                                        <strong>14 days free</strong>
                                    </span> 
                                    <span className="us-monthly-plan-detail" id="us-monthly-plan-detail">
                                        <br />then <strong>$24.99/month.</strong>
                                    </span> 
                                    <span className="hide us-plan-detail plan-price" id="us-plan-detail">
                                        <br />then <strong>$99.99</strong> every <strong className="border-highlight">6 months</strong>
                                    </span>
                                    <div className="saving-plan-sixmonths hide">
                                        Saves $50**
                                        <div className="tooltip">
                                            <img className="ques-icon" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" /> 
                                            <span className="tooltiptext tooltip-bottom normal">
                                                <span className="bamboo3 bold">**</span>Saves you $50 over six months versus monthly
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="hr-line-mtb10 border-bt-cl plan-month-line" />
                                    <p className="plan-description">
                                        Access <span className="bold">billions of U.S. records</span> on Ancestry® to find your ancestors’ stories. 
                                        <span className="text-left textsml see-example-text">
                                            <a href="#examples-head-md-up" onClick={this.emptyFunction}>See example</a>
                                        </span>
                                    </p>
                                    <br />
                                </div>
                                <button className="ancBtn free-trial-button full-width usdis-bgcolor mb-0 free-trial-btn-md-up" type="submit">Start free trial</button>
                            </section>
                            <section className="ancCol w33 con grey-border p10 rounded-2 worldex-ps-wrap" id="worldex-sec" onClick={this.emptyFunction}>
                                <header className="conHeader plan-select-header">
                                    <label className="container worldex-subs-label">
                                        <span className="textxlrg radio-text worldex-radio-txt text-left">World Explorer</span> 
                                        <input data-name="offers" className="month-subs-input" type="radio" name="offers" value="O-25405" id="worldExMonthly" aria-labelledby="worldExplorer monthly" onClick={this.emptyFunction} /> 
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className="usint-plan-img-wrap">
                                        <img className="usnintrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/world.svg" />
                                    </div>
                                </header>
                                <div className="conBody">
                                    <span className="usnintrecordsFreeText text4xlrg">
                                        <strong>14 days free</strong>
                                    </span> 
                                    <span className="usnint-monthly-plan-detail" id="usnint-monthly-plan-detail">
                                        <br />then <strong>$39.99/month.</strong>
                                    </span> 
                                    <span className="hide usnint-plan-detail plan-price" id="usnint-plan-detail">
                                        then <strong>$149.00</strong> every <strong className="border-highlight">6 months</strong>
                                    </span>
                                    <div className="saving-plan-sixmonths hide">
                                        Saves $90***
                                        <div className="tooltip">
                                            <img className="ques-icon" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" /> 
                                            <span className="tooltiptext tooltip-bottom normal">
                                                <span className="Wave3 bold">***</span>Saves you $90 over six months versus monthly
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="hr-line-mtb10 border-bt-cl plan-month-line" />
                                    <p className="plan-description">
                                        Access <span className="bold">billions of international and U.S. records</span> on Ancestry® to find your ancestors’ stories.<span className="text-left textsml see-example-text"><a href="#examples-head-md-up" onClick={this.emptyFunction}>See example</a></span>
                                    </p>
                                    <br />
                                </div>
                                <button className="ancBtn free-trial-button blue worldex-bgcolor full-width hide mb-0 free-trial-btn-md-up" type="submit">Start free trial</button>
                            </section>
                            <section className="ancCol w33 con grey-border p10 allacc-sec rounded-2 allacc-ps-wrap" id="allacc-sec" onClick={this.emptyFunction}>
                                <header className="conHeader plan-select-header">
                                    <label className="container allacc-subs-label">
                                        <span className="textxlrg radio-text text-left">All Access</span> 
                                        <input data-name="offers" className="month-subs-input" type="radio" name="offers" value="O-25410" id="worldPlusMonthly" aria-labelledby="allAccess monthly" onClick={this.emptyFunction} /> 
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className="allacc-plan-img-wrap">
                                        <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="20" r="16" fill="white" stroke="white" strokeWidth="2"></circle>
                                            <path d="M17 5C8.73846 5 2 11.7385 2 20C2 28.3077 8.73846 35 17 35C25.2615 35 32 28.3077 32 20C32 11.7385 25.2615 5 17 5ZM16.9077 6.8L18.2462 7.35385L17.6 8.87692C16.8615 9.24615 16.1231 9.47692 15.3385 9.75385L14.8769 10.5846L14.4615 10.7692L13.8615 9.61538L14.2769 9.15385V8.69231L13.1231 7.86154L13.4923 7.53846L15.3846 6.98462L16.9077 6.8ZM13.3077 6.89231L13.4923 7.21538C13.1231 7.35385 12.8 7.49231 12.4308 7.63077L11.8769 7.76923L11.6462 8L11 7.90769L11.1385 7.72308L11.3692 7.63077L11.7846 7.4L12.2923 7.35385L12.6154 6.98462L13.3077 6.89231ZM10.2615 8.32308L10.5385 8.78462L10.7231 8.41538L11.1846 8.32308L11.2308 8.6L12.2 8.69231L12.4308 9.24615L13.0308 9.47692L12.4769 9.89231C12.1538 9.66154 11.7846 9.47692 11.4615 9.24615L11 9.01539C10.7692 9.15385 10.5846 9.33846 10.3538 9.47692L10.0308 10.0769H9.56923L9.70769 9.61538L9.15385 10.1692L7.90769 10.9077L8.04615 11.4154L9.01539 11.8308L9.15385 12.4769L9.52308 11.6923L10.0308 11.5077L9.98461 11.1385L10.5846 10.1692L11.2769 10.5385L11.1846 11L11.7846 10.7692L12.0615 11.3231L11.9692 11.6923L12.3385 11.8308L12.6615 12.1077L12.5231 12.4308L11.6462 12.7538H11.0462L10.1692 13.1231H11.5538L11.0923 13.8154L10.2154 14L9.8 14.6L9.06154 14.8769L8.73846 15.7538L7.76923 16.5846L7.63077 17.6923L7.07692 17L6.29231 16.8615L6.15385 17.2308H5.50769L4.81538 17.7846L4.67692 18.4769L4.72308 19.1231L5.27692 19.4L5.64615 19.2615L6.01539 18.7538H6.38462C6.33846 19.1692 6.29231 19.5846 6.24615 20L6.89231 19.9538V20.5538L7.07692 21.1538C7.30769 21.2923 7.67692 21.2923 7.95385 21.3846V21.2462L8.83077 20.4154L9.70769 21.0615L10.7231 20.9231L11.1385 22.0308L11.8769 22.1692L12.2923 23C13.1231 23.4154 13.9538 23.8769 14.7846 24.2923L14.6923 25.1231L14.0462 26L14.1385 27.2L13.7692 28.0769L12.9846 28.2615L12.6154 28.7692L12.7538 29.1385L12.2923 30.3846L11.6462 30.6615L11.4615 31.0308L11.0923 31.4462L11.2308 31.7231C11.2308 31.7231 11.0923 31.8154 11 31.8615C10.9077 31.9538 9.29231 31.0769 9.24615 30.9385C9.2 30.8 9.24615 30.8 9.24615 30.8L9.61538 29.4154L9.2 28.7692L9.24615 27.5692L8.87692 27.0154L8 26.1846L7.07692 24.5231L7.35385 23.6462L7.21538 23.4154L7.58462 22.9538L7.95385 21.8462V21.7077L7.63077 21.5692L7.21538 21.6154L6.52308 21.1077L6.06154 20.5077L5 20.2308L3.89231 19.5846C3.89231 19.5846 3.43077 18.8923 3.43077 18.7538C4.03077 13.5846 6.84615 10.7692 8.23077 9.47692C8.32308 9.43077 8.78462 9.33846 8.78462 9.33846L9.01539 8.69231L9.43077 8.73846L9.75385 8.92308L9.70769 9.56923L9.8 9.43077L10.2154 9.06154L10.1692 8.46154L10.2615 8.32308ZM23.3231 8.73846L23.9692 8.96923L25.1692 9.2L24.8923 9.56923H24.2L24.8923 10.2615L25.4 9.66154L25.5385 9.38462C25.5385 9.38462 27.4769 11.1385 28.5846 13.0769C29.6923 15.0154 30.2462 17.2769 30.2462 17.7385L29.9231 18.1538C29.6923 17.8769 29.4154 17.6462 29.1385 17.4154L28.5385 17.5077L28.0769 16.8615V17.6462L28.4923 17.9692L28.8615 18.3385L29.2308 17.8308C29.3231 18.0154 29.4154 18.2462 29.5077 18.4308V19.0308L29.0923 19.5385L28.2154 20.1385L27.6154 20.7385C27.8923 20.7385 28.1692 20.6462 28.4923 20.6V21.0154L27.8462 22.5385L27.2923 23.1385L26.8308 24.1077V25.7692L26.9692 26.4154L26.7385 26.6923L26.2308 27.0615L25.6308 27.5231L26.0923 28.0769L25.4462 28.6769L25.5846 29.0462L24.5692 30.1538H23.9231L23.3231 30.5231H23V30.0154L22.8615 29.1385C22.6769 28.5385 22.4462 27.9385 22.2154 27.3846C22.2154 26.9692 22.2154 26.5538 22.2615 26.1385L22.4923 25.5385L22.1231 24.8462L22.1692 23.9231L21.7077 23.3231L21.9385 22.5846L21.5231 22.1231H20.8769L20.6462 21.8923L20 22.2615L19.6769 21.9846L19.0769 22.5385C18.6615 22.0308 18.2 21.5231 17.7385 21.0615L17.1846 19.8615L17.6462 19.1692L17.4154 18.8462L17.9692 17.5538C18.4308 17 18.9385 16.4462 19.4 15.8923L20.2769 15.6615L21.2462 15.5231L21.8923 15.7077L22.8154 16.6308L23.1385 16.2615L23.6462 16.1231L24.5231 16.4462H25.1692L25.6308 16.0308L25.8154 15.7538L25.4 15.4769L24.6154 15.4308C24.3846 15.1538 24.2 14.8308 23.9692 14.5538L23.7385 14.6462L23.6 15.4308L23.1385 14.8769L23.0462 14.2769L22.4923 13.9077H22.3077L22.8615 14.5077L22.6769 15.0154L22.2615 15.1538L22.4923 14.6462L22.0769 14.3692L21.6154 13.9538L20.8769 14.0923L20.6923 14.3231L20.2769 14.6462L20.0462 15.2923L19.4 15.6154L19.1231 15.2923H18.8V14.2308L19.4462 13.9077H20L19.8615 13.4923L19.4462 13.0769L20.1385 12.9385L20.5077 12.5231L20.6462 12.2462L20.2769 12.6154L19.6769 12.7538L19.8154 12.0615V11.5538L19.6308 11.3231V11H19.9077C20.0462 11.3231 20.2308 11.6 20.3231 11.8769L20.6923 12.2462L20.8769 12.0154H21.4308L21.2923 11.6L21.6615 11.4154V11.8769L22.4 12.0154L23.1846 11.3692L23.2308 11.0462L23.8769 10.5846C23.6462 10.6308 23.4154 10.6308 23.1846 10.7231V10.2154L23.4154 9.61538H23.1846L22.5385 10.1692L22.4 10.4462L22.5385 10.8154L22.3077 11.5077L21.9385 11.2769L21.5692 10.9077L21.0615 11.2769L20.8308 10.3538L21.8 9.70769V9.38462L22.4 9.01539L23.3231 8.73846ZM18.2923 9.47692L18.6154 9.84615L17.9692 10.2615L17.6 10.0308L17.6462 9.66154L17.8308 9.70769L18.2923 9.47692ZM11.5538 9.61538L12.0615 9.84615V10.2615H11.6462L11.1846 9.89231L11.5538 9.61538ZM19.4 11.6462L19.5846 12.1538L19.1692 12.3846L19.0308 11.7385L19.4 11.6462ZM12.3385 12.7077L12.8462 13.0308L12.4769 13.4923L12.3385 12.7077Z" fill="#61527E"></path>
                                            <circle cx="32.5" cy="9.5" r="8.5" fill="#61527E" stroke="white" strokeWidth="2"></circle>
                                            <rect x="28.75" y="8.79688" width="7.5" height="1.40625" rx="0.703125" fill="white"></rect>
                                            <rect x="31.7969" y="13.25" width="7.5" height="1.40625" rx="0.703125" transform="rotate(-90 31.7969 13.25)" fill="white"></rect>
                                        </svg>
                                    </div>
                                </header>
                                <div className="conBody">
                                    <span className="allaccess-color text4xlrg">
                                        <strong>14 days free</strong>
                                    </span> 
                                    <span className="allaccess-monthly-plan-detail">
                                        <br />then <strong>$49.99/month.</strong>
                                    </span> 
                                    <span className="hide allaccess-plan-detail plan-price" id="allaccess-plan-detail">
                                        then <span className="bold">$199.99&nbsp;</span>every&nbsp;<span className="bold border-highlight">6 months</span>
                                    </span>
                                    <div className="saving-plan-sixmonths hide">
                                        Saves $100 §
                                        <div className="tooltip">
                                            <img className="ques-icon" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" /> 
                                            <span className="tooltiptext tooltip-bottom normal">
                                                <span className="allaccess-color bold">§</span> Saves you $100 over six months versus monthly
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="hr-line-mtb10 border-bt-cl plan-month-line" />
                                    <p className="plan-description">
                                        Access billions of international and U.S. records on Ancestry® to find your ancestors’ stories. <span className="bold">Plus, access military and newspaper records on:</span>
                                    </p>
                                    <div className="allaccess-img-container flex-container topSpacingBlock flex-center">
                                        <div className="tooltip">
                                            <div className="fold-img-wrapper">
                                                <div>
                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/fold.svg" className="fold-img" />
                                                </div>
                                                <div className="textsml text-left">
                                                    <a href="javascript:;">What's this?</a>
                                                </div>
                                                <span className="tooltiptext tooltip-bottom normal">
                                                    <div>Search for family stories in more than 537 million U.S. military records on Fold3.</div>
                                                    <div className="fold-callout-img-wrap textCenter rel-pos">
                                                        <div className="fold-callout-img-inner-wrap">
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/fold3-callout-img.png" className="fold-callout-img" />
                                                        </div>
                                                        <a href="#examples-head-md-up" onClick={this.emptyFunction}>
                                                            <button className="ancBtn full-width allaccess-btn-bgcolor see-example-btn" type="button">See example</button>
                                                        </a>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.5" cy="10" r="8.5" fill="#61527E" stroke="white" strokeWidth="2"></circle>
                                                <rect x="5.75" y="9.29688" width="7.5" height="1.40625" rx="0.703125" fill="white"></rect>
                                                <rect x="8.79688" y="13.75" width="7.5" height="1.40625" rx="0.703125" transform="rotate(-90 8.79688 13.75)" fill="white"></rect>
                                            </svg>
                                        </div>
                                        <div className="tooltip">
                                            <div className="newspaper-img-wrapper">
                                                <div className="rel-pos">
                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/newpapers.svg" className="newspapers-img" /> 
                                                    <sup className="news-basic-text">Basic</sup>
                                                </div>
                                                <span className="news-basic-text-tab">Basic</span>
                                                <div className="textsml text-left">
                                                    <a href="javascript:;">What's this?</a>
                                                </div>
                                                <span className="tooltiptext tooltip-bottom normal tooltip-news-wrap-new">
                                                    <div>Search for family stories in more than 142 million articles on Newspaper.com.</div>
                                                    <div className="newspaper-callout-img-wrap textCenter rel-pos">
                                                        <div className="newspaper-callout-img-inner-wrap">
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/newspapers-callout-img.png" className="newspaper-callout-img" />
                                                        </div>
                                                        <a href="#examples-head-md-up" onClick={this.emptyFunction}>
                                                            <button className="ancBtn full-width allaccess-btn-bgcolor see-example-btn" type="button">See example</button>
                                                        </a>
                                                    </div>
                                                    <div className="textsml tooltip-subtext">Other subsciptions to Newspapers.com may be available, but are not included in the All Access package</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="ancBtn free-trial-button full-width hide allaccess-btn-bgcolor mt-2 mb-0" type="submit">Start free trial</button>
                            </section>
                        </div>
                    </form> */}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SparklyDragon);