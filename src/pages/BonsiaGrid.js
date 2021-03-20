import React from 'react';
import { connect } from 'react-redux';

export const BonsaiGrid = (props) => {
    return (
        <div className="container container--bonsaigrid">
            <form action="/checkout/mli?" className="dnSignupForm" id="signupForm">
                <input type="hidden" name="direct" value="1" />
                <input type="hidden" name="rtype" value="14" />
                <input type="hidden" name="quantities" value="1" />
                <input type="hidden" name="flow" value="3" />
                <div id="mainWrap">
                    <section id="offerGrid">
                        <div className="ancGrid priceGrid">
                            <div className="ancCol full480 w75">
                                <div className="headlines">
                                    <h1 className="greenTxt text4xlrg" elementtiming="ancestry_meaningful_paint">Explore the world's largest online family history resource – FREE for 14 days.<sup>†</sup></h1>
                                    <p className="textlrg"><strong>Choose a membership to try.</strong> There's no risk – you'll only be billed if you decide to keep your membership after your free trial.</p>
                                </div>
                            </div>
                            <div className="ancCol hide480 w25">
                                <div className="documentsImg"></div>
                            </div>
                            <div className="ancCol ancColRow full480 w75 priceTableCon">
                                <table className="ancGrid ancGridNoGutters priceTable">
                                    <tbody>
                                        <tr className="hide320">
                                            <th className="ancCol1 hide320 w40" scope="col">&nbsp;</th>
                                            <th className="ancCol1 hide320 w30" scope="col">
                                                <span className="bold colHeading textlrg" id="monthly">Monthly <br /> membership</span>
                                            </th>
                                            <th className="ancCol1 bestCol hide320 w30" scope="col">
                                                <span className="bold colHeading textlrg" id="sixMonth">6-month <br /> membership</span>
                                            </th>
                                        </tr>
                                        <tr className="usRow">
                                            <th className="ancCol1 ancCol1Row colWrap full320 packageCol usDiscRow w40" scope="row">
                                                <div className="logo"></div>
                                                <h2 className="bold text3xlrg" id="usDiscovery">U.S. Discovery</h2>
                                                <p className="textlrg">Access all U.S. records on Ancestry</p>
                                            </th>
                                            <td className="ancCol1 colWrap half320 monthCol usDiscRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="usDiscMonthly">
                                                        <h3 className="bold show320 textlrg">Monthly membership</h3>
                                                        <input defaultChecked="checked" type="radio" name="offers" value="O-25401" id="usDiscMonthly" aria-labelledby="usDiscovery monthly" />
                                                        <span className="bold greenTxt text4xlrg">$24.99</span>
                                                        <p>after free trial</p>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="ancCol1 bestCol colWrap half320 usDiscRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="usDiscSixMonth">
                                                        <h3 className="bold show320 textlrg">6-month membership</h3>
                                                        <p className="bold redTxt coloralt2 textxlrg">SAVE $50*</p>
                                                        <input type="radio" name="offers" value="O-23590" id="usDiscSixMonth" aria-labelledby="usDiscovery sixMonth" />
                                                        <span className="bold greenTxt text4xlrg">$99</span>
                                                        <p>after free trial</p>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="weRow">
                                            <th className="ancCol1 ancCol1Row colWrap full320 packageCol worldRow w40" scope="row">
                                                <div className="logo"></div>
                                                <h2 className="bold text3xlrg" id="worldExplorer">World Explorer</h2>
                                                <p className="textlrg">Access all U.S. &amp; international records on Ancestry</p>
                                            </th>
                                            <td className="ancCol1 colWrap half320 monthCol worldRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldExMonthly">
                                                        <h3 className="bold show320 textlrg">Monthly membership</h3>
                                                        <input type="radio" name="offers" value="O-25405" id="worldExMonthly" aria-labelledby="worldExplorer monthly" />
                                                        <span className="bold greenTxt text4xlrg">$39.99</span>
                                                        <p>after free trial</p>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="ancCol1 bestCol colWrap half320 worldRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldExSixMonth">
                                                        <h3 className="bold show320 textlrg">6-month membership</h3>
                                                        <p className="bold redTxt coloralt2 textxlrg">SAVE $90*</p>
                                                        <input type="radio" name="offers" value="O-22056" id="worldExSixMonth" aria-labelledby="worldExplorer sixMonth" />
                                                        <span className="bold greenTxt text4xlrg">$149</span>
                                                        <p>after free trial</p>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="aaRow">
                                            <th className="ancCol1 ancCol1Row colWrap full320 packageCol worldPlusRow w40" scope="row">
                                                <div className="logo"></div>
                                                <h2 className="bold text3xlrg" id="allAccess">All Access</h2>
                                                <p className="textxlrg">
                                                    Get full membership to:
                                                </p>
                                                <ul>
                                                    <li>Ancestry</li>
                                                    <li>Newspapers.com Basic<sup>‡</sup></li>
                                                    <li>Fold3.com</li>
                                                </ul>
                                            </th>
                                            <td className="ancCol1 colWrap half320 monthCol worldPlusRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldPlusMonthly">
                                                        <h3 className="bold show320 textlrg">Monthly membership</h3>
                                                        <input type="radio" name="offers" value="O-25410" id="worldPlusMonthly" aria-labelledby="allAccess monthly" />
                                                        <span className="bold greenTxt text4xlrg">$49.99</span>
                                                        <p>after free trial</p>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="ancCol1 bestCol colWrap half320 worldPlusRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldPlusSixMonth">
                                                        <h3 className="bold show320 textlrg">6-month membership</h3>
                                                        <p className="bold redTxt coloralt2 textxlrg">SAVE $100*</p>
                                                        <input type="radio" name="offers" value="O-24567" id="worldPlusSixMonth" aria-labelledby="allAccess sixMonth" />
                                                        <span className="bold greenTxt text4xlrg">$199</span>
                                                        <p>after free trial</p>
                                                    </label>
                                                </div>
                                                <div className="bottomRow bestCol w100"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="ancCol ctaCol full480 w25">
                                <div className="arrow hide480"></div>
                                <div className="ctaBox">
                                    <input type="submit" className="ancBtn orange lrg subBtn" value="Start FREE trial" />
                                    <div id="myAccountInfo">
                                        <div className="oldphone"></div>
                                        <p className="textsml">Subscribe or cancel any time by calling <span className="bold greenTxt textlrg phoneNumb">1-800-ANCESTRY</span></p>
                                        <p className="greenTxt"><small>(7 days a week, 9am-11pm ET)</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="benefitListCon">
                        <div id="testimonials">
                            <p className="quote textalt">“I tried a 2-week free trial membership and I'm so glad I did. I can't believe how much I discovered.”</p>
                            <p className="source"><strong>Mary D.</strong> – Ancestry Member</p>
                        </div>
                        <table id="compareTable2">
                            <tbody>
                                <tr className="tableHeadingWrap rounded topright">
                                    <th scope="col"></th>
                                    <th scope="col" id="usTab" className="tableHeading rounded topleft">U.S. Discovery</th>
                                    <th scope="col" id="worldTab" className="tableHeading">World Explorer</th>
                                    <th scope="col" id="worldPlusTab" className="tableHeading rounded topright">All<br />Access</th>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Find stories among 142 million plus articles on Newspapers.com<br /><span className="textsml"><sup>‡</sup> Other subscriptions to Newspapers.com may be available but are not included in the All Access package</span></th>
                                    <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Explore more than 537 million records on Fold3, our historical military records website</th>
                                    <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Enjoy unlimited access to more than 3 billion international birth, marriage, death, census, military, church and other records</th>
                                    <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Discover your immigrant ancestors and learn more about your family’s homeland in detailed passenger lists, border crossings and more</th>
                                    <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Travel back to the 16th century in popular UK birth, marriage and death records and see original hand-written documents</th>
                                    <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Learn about your ancestors in more than 80 countries outside the U.S., including the UK, Ireland, Canada, Germany, Australia, France, Denmark, Norway, Sweden and more</th>
                                    <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Explore all our U.S. record collections including birth, marriage, death and census records detailing occupations, ages, siblings, birthplaces, addresses, and more – even maiden names</th>
                                    <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Connect with millions of other Ancestry members to ask for help, share ideas, make discoveries and possibly discover living relatives you never knew you had</th>
                                    <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Organize, preserve and share your family tree online with advanced tools that help you grow your tree and upload photos and stories</th>
                                    <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Learn from our exclusive Ancestry Hints – where we do the searching for you to expand your family tree</th>
                                    <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt">
                                    <th scope="row" className="noTopSpacing">Make discoveries in Ancestry special collections with records and help focusing on African-American and Jewish family history</th>
                                    <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                                <tr className="compareTxt rounded bottom">
                                    <th scope="row" className="noTopSpacing">Get simple-to-understand guidance every step of the way so you can start making discoveries on day one</th>
                                    <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                    <td className="leafCol worldPlusCol rounded bottomright"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        assets: state.assets
    }
};

export default connect(mapStateToProps)(BonsaiGrid);