import React from 'react';
import { connect } from 'react-redux';

export class SparklyDragon extends React.Component {
    emptyFunction = () => {
        console.log('Ran empty function');
    }
    render() {
        return (
            <div className="container container--sparklydragon">
                <div className="page-container">
                    <section id="memOptions" className="aboveFoldCon">
                        <div className="chooseMemText hide768 show480 hidden-md-up textCenter">
                            <span className="bold headline-text">Connect with your ancestors through historical documents.</span>
                            <div className="mytimelineWrapper mytimelineWrapper-desk mytimelineWrapper-mbl">
                                <div className="mytimeline">
                                    <div className="myleft-circle">
                                        <div className="mydot-circle"></div>
                                    </div>
                                    <div className="myline"></div>
                                    <div className="mytoday">
                                        Today • <span className="today-date normal">Jun 6</span>
                                    </div>
                                    <p>FREE 14-day trial*</p>
                                    <div className="myright-circle"></div>
                                    <div className="mybilldate">
                                        First Bill • <span className="bill-date normal">Jun 21</span>
                                    </div>
                                </div>
                                <div className="myposttrial"></div>
                            </div>
                        </div>
                        <div className="ancGrid priceGrid hide480 hero-section-container">
                            <div className="ancCol hide480 w25 hide show-lg-up-block">
                                <div className="documentsImg documentimg-hero-desk"></div>
                            </div>
                            <div className="ancCol full480 w75">
                                <div className="headlines">
                                    <h1 className="greenTxt text3xlrg bold">Connect with your ancestors through historical documents.</h1>
                                    <p className="textlrg">
                                        <span className="cancel-txt">Cancel anytime. Keep your family tree.</span>
                                    </p>
                                </div>
                                <div className="mytimelineWrapper mytimelineWrapper-desk">
                                    <div className="mytimeline usdis-bgcolor" id="mytimeline-md">
                                        <div className="myleft-circle">
                                            <div className="mydot-circle"></div>
                                        </div>
                                        <div className="myline"></div>
                                        <div className="mytoday">
                                            Today • <span className="today-date normal">Jun 6</span>
                                        </div>
                                        <p>FREE 14-day trial*</p>
                                        <div className="myright-circle"></div>
                                        <div className="mybilldate">
                                            First Bill • <span className="bill-date normal">Jun 21</span>
                                        </div>
                                    </div>
                                    <div className="myposttrial"></div>
                                </div>
                            </div>
                            <div className="ancCol hide480 w25 hide show768 hidden-lg-up">
                                <div className="documentsImg document-hero-img-tab"></div>
                            </div>
                        </div>
                        <div className="buttonpill-wrap" id="form-plan-container">
                            <div className="buttonpill-inner">
                                <div className="buttonPill">
                                    <button type="button" id="monthPill" className="activePill monthPill icon iconCheck" onClick={this.emptyFunction}>Monthly</button> 
                                    <input id="monthPillInput" className="radioBtn hide" type="radio" name="planPer" value="monthly" onClick={this.emptyFunction} /> 
                                    <button type="button" id="month6Pill" className="inactivePill month6Pill" onClick={this.emptyFunction}>6 Months</button> 
                                    <input id="month6PillInput" className="radioBtn hide" type="radio" name="planPer" value="biannual" onClick={this.emptyFunction} />
                                    <div className="arrow" id="save20" onClick={this.emptyFunction}>
                                        <span className="textsml">Saves $$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <form id="mobileOfferForm" action="/checkout/mli?" className="form freetrial-form hidden-md-up">
                        <input type="hidden" name="direct" value="1" /> 
                        <input type="hidden" name="rtype" value="14" /> 
                        <input type="hidden" name="quantities" value="1" /> 
                        <input type="hidden" name="flow" value="3" />
                        <div className="ancGrid ancGridEqual center-grid hide768 show480 subs-plan-container">
                            <section className="subs-plan-outer-wrap us-dis-plan-outer-wrap" onClick={this.emptyFunction}>
                                <div className="subs-plan-wrap us-dis-plan-wrap usrecords">
                                    <div className="saving-plan-sixmonths hide">Save $50**</div>
                                    <div className="plan-hero-img us-dis-geo-mbl">
                                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.96/images/us-dis-mbl.png" />
                                    </div>
                                    <div className="subs-plan-desc">
                                        <h1 className="conTitle planTitle">
                                            U.S. Discovery
                                            <br /><span className="textsml plan-subtitle">Access to billions of U.S. records.</span>
                                        </h1>
                                        <span className="us-monthly-plan-detail textsml" id="us-monthly-plan-detail">
                                            <strong className="bamboo3">$24.99/month</strong> after free trial
                                        </span> 
                                        <span className="hide us-plan-detail plan-detail textsml" id="us-plan-detail">
                                            <strong className="bamboo3">$99.00</strong> every <span className="border-highlight">6 months</span> after free trial
                                        </span>
                                    </div>
                                    <div className="right-arrow-wrap bamboo3">
                                        <span className="icon iconArrowRight us-dis-arrow"></span>
                                    </div>
                                    <input id="us1Month" className="radioBtn hide" type="radio" name="offers" value="O-25401" onClick={this.emptyFunction} /> 
                                    <input id="us6Month" className="radioBtn hide" type="radio" name="offers" value="O-23590" onClick={this.emptyFunction} />
                                </div>
                            </section>
                            <section className="subs-plan-outer-wrap" onClick={this.emptyFunction}>
                                <div className="subs-plan-wrap world-ex-plan-wrap usnintrecords">
                                    <div className="saving-plan-sixmonths hide">Save $90***</div>
                                    <div className="plan-hero-img world-ex-geo-mbl">
                                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.96/images/world-delx-mbl.png" />
                                    </div>
                                    <div className="subs-plan-desc">
                                        <h1 className="conTitle planTitle">
                                            World Explorer
                                            <br /><span className="textsml plan-subtitle">Access billions of U.S. <span className="bold">and</span> International records.</span>
                                        </h1>
                                        <span className="usnint-monthly-plan-detail textsml" id="usnint-monthly-plan-detail">
                                            <strong className="Wave3">$39.99/month</strong> after free trial
                                        </span> 
                                        <span className="hide usnint-plan-detail plan-detail textsml" id="usnint-plan-detail">
                                            <strong className="Wave3">$149.00</strong> every <span className="border-highlight">6 months</span> after free trial
                                        </span>
                                    </div>
                                    <div className="right-arrow-wrap Wave3">
                                        <span className="icon iconArrowRight world-ex-arrow"></span>
                                    </div>
                                    <input id="worldex1Month" className="radioBtn hide" type="radio" name="offers" value="O-25405" onClick={this.emptyFunction} /> 
                                    <input id="worldex6Month" className="radioBtn hide" type="radio" name="offers" value="O-22056" onClick={this.emptyFunction} />
                                </div>
                            </section>
                            <section className="subs-plan-outer-wrap" onClick={this.emptyFunction}>
                                <div className="subs-plan-wrap allacc-plan-wrap allacc-plan-br-mbl">
                                    <div className="saving-plan-sixmonths hide">Save $100 §</div>
                                    <div className="plan-hero-img allacc-geo-mbl">
                                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.96/images/allacc-mbl.png" />
                                    </div>
                                    <div className="subs-plan-desc allacc-plan-desc">
                                        <h1 className="conTitle planTitle">
                                            All Access
                                            <br /><span className="textsml plan-subtitle">Everything above, <span className="bold">plus</span> access to Newspapers.com™ Basic‡ and Fold3.</span>
                                        </h1>
                                        <span className="us-monthly-plan-detail textsml" id="us-monthly-plan-detail">
                                            <strong className="allaccess-color">$44.99/month</strong> after free trial
                                        </span> 
                                        <span className="hide allaccess-plan-detail plan-detail textsml" id="allaccess-plan-detail">
                                            <strong className="allaccess-color">$199.00</strong> every <span className="border-highlight">6 months</span> after free trial
                                        </span>
                                    </div>
                                    <div className="right-arrow-wrap allaccess-color">
                                        <span className="icon iconArrowRight allacc-arrow"></span>
                                    </div>
                                    <input id="allacc1Month" className="radioBtn hide" type="radio" name="offers" value="O-25410" onClick={this.emptyFunction} /> 
                                    <input id="allacc6Month" className="radioBtn hide" type="radio" name="offers" value="O-24567" onClick={this.emptyFunction} />
                                </div>
                            </section>
                        </div>
                    </form>
                    <form action="/checkout/mli?" className="form freetrial-form" id="signupForm">
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
                    </form>
                    <div id="help-container">
                        <div className="cancel-text hide768 show480 hidden-md-up">Cancel anytime. Keep your family tree.</div>
                        <section className="guaranteeCon hide768 show480 hidden-md-up">
                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/badge.svg" alt="Ancestry 100% Guarantee" className="guaranteeSealImg" />
                            <div className="needHelpTextCon">
                                <p>
                                    <strong className="textlrg">Need help?</strong>
                                    <br /><span className="icon iconPhone">1-800-ANCESTRY</span>
                                    <br /><span className="support-timings-txt">7 days a week, 9am–11pm ET</span>
                                </p>
                            </div>
                        </section>
                    </div>
                    <section className="plan-comparison-chart hide480" id="plan-comparision">
                        <table>
                            <tbody>
                                <tr className="table-title">
                                    <th className="rec-acc bold text2xlrg">
                                        <span className="text3xlrg">Plan Comparison</span>
                                        <br /><div className="topSpacingBlock">Record Access</div>
                                    </th>
                                    <th className="bold textxlrg bamboo3 textCenter align-base rel-pos triangle-start">
                                        <div className="least-rec-txt">Least Records</div>
                                        <span className="show768 hidden-lg-up">
                                            <img className="usrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/us.svg" />
                                            <br />U.S
                                            <br />Discovery
                                        </span> 
                                        <span className="tb-plan-head hide768">
                                            U.S. Discovery 
                                            <img className="usrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/us.svg" />
                                        </span>
                                    </th>
                                    <th className="bold textxlrg Wave3 textCenter align-base">
                                        <span className="show768 hidden-lg-up">
                                            <img className="usnintrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/world.svg" />
                                            <br />World
                                            <br />Explorer
                                        </span>
                                        <span className="tb-plan-head hide768">
                                            World Explorer<img className="usnintrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/world.svg" />
                                        </span>
                                    </th>
                                    <th className="bold textxlrg allaccess-color textCenter align-base rel-pos">
                                        <div className="most-rec-txt">
                                            Most
                                            <br /><span>Records</span>
                                        </div>
                                        <span className="show768 hidden-lg-up">
                                            <svg width="38" height="35" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="allaccess-img">
                                                <circle cx="17" cy="20" r="16" fill="white" stroke="white" strokeWidth="2"></circle>
                                                <path d="M17 5C8.73846 5 2 11.7385 2 20C2 28.3077 8.73846 35 17 35C25.2615 35 32 28.3077 32 20C32 11.7385 25.2615 5 17 5ZM16.9077 6.8L18.2462 7.35385L17.6 8.87692C16.8615 9.24615 16.1231 9.47692 15.3385 9.75385L14.8769 10.5846L14.4615 10.7692L13.8615 9.61538L14.2769 9.15385V8.69231L13.1231 7.86154L13.4923 7.53846L15.3846 6.98462L16.9077 6.8ZM13.3077 6.89231L13.4923 7.21538C13.1231 7.35385 12.8 7.49231 12.4308 7.63077L11.8769 7.76923L11.6462 8L11 7.90769L11.1385 7.72308L11.3692 7.63077L11.7846 7.4L12.2923 7.35385L12.6154 6.98462L13.3077 6.89231ZM10.2615 8.32308L10.5385 8.78462L10.7231 8.41538L11.1846 8.32308L11.2308 8.6L12.2 8.69231L12.4308 9.24615L13.0308 9.47692L12.4769 9.89231C12.1538 9.66154 11.7846 9.47692 11.4615 9.24615L11 9.01539C10.7692 9.15385 10.5846 9.33846 10.3538 9.47692L10.0308 10.0769H9.56923L9.70769 9.61538L9.15385 10.1692L7.90769 10.9077L8.04615 11.4154L9.01539 11.8308L9.15385 12.4769L9.52308 11.6923L10.0308 11.5077L9.98461 11.1385L10.5846 10.1692L11.2769 10.5385L11.1846 11L11.7846 10.7692L12.0615 11.3231L11.9692 11.6923L12.3385 11.8308L12.6615 12.1077L12.5231 12.4308L11.6462 12.7538H11.0462L10.1692 13.1231H11.5538L11.0923 13.8154L10.2154 14L9.8 14.6L9.06154 14.8769L8.73846 15.7538L7.76923 16.5846L7.63077 17.6923L7.07692 17L6.29231 16.8615L6.15385 17.2308H5.50769L4.81538 17.7846L4.67692 18.4769L4.72308 19.1231L5.27692 19.4L5.64615 19.2615L6.01539 18.7538H6.38462C6.33846 19.1692 6.29231 19.5846 6.24615 20L6.89231 19.9538V20.5538L7.07692 21.1538C7.30769 21.2923 7.67692 21.2923 7.95385 21.3846V21.2462L8.83077 20.4154L9.70769 21.0615L10.7231 20.9231L11.1385 22.0308L11.8769 22.1692L12.2923 23C13.1231 23.4154 13.9538 23.8769 14.7846 24.2923L14.6923 25.1231L14.0462 26L14.1385 27.2L13.7692 28.0769L12.9846 28.2615L12.6154 28.7692L12.7538 29.1385L12.2923 30.3846L11.6462 30.6615L11.4615 31.0308L11.0923 31.4462L11.2308 31.7231C11.2308 31.7231 11.0923 31.8154 11 31.8615C10.9077 31.9538 9.29231 31.0769 9.24615 30.9385C9.2 30.8 9.24615 30.8 9.24615 30.8L9.61538 29.4154L9.2 28.7692L9.24615 27.5692L8.87692 27.0154L8 26.1846L7.07692 24.5231L7.35385 23.6462L7.21538 23.4154L7.58462 22.9538L7.95385 21.8462V21.7077L7.63077 21.5692L7.21538 21.6154L6.52308 21.1077L6.06154 20.5077L5 20.2308L3.89231 19.5846C3.89231 19.5846 3.43077 18.8923 3.43077 18.7538C4.03077 13.5846 6.84615 10.7692 8.23077 9.47692C8.32308 9.43077 8.78462 9.33846 8.78462 9.33846L9.01539 8.69231L9.43077 8.73846L9.75385 8.92308L9.70769 9.56923L9.8 9.43077L10.2154 9.06154L10.1692 8.46154L10.2615 8.32308ZM23.3231 8.73846L23.9692 8.96923L25.1692 9.2L24.8923 9.56923H24.2L24.8923 10.2615L25.4 9.66154L25.5385 9.38462C25.5385 9.38462 27.4769 11.1385 28.5846 13.0769C29.6923 15.0154 30.2462 17.2769 30.2462 17.7385L29.9231 18.1538C29.6923 17.8769 29.4154 17.6462 29.1385 17.4154L28.5385 17.5077L28.0769 16.8615V17.6462L28.4923 17.9692L28.8615 18.3385L29.2308 17.8308C29.3231 18.0154 29.4154 18.2462 29.5077 18.4308V19.0308L29.0923 19.5385L28.2154 20.1385L27.6154 20.7385C27.8923 20.7385 28.1692 20.6462 28.4923 20.6V21.0154L27.8462 22.5385L27.2923 23.1385L26.8308 24.1077V25.7692L26.9692 26.4154L26.7385 26.6923L26.2308 27.0615L25.6308 27.5231L26.0923 28.0769L25.4462 28.6769L25.5846 29.0462L24.5692 30.1538H23.9231L23.3231 30.5231H23V30.0154L22.8615 29.1385C22.6769 28.5385 22.4462 27.9385 22.2154 27.3846C22.2154 26.9692 22.2154 26.5538 22.2615 26.1385L22.4923 25.5385L22.1231 24.8462L22.1692 23.9231L21.7077 23.3231L21.9385 22.5846L21.5231 22.1231H20.8769L20.6462 21.8923L20 22.2615L19.6769 21.9846L19.0769 22.5385C18.6615 22.0308 18.2 21.5231 17.7385 21.0615L17.1846 19.8615L17.6462 19.1692L17.4154 18.8462L17.9692 17.5538C18.4308 17 18.9385 16.4462 19.4 15.8923L20.2769 15.6615L21.2462 15.5231L21.8923 15.7077L22.8154 16.6308L23.1385 16.2615L23.6462 16.1231L24.5231 16.4462H25.1692L25.6308 16.0308L25.8154 15.7538L25.4 15.4769L24.6154 15.4308C24.3846 15.1538 24.2 14.8308 23.9692 14.5538L23.7385 14.6462L23.6 15.4308L23.1385 14.8769L23.0462 14.2769L22.4923 13.9077H22.3077L22.8615 14.5077L22.6769 15.0154L22.2615 15.1538L22.4923 14.6462L22.0769 14.3692L21.6154 13.9538L20.8769 14.0923L20.6923 14.3231L20.2769 14.6462L20.0462 15.2923L19.4 15.6154L19.1231 15.2923H18.8V14.2308L19.4462 13.9077H20L19.8615 13.4923L19.4462 13.0769L20.1385 12.9385L20.5077 12.5231L20.6462 12.2462L20.2769 12.6154L19.6769 12.7538L19.8154 12.0615V11.5538L19.6308 11.3231V11H19.9077C20.0462 11.3231 20.2308 11.6 20.3231 11.8769L20.6923 12.2462L20.8769 12.0154H21.4308L21.2923 11.6L21.6615 11.4154V11.8769L22.4 12.0154L23.1846 11.3692L23.2308 11.0462L23.8769 10.5846C23.6462 10.6308 23.4154 10.6308 23.1846 10.7231V10.2154L23.4154 9.61538H23.1846L22.5385 10.1692L22.4 10.4462L22.5385 10.8154L22.3077 11.5077L21.9385 11.2769L21.5692 10.9077L21.0615 11.2769L20.8308 10.3538L21.8 9.70769V9.38462L22.4 9.01539L23.3231 8.73846ZM18.2923 9.47692L18.6154 9.84615L17.9692 10.2615L17.6 10.0308L17.6462 9.66154L17.8308 9.70769L18.2923 9.47692ZM11.5538 9.61538L12.0615 9.84615V10.2615H11.6462L11.1846 9.89231L11.5538 9.61538ZM19.4 11.6462L19.5846 12.1538L19.1692 12.3846L19.0308 11.7385L19.4 11.6462ZM12.3385 12.7077L12.8462 13.0308L12.4769 13.4923L12.3385 12.7077Z" fill="#61527E"></path>
                                                <circle cx="32.5" cy="9.5" r="8.5" fill="#61527E" stroke="white" strokeWidth="2"></circle>
                                                <rect x="28.75" y="8.79688" width="7.5" height="1.40625" rx="0.703125" fill="white"></rect>
                                                <rect x="31.7969" y="13.25" width="7.5" height="1.40625" rx="0.703125" transform="rotate(-90 31.7969 13.25)" fill="white"></rect>
                                            </svg>
                                            <br />All Access
                                        </span> 
                                        <span className="tb-plan-head hide768">
                                            All Access
                                            <svg width="38" height="35" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="allaccess-img">
                                                <circle cx="17" cy="20" r="16" fill="white" stroke="white" strokeWidth="2"></circle>
                                                <path d="M17 5C8.73846 5 2 11.7385 2 20C2 28.3077 8.73846 35 17 35C25.2615 35 32 28.3077 32 20C32 11.7385 25.2615 5 17 5ZM16.9077 6.8L18.2462 7.35385L17.6 8.87692C16.8615 9.24615 16.1231 9.47692 15.3385 9.75385L14.8769 10.5846L14.4615 10.7692L13.8615 9.61538L14.2769 9.15385V8.69231L13.1231 7.86154L13.4923 7.53846L15.3846 6.98462L16.9077 6.8ZM13.3077 6.89231L13.4923 7.21538C13.1231 7.35385 12.8 7.49231 12.4308 7.63077L11.8769 7.76923L11.6462 8L11 7.90769L11.1385 7.72308L11.3692 7.63077L11.7846 7.4L12.2923 7.35385L12.6154 6.98462L13.3077 6.89231ZM10.2615 8.32308L10.5385 8.78462L10.7231 8.41538L11.1846 8.32308L11.2308 8.6L12.2 8.69231L12.4308 9.24615L13.0308 9.47692L12.4769 9.89231C12.1538 9.66154 11.7846 9.47692 11.4615 9.24615L11 9.01539C10.7692 9.15385 10.5846 9.33846 10.3538 9.47692L10.0308 10.0769H9.56923L9.70769 9.61538L9.15385 10.1692L7.90769 10.9077L8.04615 11.4154L9.01539 11.8308L9.15385 12.4769L9.52308 11.6923L10.0308 11.5077L9.98461 11.1385L10.5846 10.1692L11.2769 10.5385L11.1846 11L11.7846 10.7692L12.0615 11.3231L11.9692 11.6923L12.3385 11.8308L12.6615 12.1077L12.5231 12.4308L11.6462 12.7538H11.0462L10.1692 13.1231H11.5538L11.0923 13.8154L10.2154 14L9.8 14.6L9.06154 14.8769L8.73846 15.7538L7.76923 16.5846L7.63077 17.6923L7.07692 17L6.29231 16.8615L6.15385 17.2308H5.50769L4.81538 17.7846L4.67692 18.4769L4.72308 19.1231L5.27692 19.4L5.64615 19.2615L6.01539 18.7538H6.38462C6.33846 19.1692 6.29231 19.5846 6.24615 20L6.89231 19.9538V20.5538L7.07692 21.1538C7.30769 21.2923 7.67692 21.2923 7.95385 21.3846V21.2462L8.83077 20.4154L9.70769 21.0615L10.7231 20.9231L11.1385 22.0308L11.8769 22.1692L12.2923 23C13.1231 23.4154 13.9538 23.8769 14.7846 24.2923L14.6923 25.1231L14.0462 26L14.1385 27.2L13.7692 28.0769L12.9846 28.2615L12.6154 28.7692L12.7538 29.1385L12.2923 30.3846L11.6462 30.6615L11.4615 31.0308L11.0923 31.4462L11.2308 31.7231C11.2308 31.7231 11.0923 31.8154 11 31.8615C10.9077 31.9538 9.29231 31.0769 9.24615 30.9385C9.2 30.8 9.24615 30.8 9.24615 30.8L9.61538 29.4154L9.2 28.7692L9.24615 27.5692L8.87692 27.0154L8 26.1846L7.07692 24.5231L7.35385 23.6462L7.21538 23.4154L7.58462 22.9538L7.95385 21.8462V21.7077L7.63077 21.5692L7.21538 21.6154L6.52308 21.1077L6.06154 20.5077L5 20.2308L3.89231 19.5846C3.89231 19.5846 3.43077 18.8923 3.43077 18.7538C4.03077 13.5846 6.84615 10.7692 8.23077 9.47692C8.32308 9.43077 8.78462 9.33846 8.78462 9.33846L9.01539 8.69231L9.43077 8.73846L9.75385 8.92308L9.70769 9.56923L9.8 9.43077L10.2154 9.06154L10.1692 8.46154L10.2615 8.32308ZM23.3231 8.73846L23.9692 8.96923L25.1692 9.2L24.8923 9.56923H24.2L24.8923 10.2615L25.4 9.66154L25.5385 9.38462C25.5385 9.38462 27.4769 11.1385 28.5846 13.0769C29.6923 15.0154 30.2462 17.2769 30.2462 17.7385L29.9231 18.1538C29.6923 17.8769 29.4154 17.6462 29.1385 17.4154L28.5385 17.5077L28.0769 16.8615V17.6462L28.4923 17.9692L28.8615 18.3385L29.2308 17.8308C29.3231 18.0154 29.4154 18.2462 29.5077 18.4308V19.0308L29.0923 19.5385L28.2154 20.1385L27.6154 20.7385C27.8923 20.7385 28.1692 20.6462 28.4923 20.6V21.0154L27.8462 22.5385L27.2923 23.1385L26.8308 24.1077V25.7692L26.9692 26.4154L26.7385 26.6923L26.2308 27.0615L25.6308 27.5231L26.0923 28.0769L25.4462 28.6769L25.5846 29.0462L24.5692 30.1538H23.9231L23.3231 30.5231H23V30.0154L22.8615 29.1385C22.6769 28.5385 22.4462 27.9385 22.2154 27.3846C22.2154 26.9692 22.2154 26.5538 22.2615 26.1385L22.4923 25.5385L22.1231 24.8462L22.1692 23.9231L21.7077 23.3231L21.9385 22.5846L21.5231 22.1231H20.8769L20.6462 21.8923L20 22.2615L19.6769 21.9846L19.0769 22.5385C18.6615 22.0308 18.2 21.5231 17.7385 21.0615L17.1846 19.8615L17.6462 19.1692L17.4154 18.8462L17.9692 17.5538C18.4308 17 18.9385 16.4462 19.4 15.8923L20.2769 15.6615L21.2462 15.5231L21.8923 15.7077L22.8154 16.6308L23.1385 16.2615L23.6462 16.1231L24.5231 16.4462H25.1692L25.6308 16.0308L25.8154 15.7538L25.4 15.4769L24.6154 15.4308C24.3846 15.1538 24.2 14.8308 23.9692 14.5538L23.7385 14.6462L23.6 15.4308L23.1385 14.8769L23.0462 14.2769L22.4923 13.9077H22.3077L22.8615 14.5077L22.6769 15.0154L22.2615 15.1538L22.4923 14.6462L22.0769 14.3692L21.6154 13.9538L20.8769 14.0923L20.6923 14.3231L20.2769 14.6462L20.0462 15.2923L19.4 15.6154L19.1231 15.2923H18.8V14.2308L19.4462 13.9077H20L19.8615 13.4923L19.4462 13.0769L20.1385 12.9385L20.5077 12.5231L20.6462 12.2462L20.2769 12.6154L19.6769 12.7538L19.8154 12.0615V11.5538L19.6308 11.3231V11H19.9077C20.0462 11.3231 20.2308 11.6 20.3231 11.8769L20.6923 12.2462L20.8769 12.0154H21.4308L21.2923 11.6L21.6615 11.4154V11.8769L22.4 12.0154L23.1846 11.3692L23.2308 11.0462L23.8769 10.5846C23.6462 10.6308 23.4154 10.6308 23.1846 10.7231V10.2154L23.4154 9.61538H23.1846L22.5385 10.1692L22.4 10.4462L22.5385 10.8154L22.3077 11.5077L21.9385 11.2769L21.5692 10.9077L21.0615 11.2769L20.8308 10.3538L21.8 9.70769V9.38462L22.4 9.01539L23.3231 8.73846ZM18.2923 9.47692L18.6154 9.84615L17.9692 10.2615L17.6 10.0308L17.6462 9.66154L17.8308 9.70769L18.2923 9.47692ZM11.5538 9.61538L12.0615 9.84615V10.2615H11.6462L11.1846 9.89231L11.5538 9.61538ZM19.4 11.6462L19.5846 12.1538L19.1692 12.3846L19.0308 11.7385L19.4 11.6462ZM12.3385 12.7077L12.8462 13.0308L12.4769 13.4923L12.3385 12.7077Z" fill="#61527E"></path>
                                                <circle cx="32.5" cy="9.5" r="8.5" fill="#61527E" stroke="white" strokeWidth="2"></circle>
                                                <rect x="28.75" y="8.79688" width="7.5" height="1.40625" rx="0.703125" fill="white"></rect>
                                                <rect x="31.7969" y="13.25" width="7.5" height="1.40625" rx="0.703125" transform="rotate(-90 31.7969 13.25)" fill="white"></rect>
                                            </svg>
                                        </span>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Access to all <span className="bold">U.S. records</span> on Ancestry <a href="#examples-head-md-up" className="example-right-align" onClick={this.emptyFunction}>See example</a>
                                        <br />
                                        <div className="topSpacing plan-para-color">Explore the billions of records in our U.S. record collection including birth, marriage, death and census records.</div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper usdiscovery-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-usdis" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper worldexplorer-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-worldex" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper allaccess-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="flex-container">
                                            <span>Access to all <span className="bold">international records</span> on Ancestry</span> <a href="#examples-head-md-up" className="flex-auto" onClick={this.emptyFunction}>See example</a>
                                        </span>
                                        <div className="topSpacing plan-para-color">Access more than 3 billion international birth, marriage, death, census, military, religious, and other records.</div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper usdiscovery-bg cross-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper worldexplorer-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-worldex" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper allaccess-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-row-head">
                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.17/images/newspapers.svg" className="table-newspapers-img" /> 
                                            <a href="#examples-head-md-up" onClick={this.emptyFunction}>See example</a>
                                        </span>
                                        <div className="tooltip">
                                            <span className="textsml basicsubs-wrap">
                                                <span className="mr-1">Basic subscription</span>
                                                <img className="align-middle" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" />
                                            </span>
                                            <span className="tooltiptext tooltip-top normal">Other subsciptions to Newspapers.com may be available, but are not included in the All Access package</span>
                                        </div>
                                        <div className="topSpacing plan-para-color">Search for family stories in more than 142 million U.S. and world articles on Newspapers.com™.</div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper usdiscovery-bg cross-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper usdiscovery-bg cross-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper allaccess-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-row-head">
                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.17/images/fold-3.svg" className="table-fold-img"/> 
                                            <a href="#examples-head-md-up" onClick={this.emptyFunction}>See example</a>
                                        </span>
                                        <span className="textsml">Additional military records</span>
                                        <div className="topSpacing plan-para-color">Search for family stories in more than 537 million U.S. military records on Fold3®.</div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper usdiscovery-bg cross-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper usdiscovery-bg cross-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="check-wrapper allaccess-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                                <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <hr className="hr-line mt-0 mb-4 hr-gradient-line hidden-md-up" />
                    <section className="video-section-container hide768 show480 hidden-md-up mb-6" id="how-does-work1">
                        <p className="title">How does Ancestry® work?</p>
                        <p className="subtitle">
                            Find out in this 52-second video.
                        </p>
                        <button type="button" id="watch-now-new-mbl" className="watch-now-btn-new">
                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/youtube.png" className="youtube-img-new" />
                            <span className="bold">Watch now</span>
                        </button> 
                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/how-ancestry-new.png" className="how-tree-ancestry-img" />
                    </section>
                    <section id="modal" aria-expanded="true">
                        <div className="modalFixed" id="modalFixed">
                            <div className="modalFlex open" id="modal-modal-1582293498438875" tabIndex="-1">
                                <div className="modalContents" id="modalContent-modal-1582293498438875" style={{width:'640px'}}>
                                    <div className="modal active">
                                        <iframe width="600" height="338" src="https://www.youtube.com/embed/cFdFkzt45Xw?enablejsapi=1&amp;autoplay=0&amp;rel=0" frameBorder="0" allowFullScreen="" id="youtube-video"></iframe>
                                    </div>
                                    <button className="closeBtn modalClose modal-close-new" type="button" title="Close"></button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="ancGrid ancGridEqual full480 exampleWrapper hide768 show480 hidden-md-up" id="examples-story1">
                        <hr className="hr-line-mtb10 mlr-2" />
                        <section className="con example-content pb-4">
                            <header className="conHeader">
                                <h2 className="conTitle examples-head" id="examples-head-xs-s">Examples of what you could find:</h2>
                            </header>
                            <div className="conBody examples-full-wrap">
                                <div className="ancCol">
                                    <div className="topSpacing mb-6" id="examples-story1-hero-wrap">
                                        <div className="borderLeft">
                                            <div className="borderInner">
                                                <img className="census" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/us-story-small.png" />
                                                <div className="userCardContent">
                                                    <h6 className="userCardTitle topSpacing">My grandpa was a moonshine-making prisoner.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sectionMargin">
                                            <hr className="hr-line-mtb10" />
                                            <div className="userCardContent">
                                                <div className="usercontainer">
                                                    <div className="userTitleWrapper">
                                                        <h6 className="userCardTitle">Heidi C.</h6>
                                                        <p className="userCardSubTitle member">Found in U.S. records</p>
                                                    </div>
                                                    <div className="userCardPile">
                                                        <span className="userCardImg userCardPortrait user-card-img-new" title="Person 1 Name, birth-death">
                                                            <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/heidi.png" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btnToggle topSpacing">
                                                <button className="ancBtn see-story-btn full-width" type="button" id="usdis-see-btn-mbl">See story</button>
                                            </div>
                                            <div className="story-wrap-mbl noDisplay memberExpand topSpacing" id="usdis-story-wrap-mbl">
                                                <img className="full-width" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/green-line-mbl.svg" />
                                                <div className="expandHeaderClose">
                                                    <header className="conHeader topSpacing">
                                                        <h2 className="conTitle example-stories-title">
                                                            Heidi’s Story<span className="closeIcon closeIconMbl" id="closeGreen"></span>
                                                        </h2>
                                                    </header>
                                                </div>
                                                <div className="conBody">
                                                    <div className="flex-container">
                                                        <div className="example1-story-img example-leaf-container">
                                                            <div className="leaf-container">
                                                                <img className="circle-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.7/images/story1-img1.svg" /> 
                                                                <img className="example-circle-leaf" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/illustration-leaf.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="example1-story-desc-wrap">
                                                            <p className="bold">One of Heidi’s first leaf hints revealed her great-grandfather was in prison.</p>
                                                            <p className="example1-story-subdesc">This was definitely an intriguing way to start her family history journey with Ancestry—and she was <span className="sub">hooked. But who exactly was this Konstantyn Sobocinski she found in the 1930 census? And how did he end up in the slammer?</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="example-text-split">hooked. But who exactly was this Konstantyn Sobocinski she found in the 1930 census? And how did he end up in the slammer?</div>
                                                    <div>
                                                        <div className="userCardContent example-user-content">
                                                            <h6 className="userCardTitle">1930 U.S. Census Record</h6>
                                                            <p className="userCardSubTitle member">Found in U.S. records</p>
                                                            <div className="story2-mbl-img-wrap-new rel-pos">
                                                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.56/images/us-story-img1.png" className="spacing-bottom-small story2-mbl-img-new" />
                                                            </div>
                                                            <div className="mobile-example-title">The 1930 census had him at the Warrensville Correction Farm.</div>
                                                        </div>
                                                    </div>
                                                    <div className="child2 show320">
                                                        <img className="mt-2 img-fluid-width mob-example-img rounded-sm" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/image85.png" />
                                                    </div>
                                                    <div className="story-examples-two-panel">
                                                        <div className="child1">
                                                            <div className="bold mt-2">Her mother added some color to the story. And it was certainly colorful.</div>
                                                            <p>
                                                                There was family lore that Konstantyn was caught making bootleg moonshine in a bathtub, then <span className="show490">poured it out and ran away as the police came to get him. With those long-forgotten details uncovered, Heidi had an epiphany: the adventurous spirit she had always felt was truly in her bloodline.</span>
                                                            </p>
                                                        </div>
                                                        <div className="child2 hide320">
                                                            <img className="mt-2 img-fluid-width mob-example-img rounded-sm" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/image85.png" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 no-top-margin hide490">poured it out and ran away as the police came to get him. With those long-forgotten details uncovered, Heidi had an epiphany: the adventurous spirit she had always felt was truly in her bloodline.</div>
                                                    <div className="story-examples-two-panel section2">
                                                        <div className="child2">
                                                            <img className="mt-2 img-fluid-width mob-example-img hide320 show480" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story1-crocs-img.png" />
                                                        </div>
                                                        <div className="child1">
                                                            <div className="bold mt-2">Inspired by her discovery, Heidi decided to follow her wild side.</div>
                                                            <p>She quit her office desk job, and headed for the swamps of Florida. Today Heidi dodges alligators and snakes as she leads eco tours a million miles away from the life she used to lead. Her biggest regret now? Not getting to share a drink of moonshine with her great-grandfather.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing flex-container" id="closeBtnContainer">
                                                    <button className="ancBtn close-story-btn-mbl usdis-story-close-mbl" type="button" id="closeBtn">Close</button> 
                                                    <img className="mt-2 img-fluid-width mob-example-img story1-crocs-img show320" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story1-crocs-img.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topSpacing memberExpand blueContainer" id="examples-story2-hero-wrap">
                                        <div className="borderLeft blue">
                                            <div className="borderInner">
                                                <img className="census" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/world-exp-small.png" />
                                                <div className="userCardContent">
                                                    <h6 className="userCardTitle topSpacing">My 2nd great-grandfather was an oil-paint-peddling home decorator.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sectionMargin">
                                            <hr className="hr-line-mtb10" />
                                            <div className="userCardContent">
                                                <div className="usercontainer">
                                                    <div className="userTitleWrapper">
                                                        <h6 className="userCardTitle">
                                                            Ben C.(
                                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.48393 2.58726C8.41074 1.42332 7.33771 1.6071 7.15373 1.63789C7.24556 1.66836 7.33771 3.68994 8.47206 4.76183C9.23847 5.46632 10.8023 5.22128 10.8023 5.22128C10.8023 5.22128 10.5263 3.68994 9.48393 2.58726ZM10.7716 6.50767C10.4343 6.50767 9.05468 6.63019 8.1348 7.7635C7.18426 8.95807 7.21509 9.90744 7.00029 10.1218C7.18426 10.1831 9.11584 10.3669 9.94374 9.11122C10.741 7.94728 10.7716 6.72224 10.7716 6.50767ZM2.37057 5.7114C2.58537 5.74203 3.32111 6.6914 4.6396 6.81392C6.08042 6.96707 6.57119 6.23195 6.60169 6.23195C6.60169 6.14022 5.43667 4.8844 4.14884 4.8844C3.25979 4.8844 2.37057 5.7114 2.37057 5.7114ZM7.61373 6.32403C7.5829 6.35466 6.38722 7.94726 3.56626 7.51844C1.29755 7.15088 0.469658 5.92584 0.316345 5.89521C0.500321 5.65017 2.21727 4.27199 4.21017 4.30245C6.17258 4.36388 7.61373 5.46639 7.61373 5.46639H8.87073C7.85886 5.16009 6.63252 4.60892 6.08043 3.38372C5.58999 2.25041 5.68198 1.57671 5.46734 0.627178C5.46734 0.627178 7.73638 0.443398 9.48398 1.57671C11.0783 2.61797 11.9675 5.37451 11.998 5.46639H12.9792L12.7647 0.565918L13.9909 0.596548C13.7764 1.88285 14.0522 11.0714 13.9909 11.0714C13.8683 11.102 12.826 11.1633 12.7339 10.9182C12.7339 10.9182 12.9792 6.41593 13.0099 6.32403H12.0593C12.0593 6.38529 11.9675 8.92742 10.0357 10.2751C8.10417 11.6227 5.31403 11.2245 5.31403 11.2245C5.65132 10.7038 5.31403 10.1526 6.29523 8.65175C7.42959 6.93664 8.93206 6.32403 8.90139 6.32403H7.61373Z" fill="#94B83E"></path>
                                                            </svg> 
                                                            Employee)
                                                        </h6>
                                                        <p className="userCardSubTitle member-blue">Found in international records</p>
                                                    </div>
                                                    <div className="userCardPile">
                                                        <span className="userCardImg userCardPortrait user-card-img-new">
                                                            <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/ben-c.png" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btnToggle topSpacing noDisplay" id="blueContainerClose">
                                                <button className="ancBtn blue" type="button" id="closeBtn">Close</button>
                                            </div>
                                            <div className="btnToggle topSpacing">
                                                <button className="ancBtn blue see-story-btn" type="button" id="worldex-see-btn-mbl">See story</button>
                                            </div>
                                            <div className="story-wrap-mbl noDisplay memberExpand topSpacing" id="worldex-story-wrap-mbl">
                                                <img className="full-width" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/blue-line-mbl.svg" />
                                                <div className="expandHeaderClose">
                                                    <header className="conHeader topSpacing">
                                                        <h2 className="conTitle example-stories-title">Ben’s Story<span className="closeIcon closeIconMbl" id="closeGreen"></span></h2>
                                                    </header>
                                                </div>
                                                <div className="conBody">
                                                    <div className="flex-container flex-center story2-main-container">
                                                        <div>
                                                            <p>After discovering that both his great-grandparents were deaf from U.S. records, Ben began searching international records to see what else he could find.</p>
                                                            <img className="story2-notes2-img hide320 show480" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes2.png" />
                                                        </div>
                                                        <img className="story2-notes1-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes1.png" />
                                                    </div>
                                                    <div className="story2-main-sign-img">
                                                        <img className="story2-notes2-img show320" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes2.png" />
                                                    </div>
                                                    <p className="hide320 show480 show768">In the 1891 England Census, he learned that his 2nd great-grandfather, Frederick Charles Hobbs, worked as a colorman, or purveyor of oil paints.</p>
                                                    <div className="userCardContent example-user-content">
                                                        <h6 className="userCardTitle">1891 U.K. Census Record</h6>
                                                        <p className="userCardSubTitle member-blue">Found in international records</p>
                                                        <div className="story2-mbl-img-wrap-new rel-pos">
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/320-480-exp2a.png" className="story2-mbl-img-new" />
                                                        </div>
                                                        <div className="mobile-example-title">The 1891 U.K. Census Record showing his grandpa as a “Oil + Colorman”.</div>
                                                    </div>
                                                    <div className="flex-container flex-center">
                                                        <p>As an art and design practitioner himself, Ben began looking at other records for Frederick. He found out that Frederick changed his occupation from colorman to house decorator from the 1901 England Census.</p>
                                                        <img className="story2-pen-sign-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-pen-sign.png" />
                                                    </div>
                                                    <div className="userCardContent example-user-content">
                                                        <h6 className="userCardTitle">1901 U.K. Census Record</h6>
                                                        <p className="userCardSubTitle member-blue">Found in international records</p>
                                                        <div className="story2-mbl-img-wrap-new rel-pos">
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/320-480-exp2b.png" className="story2-mbl-img-new" />
                                                        </div>
                                                        <div className="mobile-example-title">The 1891 U.K. Census Record showing his grandpa as a “Oil + Colorman”.</div>
                                                    </div>
                                                    <div className="flex-container mt-2">
                                                        <p>Using the 1901 England Census and other death records, Ben was also able to find information that connected him to his 3rd and 4th generation grandparents in just a few hours.</p>
                                                        <div>
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-house-group.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing" id="closeBtnContainer">
                                                    <button className="ancBtn blue close-story-btn-mbl" type="button" id="closeBtn">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <hr className="hr-line-mtb10 mlr-2" />
                    </div>
                    <div className="plan-inclusions-container">
                        <div id="plan-inclusion">
                            <div className="plan-inclusions mt-0">
                                <header className="conHeader plan-inc-head">
                                    <h1 className="conTitle planTitle inclusions-title">Included in All Plans</h1>
                                    <button type="button" className="link iconAfter iconArrowDownAfter textlrg btn-pointer iconArrowUpAfter showall-btn showall-plan-inc hide show-md-up" aria-expanded="false" aria-controls="faqAnswer1" id="toggle-plan-inclusions">
                                        <span id="toggle-plan-inclusions-txt" className="mr-1 textlrg toggle-plan-inclusions-txt">Show All</span>
                                    </button>
                                </header>
                                <div className="features-wrapper-new">
                                    <div className="hide show-md-up">
                                        <div className="feature-wrap-new flex-container">
                                            <img className="feature-img-new mobile-support-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/phone1.png" />
                                            <div className="feature-description-new">
                                                <p className="feature-title-new">Support</p>
                                                <strong className="textlrg bamboo4">Need help?</strong>
                                                <span className="bamboo4 help-contact">1-800-ANCESTRY</span>
                                                <br /><span className="support-timings-txt">7 days a week, 9am–11pm ET</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden-md-up" id="plan-inclusions-new">
                                        <div className="feature-wrap-new anc-hints flex-container">
                                            <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/Leaf Solid.png" />
                                            <div className="feature-description-new">
                                                <p className="feature-title-new">Ancestry Hints®</p>
                                                <p className="feature-subtitle-new">Where we do the searching for you to expand your family tree.</p>
                                            </div>
                                        </div>
                                        <div className="feature-wrap-new anc-hints flex-container">
                                            <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/iconTree.png" />
                                            <div className="feature-description-new">
                                                <p className="feature-title-new">Family Tree Building Tools</p>
                                                <p className="feature-subtitle-new">See how you're related to family members across generations.</p>
                                            </div>
                                        </div>
                                        <div className="feature-wrap-new anc-hints flex-container">
                                            <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/tree_plus.png" />
                                            <div className="feature-description-new">
                                                <p className="feature-title-new">Family Tree Sharing</p>
                                                <p className="feature-subtitle-new">Invite other family and friends to view or edit your tree.</p>
                                            </div>
                                        </div>
                                        <div className="feature-wrap-new anc-hints flex-container">
                                            <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/pictures.png" />
                                            <div className="feature-description-new">
                                                <p className="feature-title-new">Family Media Upload</p>
                                                <p className="feature-subtitle-new">Save and preserve family records, stories, and photos to your account.</p>
                                            </div>
                                        </div>
                                        <div className="feature-wrap-new anc-hints flex-container">
                                            <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/people_man_comment.png" />
                                            <div className="feature-description-new">
                                                <p className="feature-title-new">Ancestry Member Community</p>
                                                <p className="feature-subtitle-new">Connect with millions of other Ancestry© members to ask for help, share ideas, and make discoveries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line mt-0 mb-4 hr-gradient-line hide show-md-up mlr-0 mlr-8" />
                        <section className="how-does-ancestry-work flex-container hide480 mlr-8" id="how-does-work">
                            <div className="hdaw-flex-item">
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/illustration-leaf.svg" className="ancestry-leaf" />
                            </div>
                            <div className="hdaw-flex-item hdaw-content">
                                <p className="title">How does Ancestry® work?</p>
                                <p className="subtitle">Find out in this 54-second video.</p>
                                <button type="button" id="watch-now-new" className="watch-now-btn-new">
                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/youtube.png" className="youtube-img-new" />
                                    <span className="bold">Watch now</span>
                                </button>
                            </div>
                            <div className="hdaw-flex-item">
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.5/images/how-ancestry.png" className="how-tree-ancestry-img" />
                            </div>
                        </section>
                        <div className="ancGrid ancGridEqual full480 exampleWrapper hide480 mlr-8 examples-outer-wrap-desk" id="examples-story">
                            <hr className="hr-line-mtb10 mlr-0" id="examples-head-md-up" />
                            <section className="con example-content">
                                <header className="conHeader">
                                    <h2 className="conTitle examples-head">Examples of what you could find:</h2>
                                </header>
                                <div className="conBody">
                                    <div className="ancGrid">
                                        <div className="ancCol w33">
                                            <div className="topSpacing">
                                                <div className="borderLeft rel-pos example-pos">
                                                    <div className="borderInner example-hero-wrap">
                                                        <img className="census example-hero-img rounded-2" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/us-story-small.png" />
                                                        <div className="userCardContent">
                                                            <h6 className="userCardTitle topSpacing">My grandpa was a moonshine-making prisoner.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sectionMargin">
                                                    <hr className="hr-line-mtb10" />
                                                    <div className="userCardContent">
                                                        <div className="usercontainer">
                                                            <div className="userTitleWrapper">
                                                                <h6 className="userCardTitle">Heidi C.</h6>
                                                                <p className="userCardSubTitle usercard-subtitle-new">
                                                                    <span className="user-subtitle-dot">
                                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="4.5" cy="5.39722" r="4.5" fill="#6BA410"></circle>
                                                                        </svg>
                                                                    </span>
                                                                    Found in U.S. records
                                                                </p>
                                                            </div>
                                                            <div className="userCardPile">
                                                                <span className="userCardImg userCardPortrait user-card-img-new" title="Person 1 Name, birth-death">
                                                                    <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/heidi.png" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btnToggle topSpacing">
                                                        <button className="ancBtn see-story-btn full-width" type="button" id="usdis-see-btn">See story</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ancCol w33">
                                            <div className="topSpacing memberExpand blueContainer" id="blueContainer">
                                                <div className="borderLeft worldex rel-pos example-pos">
                                                    <div className="borderInner example-hero-wrap">
                                                        <img className="census example-hero-img rounded-2" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/world-exp-small.png" />
                                                        <div className="userCardContent">
                                                            <h6 className="userCardTitle topSpacing">My 2nd great-grandfather was an oil-paint-peddling home decorator.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sectionMargin">
                                                    <hr className="hr-line-mtb10" />
                                                    <div className="userCardContent">
                                                        <div className="usercontainer">
                                                            <div className="userTitleWrapper">
                                                                <h6 className="userCardTitle">
                                                                    Ben C.(
                                                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.48393 2.58726C8.41074 1.42332 7.33771 1.6071 7.15373 1.63789C7.24556 1.66836 7.33771 3.68994 8.47206 4.76183C9.23847 5.46632 10.8023 5.22128 10.8023 5.22128C10.8023 5.22128 10.5263 3.68994 9.48393 2.58726ZM10.7716 6.50767C10.4343 6.50767 9.05468 6.63019 8.1348 7.7635C7.18426 8.95807 7.21509 9.90744 7.00029 10.1218C7.18426 10.1831 9.11584 10.3669 9.94374 9.11122C10.741 7.94728 10.7716 6.72224 10.7716 6.50767ZM2.37057 5.7114C2.58537 5.74203 3.32111 6.6914 4.6396 6.81392C6.08042 6.96707 6.57119 6.23195 6.60169 6.23195C6.60169 6.14022 5.43667 4.8844 4.14884 4.8844C3.25979 4.8844 2.37057 5.7114 2.37057 5.7114ZM7.61373 6.32403C7.5829 6.35466 6.38722 7.94726 3.56626 7.51844C1.29755 7.15088 0.469658 5.92584 0.316345 5.89521C0.500321 5.65017 2.21727 4.27199 4.21017 4.30245C6.17258 4.36388 7.61373 5.46639 7.61373 5.46639H8.87073C7.85886 5.16009 6.63252 4.60892 6.08043 3.38372C5.58999 2.25041 5.68198 1.57671 5.46734 0.627178C5.46734 0.627178 7.73638 0.443398 9.48398 1.57671C11.0783 2.61797 11.9675 5.37451 11.998 5.46639H12.9792L12.7647 0.565918L13.9909 0.596548C13.7764 1.88285 14.0522 11.0714 13.9909 11.0714C13.8683 11.102 12.826 11.1633 12.7339 10.9182C12.7339 10.9182 12.9792 6.41593 13.0099 6.32403H12.0593C12.0593 6.38529 11.9675 8.92742 10.0357 10.2751C8.10417 11.6227 5.31403 11.2245 5.31403 11.2245C5.65132 10.7038 5.31403 10.1526 6.29523 8.65175C7.42959 6.93664 8.93206 6.32403 8.90139 6.32403H7.61373Z" fill="#94B83E"></path>
                                                                    </svg> 
                                                                    Employee)
                                                                </h6>
                                                                <p className="userCardSubTitle usercard-subtitle-new">
                                                                    <span className="user-subtitle-dot">
                                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="4.5" cy="5.39722" r="4.5" fill="#0079A3"></circle>
                                                                        </svg>
                                                                    </span>Found in international records
                                                                </p>
                                                            </div>
                                                            <div className="userCardPile">
                                                                <span className="userCardImg userCardPortrait user-card-img-new">
                                                                    <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/ben-c.png" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btnToggle topSpacing">
                                                        <button className="ancBtn blue see-story-btn full-width" type="button" id="worldex-see-btn">See story</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ancCol w33">
                                            <div className="topSpacing memberExpand blueContainer" id="blueContainer">
                                                <div className="borderLeft allacc rel-pos example-pos">
                                                    <div className="borderInner example-hero-wrap">
                                                        <img className="example-hero-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/example3-hero-img.png" />
                                                        <div className="userCardContent">
                                                            <h6 className="userCardTitle topSpacing">Discovering the African American heroes in my family tree.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sectionMargin">
                                                    <hr className="hr-line-mtb10" />
                                                    <div className="userCardContent">
                                                        <div className="usercontainer">
                                                            <div className="userTitleWrapper">
                                                                <h6 className="userCardTitle">Michelle M.</h6>
                                                                <p className="userCardSubTitle usercard-subtitle-new">
                                                                    <span className="user-subtitle-dot">
                                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="4.5" cy="5.39722" r="4.5" fill="#61527E"></circle>
                                                                        </svg>
                                                                    </span>
                                                                    <span>Found on Fold3.com and <span className="story3-examples-caption">Newspapers.com</span></span>
                                                                </p>
                                                            </div>
                                                            <div className="userCardPile">
                                                                <span className="userCardImg userCardPortrait user-card-img-new">
                                                                    <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/michelle.png" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btnToggle topSpacing">
                                                        <button className="ancBtn allaccess-btn-bgcolor see-story-btn full-width" type="button" id="allAccSeeBtn">See story</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="story-wrap noDisplay memberExpand mt-2 usdis-story-wrap-desk" id="usdis-story-wrap">
                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/green-line-desk.svg" className="full-width" />
                                    <div className="expandHeaderClose rel-pos">
                                        <header className="conHeader topSpacing rel-pos">
                                            <h2 className="conTitle example-stories-title">Heidi’s Story</h2>
                                        </header>
                                        <button className="closeBtn link alertCloseBtn" type="button" aria-label="Close alert"></button>
                                    </div>
                                    <div className="conBody">
                                        <div className="flex-container">
                                            <div className="example1-story-img">
                                                <div className="person-leaf-wrapper">
                                                    <img className="circle-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.7/images/story1-img1.svg" /> 
                                                    <img className="example-circle-leaf" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/illustration-leaf.svg" />
                                                </div>
                                            </div>
                                            <div className="example1-story-desc-wrap">
                                                <p className="bold">One of Heidi’s first leaf hints revealed her great-grandfather was in prison.</p>
                                                <p className="example1-story-subdesc">This was definitely an intriguing way to start her family history journey with Ancestry—and she was hooked. But who exactly was this Konstantyn Sobocinski she found in the 1930 census? And how did he end up in the slammer?</p>
                                                <div className="userCardContent example-user-content">
                                                    <h6 className="userCardTitle">1930 U.S. Census Record</h6>
                                                    <p className="userCardSubTitle member">Found in U.S. records</p>
                                                </div>
                                                <div className="story1-sign-768-wrap rel-pos">
                                                    <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/story-sign-768.png" />
                                                </div>
                                                <div className="mobile-example-title">The 1930 census had him at the Warrensville Correction Farm.</div>
                                            </div>
                                        </div>
                                        <div className="flex-container mt-6 story1-bot-sec-wrap">
                                            <div className="example1-story-img1 pr-6 rel-pos">
                                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story1-img2-desk.png" />
                                            </div>
                                            <div className="example1-story-desc-wrap">
                                                <p className="bold">Her mother added some color to the story. And it was certainly colorful.</p>
                                                <p className="example1-story-subdesc">There was family lore that Konstantyn was caught making bootleg moonshine in a bathtub, then poured it out and ran away as the police came to get him. With those long-forgotten details uncovered, Heidi had an epiphany: the adventurous spirit she had always felt was truly in her bloodline.</p>
                                                <p className="bold">Inspired by her discovery, Heidi decided to follow her wild side.</p>
                                                <p className="example1-story-subdesc">She quit her office desk job, and headed for the swamps of Florida. Today Heidi dodges alligators and snakes as she leads eco tours a million miles away from the life she used to lead. Her biggest regret now? Not getting to share a drink of moonshine with her great-grandfather.</p>
                                            </div>
                                        </div>
                                        <div className="btnToggle topSpacing textCenter storyCloseBtnContainer center-btn" id="allacc-story-closebtn">
                                            <button className="ancBtn stories-close-btn" type="button" id="closeBtn">Close</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="story-wrap noDisplay memberExpand mt-2" id="worldex-story-wrap">
                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/blue-line-desk.svg" className="full-width" />
                                    <div className="expandHeaderClose rel-pos">
                                        <header className="conHeader topSpacing rel-pos">
                                            <h2 className="conTitle example-stories-title">Ben’s Story</h2>
                                        </header>
                                        <button className="closeBtn link alertCloseBtn" type="button" aria-label="Close alert"></button>
                                    </div>
                                    <div className="conBody">
                                        <div className="flex-container">
                                            <div className="example2-story-sec1-img rel-pos">
                                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes1.svg" className="story2-notes-img" />
                                            </div>
                                            <div className="example2-story-sec1">
                                                <p>After making multiple discoveries with U.S. records alone—including the discovery that both of his great-grandparents were deaf—Ben began searching international records.</p>
                                                <p>In the 1891 England Census, he learned that his 2nd great-grandfather, Frederick Charles Hobbs, worked as a colorman, or purveyor of oil paints.</p>
                                                <div className="userCardContent example-user-content">
                                                    <h6 className="userCardTitle">1891 U.K. Census Record</h6>
                                                    <p className="userCardSubTitle member-blue">Found in international records</p>
                                                </div>
                                                <div className="story1-sign-768-wrap rel-pos">
                                                    <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/story2-sign-768.png" />
                                                </div>
                                                <div className="mobile-example-title">The 1891 U.K. Census Record showing his grandpa as a “Oil + Colorman”.</div>
                                                <p>As an art and design practitioner himself, Ben began looking at other records for Frederick. He found out that Frederick changed his occupation from colorman to house decorator from the 1901 England Census.</p>
                                                <div className="userCardContent example-user-content">
                                                    <h6 className="userCardTitle">1901 U.K. Census Record</h6>
                                                    <p className="userCardSubTitle member-blue">Found in international records</p>
                                                </div>
                                                <div className="story1-sign-768-wrap rel-pos">
                                                    <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/story2-sign-1-768.png" />
                                                </div>
                                                <div className="mobile-example-title">The 1901 U.K. Census Record showing his grandpa as a “House Decorator”.</div>
                                                <div className="example2-story-testimonial-container">
                                                    <div>
                                                        <p>Using the 1901 England Census and other death records, Ben was also able to find information that connected him to his 3rd and 4th generation grandparents in just a few hours.</p>
                                                    </div>
                                                    <div className="example2-story-sec2-img">
                                                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-pen-sign.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btnToggle topSpacing textCenter storyCloseBtnContainer center-btn" id="closeBtnContainer">
                                            <button className="ancBtn stories-close-btn blue" type="button" id="closeBtn">Close</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="story-wrap noDisplay memberExpand mt-2" id="allacc-story-wrap">
                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/violet-line-desk.svg" className="full-width" />
                                    <div className="expandHeaderClose rel-pos">
                                        <header className="conHeader topSpacing rel-pos">
                                            <h2 className="conTitle example-stories-title">Michelle’s Story</h2>
                                        </header>
                                        <button className="closeBtn link alertCloseBtn" type="button" aria-label="Close alert"></button>
                                    </div>
                                    <div className="conBody">
                                        <div className="flex-container flex-center mb-4 story3-person-container">
                                            <div className="example3-story-sec1">
                                                <p>I was a sophomore in college when a friend of mine made a discovery about my family history that was so powerful it led me to a lifelong passion for my family history.</p>
                                                <p>My great-grandfather was born into slavery.</p>
                                                <p className="example3-para">The document that really got me intrigued, that I credit with bringing my family history to life for me, is this 1920 census record.</p>
                                            </div>
                                            <div className="example3-story-sec1-img">
                                                <div>
                                                    <figure>
                                                        <img className="story3-person" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story3-person-desk.png" />
                                                        <figcaption className="figcaption">Rev. Peter Vaughters, my great-grandfather</figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="story3-census-container">
                                            <div className="userCardContent example-user-content">
                                                <h6 className="userCardTitle">1920 U.S. Census Record</h6>
                                                <p className="userCardSubTitle member">Found in U.S. records</p>
                                            </div>
                                            <div className="story1-sign-768-wrap rel-pos">
                                                <img className="story3-sign-768-1 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.29/images/story3-sign-768-1.png" />
                                            </div>
                                            <div className="mobile-example-title">This 1920 census record brought my family history to life. According to the 1920 census, Peter Vaughters would have been born in 1852.</div>
                                        </div>
                                        <div className="flex-container flex-center topMargin">
                                            <div className="example3-story-sec2">
                                                <p>This record brought my family history to life. I remember we gathered together as a family to pour over the details in it. My sisters and I sprawled out on the floor of the living room while my mother and grandmother sat close by.</p>
                                                <p>We tried to look at everything. Who could read and write? Who owned land and what did everyone do for a living? According to this document my grandmother’s father Peter Vaughters would have been born in 1852. Remembering the Civil War wasn’t over until 1865, I pressed forward. “Mommom, was your dad born a slave?”, I asked. She sunk into her seat a little bit, and softly said yes.</p>
                                            </div>
                                            <div className="example3-story-sec2-img">
                                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.15/images/story3-person2-group.png" />
                                                <div className="story3-person-desc">Me and my Grandmother Estella, or “Mommom,” as we called her.</div>
                                            </div>
                                        </div>
                                        <div className="article-container">
                                            <div className="left-wrapper">
                                                <div className="userCardContent example-user-content">
                                                    <h6 className="userCardTitle">1951 Newspaper Article</h6>
                                                    <div className="story3-newspaper-wrapper">
                                                        <p className="userCardSubTitle member-purple">Found on</p>
                                                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/newpapers.svg" className="top-spacing-none" />
                                                    </div>
                                                </div>
                                                <div className="story1-sign-768-wrap rel-pos">
                                                    <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.38/images/768+-np-AA.png" />
                                                    <div className="mobile-example-title">This news story about Samuel Rothwell—the son of Issac Rothwell—mentions that his father served in the Civil War.</div>
                                                </div>
                                            </div>
                                            <div className="right-wrapper mt-6">
                                                <p>With her confirmation that her dad was born into slavery, I had a whirlwind of new questions. Who owned him? How did he survive? What was his life like?</p>
                                                <p>But being born a slave turned out to be just one of many of the surprises in Peter’s life. A few of the most extraordinary things I discovered about him were:</p>
                                                <ul className="para-list mt-2">
                                                    <li>He started a school. And my grandmother attended it. Discovering that was a mind-blowing moment.</li>
                                                    <li>He ended up owning 90 acres of land in Georgia.</li>
                                                    <li>He was a widower who married 3 times–and had 21 children.</li>
                                                </ul>
                                                <p>The 1920 census record was the tip that started our journey towards finding all of my grandmother’s siblings on paper.</p>
                                                <p>I also have another perspective of the war from my father’s side of my family tree. It started with a shaky leaf hint from Ancestry on my family tree that indicated I might have a Civil War vet in the family. The hint was a Civil War muster roll. I eventually found a <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/newpapers.svg" className="top-spacing-none img-as-text align-middle" /> article from 1951 that mentioned that my 3rd great grandfather—Isaac Rothwell—was a Civil War veteran. He served in the same regiment as his two brothers, Alfred and Samuel Rothwell.</p>
                                                <p>On <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/fold.svg" className="top-spacing-none img-as-text" />, I was able to locate Isaac’s pension file—something that was necessary for me to have in order to request files at the National Archives.</p>
                                                <p>Their character, strength and faith have been passed down to our current generations and we are grateful for it.</p>
                                                <div className="userCardContent example-user-content">
                                                    <h6 className="userCardTitle">Civil War Soldiers • Union • Colored Troops 2nd-7th Infantry</h6>
                                                    <div className="story3-persions">
                                                        <p className="userCardSubTitle member-purple">Found on</p>
                                                        <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/fold.svg" className="top-spacing-none" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story1-sign-768-wrap rel-pos">
                                                        <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.54/images/story3-form.png" />
                                                    </div>
                                                    <div className="mobile-example-title">Compiled military service records of volunteer Union soldiers who served with the United States Colored Troops, 2nd through 7th Colored Infantry, 1861-65.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btnToggle topSpacing textCenter storyCloseBtnContainer center-btn" id="allAccStoryCloseBtn">
                                            <button className="ancBtn stories-close-btn allaccess-btn-bgcolor" type="button" id="closeBtn">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="privacy-container mb-6 over-the-top m10" id="privacy">
                            <div className="privacy-head-wrapper">
                                <h1 className="conTitle feature-title flex-container flex-center">
                                    <img className="lock-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/lock.png" />
                                    Privacy
                                </h1>
                                <a href="https://www.ancestry.com/cs/legal/privacystatement">View Privacy Statement</a>
                            </div>
                            <p>Your privacy is important to us. You control who sees the information in your family tree. Living people are always hidden by default.</p>
                        </div>
                        <div id="faq" className="m10 mb-4">
                            <hr className="hr-line-mtb10" />
                            <section id="faqSection" className="faq-section">
                                <div className="expand-container faq-title-wrap pad-spacing-top-none spacing-bottom-md">
                                    <h3 className="text4xlrg bold faq-title">Frequently Asked Questions</h3>
                                    <button type="button" className="link iconAfter iconArrowDownAfter textlrg btn-pointer iconArrowUpAfter expandall-btn" aria-expanded="false" aria-controls="faqAnswer1" id="main-accordion-btn">
                                        <span id="accordion-txt" className="mr-1 anchor-color">Show All</span>
                                    </button>
                                </div>
                                <ul className="faqCon" id="faqCon">
                                    <li className="mb-2 rel-pos expand-wrapper">
                                        <div className="faq-item-wrap expand-container rel-pos" id="privacy-faq-head-wrap">
                                            <p className="faq-question-head">Privacy</p>
                                            <button type="button" className="link iconAfter iconArrowDownAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1" id="privacy-accordion-btn"></button>
                                        </div>
                                        <div className="faq-wrap rel-pos hide privacy-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">What do you do with my personal information?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">Personal information is information that can identify you, such as your name, email or street address, or it may be information that could reasonably be linked back to you, including your Genetic Information. At Ancestry, your privacy is a top priority. We use your personal information to provide, personalize, improve, update and expand our services. Please review our <a href="https://www.ancestry.com/cs/privacyphilosophy">privacy center</a>, or our <a href="https://www.ancestry.com/cs/legal/privacystatement">privacy statement</a> for more information.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide privacy-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">What personal information do I need to give you in order for you to find my ancestors?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">We can give you some potential information about family members—or Ancestry Hints®—but you will need to explore and verify these in order to learn more about their stories and discover new relatives. Since the number of family members you have to learn about each generation doubles, finding information for all of them isn't a one-and-done experience. Also, Ancestry adds an average of 2 million records to their collections every day—so there is always more to learn and discover.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-4 rel-pos">
                                        <div className="faq-item-wrap expand-container rel-pos" id="membership-faq-head-wrap">
                                            <p className="faq-question-head">Membership</p>
                                            <button type="button" className="link iconAfter iconArrowDownAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer2" id="membership-accordion-btn"></button>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">Why would I need a monthly membership—can’t you tell me everything about my family upfront?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">We can give you some potential information about family members—or Ancestry Hints®—but you will need to explore and verify these in order to learn more about their stories and discover new relatives. Since the number of family members you have to learn about each generation doubles, finding information for all of them isn't a one-and-done experience. Also, Ancestry adds an average of 2 million records to their collections every day—so there is always more to learn and discover.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">Which subscription is right for me?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">You have three membership options to choose from depending on your needs: U.S. Discovery gives you access all U.S. records on Ancestry; World Explorer gives you access all U.S. and international records on Ancestry; All Access gives you membership to Ancestry, Newspapers.com Basic‡, and Fold3.com (military records). </span><span className="paddingSpan grey-color" itemProp="text">‡Other subscriptions to Newspapers.com may be available, but not included in the All Access package.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">How long will it take to begin making discoveries?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">The more information you provide to Ancestry about your family, the faster Ancestry can typically help you make discoveries. Usually it only takes a few minutes to begin making discoveries. You keep making discoveries as you search records for more information about your family.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">Why is this so expensive? Can’t I find the same historical family information on Google?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">Through negotiations directly with governments, municipal, and private record holders, Ancestry has the largest online collection of family history records, including many records that cannot be found elsewhere.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">What happens if I cancel?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">If you cancel your membership, you won't be able to view most record images or transcriptions (including those already attached to your tree). You also won't be able to initiate new messages via the Message Center. However, there are some features that will still be available to you. For more information, check out <a href="https://support.ancestry.com/s/article/Accounts-after-Cancellation">Ancestry Accounts after Cancellation.</a></span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">Are DNA kits included with a subscription?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">DNA kits are not included with a subscription. Each must be purchased separately.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide membership-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">I’m adopted—or don’t know who my parents are—does Ancestry have anything for me?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">
                                                            Ancestry has many records collections that can help customers involved in adoptions make discoveries. For example, you can try searching for adoption records in the Birth, Marriage &amp; Death index or searching for orphanage records in the Census &amp; Voter Lists index.
                                                            <br />You can also take an Ancestry DNA test. If anyone you’re looking for has also taken the test, you’ll appear on each other’s lists of DNA matches. And even if you don’t match with close family members, more distant matches may have information that could help you make discoveries.
                                                        </span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-4 rel-pos">
                                        <div className="faq-item-wrap expand-container rel-pos" id="records-faq-head-wrap">
                                            <p className="faq-question-head">Records</p>
                                            <button type="button" className="link iconAfter iconArrowDownAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer2" id="records-accordion-btn"></button>
                                        </div>
                                        <div className="faq-wrap rel-pos hide records-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">Where does Ancestry get its family history information?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">Ancestry gathers records directly from a variety of sources including governments, municipal, and private record holders. Many Ancestry members also upload and make their information publicly available—including photos, stories, and other documents.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide records-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">How many subscribers already use Ancestry? How many family trees have been built on Ancestry?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">Ancestry has more than three million subscribers across its core Ancestry websites. To date, our customers have built over 110 million family trees.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide records-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">How do I access historical records, and where do I save what I find?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">From any page on Ancestry, click the Search tab and select All Collections. To search a specific type of record, select that record type instead. To search with extra facts, click the Show more options link. To limit your search results to an exact name or date, select exact under a field. If you find a record you want to keep, simply click the Save button to attach it to your tree.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq-wrap rel-pos hide records-faq-wrap">
                                            <div className="faq-inner">
                                                <div className="faq-ques-wrap rel-pos">
                                                    <p className="faq-question1">How often do you get new historical information—and how much?</p>
                                                    <button type="button" className="faQuestion link iconAfter iconArrowDownAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Expand</span>
                                                    </button>
                                                </div>
                                                <div className="faq-ans-wrap hide">
                                                    <p id="faqAnswer1">
                                                        <span className="paddingSpan" itemProp="text">Ancestry adds an average of 2 million records per day (from around the world) to its record collections.</span>
                                                    </p>
                                                    <button type="button" className="faQuestion collapse-ans link iconAfter iconArrowUpAfter" aria-expanded="false" aria-controls="faqAnswer1">
                                                        <span className="anchor-color">Collapse</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="seperate-products mb-6" id="separates">
                            <hr className="hr-line-mtb10" />
                            <h1 className="conTitle feature-title">Separate Products</h1>
                            <div className="products-wrapper">
                                <a className="logo-dna-wrap-new" href="https://www.ancestry.com/dna/">
                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.40/images/logo-dna.png" className="logo-dna-new" />
                                </a>
                                <a className="logo-health-wrap-new" href="https://www.ancestry.com/health">
                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.40/images/logo-health.png" className="logo-health-new" />
                                </a>
                            </div>
                        </div>
                        <hr className="hr-line-mtb10 mlr-2" />
                        <div id="feedback" className="over-the-top">
                            <div className="feedback mb-6">
                                <h1 className="conTitle feature-title">Feedback</h1>
                                <p>Please let us know if you have any <a href="https://ancestry.az1.qualtrics.com/jfe/form/SV_bPMuBO4OJgA3adL" target="_blank">feedback</a> about membership plans or this page.</p>
                            </div>
                        </div>
                        <div className="disclaimer-wrap over-the-top" id="disclaimer">
                            <hr className="hr-line-mtb10" />
                            <h1 className="conTitle feature-title">Disclaimer</h1>
                            <p>
                                *One free trial per user. Free trial requires registration with a valid credit card or debit card. You will be charged on expiry of the free trial, unless you cancel before the end of the free trial by visiting the My Account section or by <a href="https://support.ancestry.com/s/article/Canceling-a-Subscription" target="_blank">contacting us</a>. Your selected membership will automatically renew at the end of each billing period and your payment method will be charged the then applicable rate, unless you cancel before your renewal date. See our <a href="https://www.ancestry.com/cs/legal/renewal-cancellation-terms" target="_blank">Renewal and Cancellation Terms</a> for further details.
                            </p>
                            <p>
                                <span className="bamboo3">**</span> Saves you $50 when selecting <a onClick={this.emptyFunction}>6 months</a> versus monthly.
                            </p>
                            <p>
                                <span className="Wave3">***</span> Saves you $90 when selecting <a onClick={this.emptyFunction}>6 months</a> versus monthly.
                            </p>
                            <p>
                                <span className="allaccess-color">§</span> Saves you $100 when selecting <a onClick={this.emptyFunction}>6 months</a> versus monthly.
                            </p>
                            <p className="show480">
                                ‡ Other subscriptions to Newspapers.com™ may be available but are not included in the All Access package.
                            </p>
                        </div>
                        <div className="back-to-top-wrapper flex-container flex-center-new" id="back-to-top">
                            <button type="button" id="back-to-top" className="back-to-top-btn flex-container flex-center-new" onClick={this.emptyFunction}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3125 6.6875C11.6484 5.01562 8.32031 1.67187 6.65625 -2.90954e-07C4.99219 1.67187 1.66406 5.01562 -4.07062e-07 6.6875C1.05859 6.6875 3.17578 6.6875 4.23437 6.6875C4.23437 9.01562 4.23437 13.6719 4.23438 16C5.44531 16 7.86719 16 9.07812 16C9.07812 13.6719 9.07812 9.01562 9.07812 6.6875C10.1367 6.6875 12.2539 6.6875 13.3125 6.6875Z" fill="white"></path>
                                </svg>
                                <span className="back-to-top-txt">Back to top</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        assets: state.assets
    }
};

export default connect(mapStateToProps)(SparklyDragon);