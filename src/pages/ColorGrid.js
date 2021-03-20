import React from 'react';
import { connect } from 'react-redux';

export const ColorGrid = (props) => {
    return (
        <div className="container container--colorgrid">
            <main id="offerPageWrap">
                <header id="smpAncHeaderWrap" aria-label="Main Navigation" role="banner" className="clearfix">
                    <div className="offerHeadlineWrap">
                        <h1 className="offerHeadline coloralt text5xlrg" elementtiming="ancestry_meaningful_paint">
                            Discover your family story with an Ancestry membership—<strong>FREE for 14&nbsp;days.</strong><sup className="legalCross">†</sup>
                        </h1>
                        <br />
                        <p className="offerHeadline coloralt" style={{fontSize: `17px`}}>
                            <strong>Choose a membership to try.</strong> There’s no risk - you’ll only be billed if you decide to keep your membership after your free trial.
                        </p>
                    </div>
                </header>
                <section id="formCon">
                    <form className="form clearfix" id="newOfferStyle" action="/checkout/mli?">
                    <input type="hidden" name="direct" value="1" />
                    <input type="hidden" name="rtype" value="14" />
                    <input type="hidden" name="quantities" value="1" />
                    <input type="hidden" name="flow" value="3" />
                        <div className="ancGrid ancGridNoGutters" id="priceGrid">
                            <div className="priceCol ancCol w40" id="priceFirstCol">
                                <div className="priceRow priceHeadRow"></div>
                                <div className="priceRow priceSecondRow" id="monthlyMem">
                                    <strong className="text2xlrg">Monthly membership</strong>
                                    <br /><span className="textxlrg">Cancel anytime</span>
                                </div>
                                <div className="priceRow priceThirdRow" id="sixMonthMem">
                                    <strong className="text2xlrg">6-month membership</strong>
                                </div>
                            </div>
                            <div className="priceCol ancCol w20" id="standardPriceCol">
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id="usDiscovery">U.S. Discovery</h2>
                                    <p className="textlrg">Uncover your family story in U.S. records</p>
                                </div>
                                <label className="priceRow priceSecondRow clearfix" htmlFor="standardMonthly">
                                    <input type="radio" className="radio" id="standardMonthly" name="offers" defaultChecked="checked" value="O-25401" aria-labelledby="usDiscovery monthlyMem" />
                                    <div className="checkSelectCon ancCol icon iconCheck"></div>
                                    <div className="priceCon ancCol">
                                        <span className="priceText text4xlrg">$24.99</span>
                                        <br /><span className="freeTrialText textlrg">after free trial</span>
                                    </div>
                                </label>
                                <label className="priceRow priceThirdRow clearfix" htmlFor="standardSemi">
                                    <input type="radio" className="radio" id="standardSemi" name="offers" value="O-23590" aria-labelledby="usDiscovery sixMonthMem" />
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="saveText textxlrg">SAVE $50*</span>
                                        <span className="priceText text4xlrg">$99</span>
                                        <br /><span className="freeTrialText textlrg">after free trial</span>
                                    </div>
                                </label>
                            </div>
                            <div className="priceCol ancCol w20" id="plusPriceCol">
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id="worldExplorer">World Explorer</h2>
                                    <p className="textxlrg">Unlock global content &amp; collections</p>
                                </div>
                                <label className="priceRow priceSecondRow clearfix plus" htmlFor="plusMonthly">
                                    <input type="radio" className="radio" id="plusMonthly" name="offers" value="O-25405" aria-labelledby="worldExplorer monthlyMem" />
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="priceText text4xlrg">$39.99</span>
                                        <br /><span className="freeTrialText textlrg">after free trial</span>
                                    </div>
                                </label>
                                <label className="priceRow priceThirdRow clearfix plus" htmlFor="plusSemi">
                                    <input type="radio" className="radio" id="plusSemi" name="offers" value="O-22056" aria-labelledby="worldExplorer sixMonthMem" />
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="saveText textxlrg">SAVE $90*</span>
                                        <span className="priceText text4xlrg">$149</span>
                                        <br /><span className="freeTrialText textlrg">after free trial</span>
                                    </div>
                                </label>
                            </div>
                            <div className="priceCol ancCol w20" id="allPriceCol">
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id="allAccess">All Access</h2>
                                    <p className="textxlrg">All of Ancestry, Fold3, Newspapers.com Basic**</p>
                                </div>
                                <label className="priceRow priceSecondRow clearfix" htmlFor="allMonthly">
                                    <input type="radio" className="radio" id="allMonthly" name="offers" value="O-25410" aria-labelledby="allAccess monthlyMem" />
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="priceText text4xlrg">$49.99</span>
                                        <br /><span className="freeTrialText textlrg">after free trial</span>
                                    </div>
                                </label>
                                <label className="priceRow priceThirdRow clearfix" htmlFor="allSemi">
                                    <input type="radio" className="radio" id="allSemi" name="offers" value="O-24567" aria-labelledby="allAccess sixMonthMem" />
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="saveText textxlrg">SAVE $100*</span>
                                        <span className="priceText text4xlrg">$199</span>
                                        <br /><span className="freeTrialText textlrg">after free trial</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div id="priceGridCtaCon" className="ancGrid">
                            <div className="ancCol w40"></div>
                            <div className="ancCol w60">
                                <input type="submit" className="ancBtn orange lrg ancBtnRnd" id="priceGridCta" value="Start your FREE trial" />
                            </div>
                        </div>
                    </form>
                </section>
                <section className="bgColor8" id="offerGrid">
                    <div className="offerTableCon">
                        <div id="guaranteeSeal"></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">Explore all U.S. content &amp; collections to discover ancestors, life events, birthplaces, maiden names, homes, jobs, siblings &amp; more</p>
                                    </th>
                                    <td className="w20 compareCheckCol us">
                                        <span className="textxlrg coloraltBamboo2 icon iconCheck"></span>
                                    </td>
                                    <td className="w20 compareCheckCol world">
                                        <span className="textxlrg coloraltWave3 icon iconCheck"></span>
                                    </td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">Discover, preserve &amp; share your family story with a guided family tree builder that gives you hints on finding your ancestors</p>
                                    </th>
                                    <td className="w20 compareCheckCol us">
                                        <span className="textxlrg coloraltBamboo2 icon iconCheck"></span>
                                    </td>
                                    <td className="w20 compareCheckCol world">
                                        <span className="textxlrg coloraltWave3 icon iconCheck"></span>
                                    </td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">Access special collections on African American &amp; Jewish American family history</p>
                                    </th>
                                    <td className="w20 compareCheckCol us">
                                        <span className="textxlrg coloraltBamboo2 icon iconCheck"></span>
                                    </td>
                                    <td className="w20 compareCheckCol world">
                                        <span className="textxlrg coloraltWave3 icon iconCheck"></span>
                                    </td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">Unlock global collections including billions of birth, marriage, death, census &amp; church records from around the world</p>
                                    </th>
                                    <td className="w20 compareCheckCol us">
                                    </td>
                                    <td className="w20 compareCheckCol world">
                                        <span className="textxlrg coloraltWave3 icon iconCheck world"></span>
                                    </td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck aa"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">Explore your ancestors' global immigrations &amp; learn about your family's homeland in passenger lists, border crossings &amp; more</p>
                                    </th>
                                    <td className="w20 compareCheckCol us">
                                    </td>
                                    <td className="w20 compareCheckCol world">
                                        <span className="textxlrg coloraltWave3 icon iconCheck world"></span>
                                    </td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck aa"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">
                                            Access exclusive stories &amp; articles with a Basic membership to Newspapers.com 
                                            <br /><span className="textsml">** Other subscriptions to Newspapers.com may be available but are not included in the All Access package</span>
                                        </p>
                                    </th>
                                    <td className="w20 compareCheckCol us"></td>
                                    <td className="w20 compareCheckCol world"></td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w40 offerLeftCol" scope="row">
                                        <p className="text2xlrg coloralt noTopSpacing">Find details of ancestors' military experience with a full membership to Fold3.com</p>
                                    </th>
                                    <td className="w20 compareCheckCol us"></td>
                                    <td className="w20 compareCheckCol world"></td>
                                    <td className="w20 compareCheckCol aa">
                                        <span className="textxlrg coloraltFuji2 icon iconCheck"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="trustCon">
                    <section className="colorPebbleDk2" id="quoteCon">
                        <p className="" id="quote">“I tried a 2-week free trial membership and I'm so glad I did. I can't believe how much I discovered.”</p>
                        <p className="text4xlrg" id="reference">
                            —Mary D. <strong>Ancestry member</strong>
                        </p>
                    </section>
                    <div className="featured">
                        <p className="bold coloralt textlrg">As featured on</p>
                        <div className="ancGrid featuredLogosCon">
                            <div className="ancCol w25">
                                <span className="featuredLogo abcNewsLogo beneSprite"></span>
                            </div>
                            <div className="ancCol w25">
                                <span className="featuredLogo cnbcLogo beneSprite"></span>
                            </div>
                            <div className="ancCol w25">
                                <span className="featuredLogo sicomLogo beneSprite"></span>
                            </div>
                            <div className="ancCol w25">
                                <span className="featuredLogo bbbLogo beneSprite"></span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="offerLegal">
                    <div className="page pageWidth1 pagePadded">
                        <p className="textxsml topSpacingBlock">
                            <sup>†</sup>One free trial per user. Free trial requires registration with a valid credit or debit card. You will be charged the full amount of your chosen membership price on expiry of the free trial, unless you cancel at least 2 days before the end of your free trial by visiting your My Account section or by calling 1-800-ANCESTRY.  Memberships auto-renew at the end of your subscription period and your payment method will be debited the then applicable rate.  To avoid auto-renewing cancel at least 2 days before your renewal date by visiting My Account or calling 1-800-ANCESTRY.
                        </p>
                        <p className="textxsml">
                            *Saves you $50 over 6 months versus monthly.
                            <br />Saves you $90 over 6 months versus monthly.
                            <br />Saves you $100 over 6 months versus monthly.
                        </p>
                    </div>
                </section>
                <footer id="offerFooter" className="bgColorPebbleDk2 bgDark">
                    <p className="ancContactInfo noTopSpacing">
                        <span className="bold text3xlrg">Need help?</span>
                        <span className="ancPhoneNumber icon iconPhone text3xlrg">1-800-ANCESTRY</span>
                        <button className="link bold calloutTypeHover calloutTrigger" type="button" data-callout="7 days a week, 9 a.m. to 11 p.m. ET" aria-expanded="false">hours</button>
                    </p>
                </footer>
            </main>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        assets: state.assets
    }
};

export default connect(mapStateToProps)(ColorGrid);