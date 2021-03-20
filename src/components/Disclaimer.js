import React from 'react';
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//     return {
//         pageSettings: state.pageSettings,
//         variables: state.variables,
//         subscriptions: state.subscriptions
//     }
// };

export const disclaimerSups = {
    freetrial: <sup className="disclaimerSup">†</sup>, // Free Trial 
    save: <span>*</span>, // Attached to any "savings" type messaging
    newsandf3: <sup className="disclaimerSup">‡</sup>, // Newspapers & Fold3 clarification for All Access
    ldbm: <sup className="disclaimerSup">§</sup> // Long-Duration Billed Monthly
}

// const DisclaimerFooter = connect(mapStateToProps)((props) => {

//     return (
//         <form action="/checkout/mli?"  className="bonsai-container dnSignupForm" id="signupForm">
//             <input type="hidden" name="direct" value="1" />
//             <input type="hidden" name="rtype" value="14" />
//             <input type="hidden" name="quantities" value="1" />
//             <input type="hidden" name="flow" value="3" />
//             <div id="mainWrap">
//                 <section id="offerGrid">
//                     <div className="ancGrid priceGrid">
//                         <div className="ancCol ancColRow full480 w75 priceTableCon">
//                             <table className="ancGrid ancGridNoGutters priceTable">
//                                 <tbody>
//                                     <tr className="hide320">
//                                         <th className="ancCol1 hide320 w40" scope="col">&nbsp;</th>
//                                         <th className="ancCol1 hide320 w30" scope="col">
//                                             <span className="bold colHeading textlrg" id="monthly">Monthly <br /> membership</span>
//                                         </th>
//                                         <th className="ancCol1 bestCol hide320 w30" scope="col">
//                                             <span className="bold colHeading textlrg" id="sixMonth">6-month <br /> membership</span>
//                                         </th>
//                                     </tr>
//                                     <tr className="usRow">
//                                         <th className="ancCol1 ancCol1Row colWrap full320 packageCol usDiscRow w40" scope="row">
//                                             <div className="logo"></div>
//                                             <h2 className="bold text3xlrg" id="usDiscovery">U.S. Discovery</h2>
//                                             <p className="textlrg">Access all U.S. records on Ancestry</p>
//                                         </th>
//                                         <td className="ancCol1 colWrap half320 monthCol usDiscRow w30">
//                                             <div className="priceLabel">
//                                                 <label for="usDiscMonthly">
//                                                     <h3 className="bold show320 textlrg">Monthly membership</h3>
//                                                     <input defaultChecked="checked" type="radio" name="offers" value="O-25401" id="usDiscMonthly" aria-labelledby="usDiscovery monthly" />
//                                                     <span className="bold greenTxt text4xlrg">$24.99</span>
//                                                     <p>after free trial</p>
//                                                 </label>
//                                             </div>
//                                         </td>
//                                         <td className="ancCol1 bestCol colWrap half320 usDiscRow w30">
//                                             <div className="priceLabel">
//                                                 <label for="usDiscSixMonth">
//                                                     <h3 className="bold show320 textlrg">6-month membership</h3>
//                                                     <p className="bold redTxt coloralt2 textxlrg">SAVE $50*</p>
//                                                     <input type="radio" name="offers" value="O-23590" id="usDiscSixMonth" aria-labelledby="usDiscovery sixMonth" />
//                                                     <span className="bold greenTxt text4xlrg">$99</span>
//                                                     <p>after free trial</p>
//                                                 </label>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                     <tr className="weRow">
//                                         <th className="ancCol1 ancCol1Row colWrap full320 packageCol worldRow w40" scope="row">
//                                             <div className="logo"></div>
//                                             <h2 className="bold text3xlrg" id="worldExplorer">World Explorer</h2>
//                                             <p className="textlrg">Access all U.S. &amp; international records on Ancestry</p>
//                                         </th>
//                                         <td className="ancCol1 colWrap half320 monthCol worldRow w30">
//                                             <div className="priceLabel">
//                                                 <label for="worldExMonthly">
//                                                     <h3 className="bold show320 textlrg">Monthly membership</h3>
//                                                     <input type="radio" name="offers" value="O-25405" id="worldExMonthly" aria-labelledby="worldExplorer monthly" />
//                                                     <span className="bold greenTxt text4xlrg">$39.99</span>
//                                                     <p>after free trial</p>
//                                                 </label>
//                                             </div>
//                                         </td>
//                                         <td className="ancCol1 bestCol colWrap half320 worldRow w30">
//                                             <div className="priceLabel">
//                                                 <label for="worldExSixMonth">
//                                                     <h3 className="bold show320 textlrg">6-month membership</h3>
//                                                     <p className="bold redTxt coloralt2 textxlrg">SAVE $90*</p>
//                                                     <input type="radio" name="offers" value="O-22056" id="worldExSixMonth" aria-labelledby="worldExplorer sixMonth" />
//                                                     <span className="bold greenTxt text4xlrg">$149</span>
//                                                     <p>after free trial</p>
//                                                 </label>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                     <tr className="aaRow">
//                                         <th className="ancCol1 ancCol1Row colWrap full320 packageCol worldPlusRow w40" scope="row">
//                                             <div className="logo"></div>
//                                             <h2 className="bold text3xlrg" id="allAccess">All Access</h2>
//                                             <p className="textxlrg">
//                                                 Get full membership to:
//                                             </p>
//                                             <ul>
//                                                 <li>Ancestry</li>
//                                                 <li>Newspapers.com Basic<sup>‡</sup></li>
//                                                 <li>Fold3.com</li>
//                                             </ul>
//                                         </th>
//                                         <td className="ancCol1 colWrap half320 monthCol worldPlusRow w30">
//                                             <div className="priceLabel">
//                                                 <label for="worldPlusMonthly">
//                                                     <h3 className="bold show320 textlrg">Monthly membership</h3>
//                                                     <input type="radio" name="offers" value="O-25410" id="worldPlusMonthly" aria-labelledby="allAccess monthly" />
//                                                     <span className="bold greenTxt text4xlrg">$49.99</span>
//                                                     <p>after free trial</p>
//                                                 </label>
//                                             </div>
//                                         </td>
//                                         <td className="ancCol1 bestCol colWrap half320 worldPlusRow w30">
//                                             <div className="priceLabel">
//                                                 <label for="worldPlusSixMonth">
//                                                     <h3 className="bold show320 textlrg">6-month membership</h3>
//                                                     <p className="bold redTxt coloralt2 textxlrg">SAVE $100*</p>
//                                                     <input type="radio" name="offers" value="O-24567" id="worldPlusSixMonth" aria-labelledby="allAccess sixMonth" />
//                                                     <span className="bold greenTxt text4xlrg">$199</span>
//                                                     <p>after free trial</p>
//                                                 </label>
//                                             </div>
//                                             <div className="bottomRow bestCol w100"></div>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="ancCol ctaCol full480 w25">
//                             <div className="arrow hide480"></div>
//                             <div className="ctaBox">
//                                 <input type="submit" className="ancBtn orange lrg subBtn" value="Start FREE trial" />
//                                 <div id="myAccountInfo">
//                                     <div className="oldphone"></div>
//                                     <p className="textsml">Subscribe or cancel any time by calling <span className="bold greenTxt textlrg phoneNumb">1-800-ANCESTRY</span></p>
//                                     <p className="greenTxt"><small>(7 days a week, 9am-11pm ET)</small></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </form>
//     )
// })

// const Offerings = (props) => {
//     return <BonsaiOfferings/>
// };

// export default Offerings;