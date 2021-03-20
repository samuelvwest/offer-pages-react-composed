import React from 'react';
import { connect } from 'react-redux';

export const GreenTop = (props) => {
    return (
        <div className="container container--greentop">
            <main className="ftSubPage">
                <header className="ftSubPageHeader bgDark bgTexture3 bgColor4">
                    <div className="page">
                        <p className="bold ftSubPageIntro">U.S. Discovery membership</p>
                        <h1 className="ftSubPageTitle">We're giving you access to <i>your</i> history.</h1>
                    </div>
                </header>
                <section className="ftSubOfferSection mainOfferSection">
                    <div className="page">
                        <div className="ancGrid full480">
                            <div className="ancCol w60">
                                <form action="/checkout/mli?" id="mainCtaForm" className="ftSubOfferForm dnSignupForm">
                                    <input type="hidden" name="returnUrl" value="http%3A%2F%2Fsearch.ancestry.com%2Fcgi-bin%2Fsse.dll%3Fgss%3Dangs-c%26new%3D1%26rank%3D1%26msT%3D1%26gsfn%3DJohn%26gsln%3DSmith%26MSAV%3D0%26cp%3D0%26catbucket%3Drstp%26uidh%3D000%26pcat%3DBMD_BIRTH%26h%3D815672%26db%3DSARMemberApps%26indiv%3D1%26ml_rpos%3D1%26requr%3D9288674231746560%26ur%3D0" />
                                    <input type="hidden" name="direct" value="1" />
                                    <input type="hidden" name="rtype" value="14" />
                                    <input type="hidden" name="quantities" value="1" />
                                    <input type="hidden" name="flow" value="3" />
                                    <div className="rad2OfferStacked">
                                        <label className="radOffer clearfix selectedOption" htmlFor="usOption6Month">
                                            <p className="savingsFlag coloralt4 bold">BEST DEAL - SAVE $50*</p>
                                            <div className="radCheckWrap">
                                                <div className="radCheckHidden">
                                                    <input type="radio" name="offers" value="O-23590" id="usOption6Month" className="radCheckbox" defaultChecked="checked" />
                                                </div>
                                                <div id="usRadio6Month" className="lrgCheckRadio icon iconCheck"></div>
                                                <h4 className="radCheckTxt bold text3xlrg coloralt1 noTopSpacing">6 months</h4>
                                            </div>
                                            <div className="offerTxtWrap">
                                                <h4 className="text2xlrg coloralt1 noTopSpacing">
                                                    <span className="us6price">$99.00</span> 
                                                    <span className="textlrg">/6 months</span>
                                                </h4>
                                                <p className="bold coloralt1 noTopSpacing">after free trial</p>
                                            </div>
                                        </label>
                                        <label className="radOffer clearfix" htmlFor="usOption1Month">
                                            <div className="radCheckWrap">
                                                <div className="radCheckHidden">
                                                    <input type="radio" name="offers" value="O-25401" id="usOption1Month" className="radCheckbox" />
                                                </div>
                                                <div id="usRadio1Month" className="lrgCheckRadio icon iconCheck"></div>
                                                <h4 className="radCheckTxt bold text3xlrg coloralt1 noTopSpacing">Monthly</h4>
                                            </div>
                                            <div className="offerTxtWrap">
                                                <h4 className="text2xlrg coloralt1 noTopSpacing">
                                                    <span className="us1price">$24.99</span>
                                                    <span className="textlrg">/month</span>
                                                </h4>
                                                <p className="bold coloralt1 noTopSpacing">after free trial</p>
                                            </div>
                                        </label>
                                    </div>
                                    <input className="ancBtn orange full xlrg" type="submit" value="CLICK FOR FREE TRIAL ▶" />
                                </form>
                            </div>
                            <div className="ancCol w40 hide480">
                                <div className="pageHeroImg"></div>
                            </div>
                        </div>
                        <div className="ancGrid seeAllMemSection">
                            <div className="ancCol w50">
                                <button className="link bold text2xlrg seeAllMemBtn" type="button">See all membership options</button>
                            </div>
                            <div className="ancCol w50"></div>
                        </div>
                    </div>
                </section>
                <section className="ftSubPageSection recordsCon">
                    <div className="page bgDark">
                        <div className="ancGrid ancGridEqual ftSubPageGrid">
                            <div className="ancCol w50 ftSubPageBkgCol">
                                <div data-stellar-vertical-offset="200" data-stellar-background-ratio="1.3" className="recordsImg"></div>
                            </div>
                            <div className="ancCol w50 ftSubPageContentCol">
                                <div className="recordsContentWrap">
                                    <h2 className="ftSubSectionTitle recordsTitle">The world's most comprehensive record collection.</h2>
                                    <p className="ftSubSectionIntro recordsIntro">An Ancestry membership gives you access to an unparalleled collection of more than 15 billion U.S. records. You’ll have amazing resources at your fingertips including census records, wills, ships' logs, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftSubPageSection familyTreeCon">
                    <div className="page bgDark">
                        <div className="ancGrid ancGridEqual ftSubPageGrid">
                            <div className="ancCol w40 ftSubPageContentCol">
                                <h2 className="ftSubSectionTitle familyTreeTitle">Your family tree will grow and grow.</h2>
                                <p className="ftSubSectionIntro familyTreeIntro">Ancestry makes charting your family history easier and faster than you ever imagined. With an intuitive interface and intelligent Hints, you’ll have guidance every step of the way.</p>
                            </div>
                            <div className="ancCol w60 ftSubPageBkgCol">
                                <div className="familyTreeImg fadeVisibility"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftSubPageSection timelinesCon">
                    <div className="page">
                        <div className="ancGrid ancGridEqual ftSubPageGrid">
                            <div className="ancCol w50 ftSubPageBkgCol">
                                <div className="timelinesImg"></div>
                            </div>
                            <div className="ancCol w50 ftSubPageContentCol">
                                <div className="timelinesContentWrap">
                                    <h2 className="ftSubSectionTitle timelinesTitle">Meet the people behind the facts.</h2>
                                    <p className="ftSubSectionIntro timelinesIntro">Go beyond just dates and names to learn about the lives your ancestors lived. Our timelines turn biographical information into a rich narrative, complete with details about the historical events that may have shaped their lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="ftSubOfferSection footerOfferSection">
                    <div className="page">
                        <h2 className="ftSubSectionTitle textCenter">Get started now with a 14-day free trial.<sup className="legalCross">†</sup></h2>
                        <form action="/checkout/mli?" className="ftSubOfferForm dnSignupForm">
                            <input type="hidden" name="returnUrl" value="http%3A%2F%2Fsearch.ancestry.com%2Fcgi-bin%2Fsse.dll%3Fgss%3Dangs-c%26new%3D1%26rank%3D1%26msT%3D1%26gsfn%3DJohn%26gsln%3DSmith%26MSAV%3D0%26cp%3D0%26catbucket%3Drstp%26uidh%3D000%26pcat%3DBMD_BIRTH%26h%3D815672%26db%3DSARMemberApps%26indiv%3D1%26ml_rpos%3D1%26requr%3D9288674231746560%26ur%3D0" />
                            <input type="hidden" name="direct" value="1" />
                            <input type="hidden" name="rtype" value="14" />
                            <input type="hidden" name="quantities" value="1" />
                            <input type="hidden" name="flow" value="3" />
                            <div className="rad2OfferStacked">
                                <label className="radOffer clearfix selectedOption" htmlFor="usSub6Month">
                                    <p className="savingsFlag coloralt4 bold">BEST DEAL - SAVE $50*</p>
                                    <div className="radCheckWrap">
                                        <div className="radCheckHidden">
                                            <input type="radio" name="offers" value="O-23590" id="usSub6Month" className="radCheckbox" defaultChecked="checked"/>
                                        </div>
                                        <div id="usRadio6Month" className="lrgCheckRadio icon iconCheck"></div>
                                        <h4 className="radCheckTxt bold text3xlrg coloralt1 noTopSpacing">6 months</h4>
                                    </div>
                                    <div className="offerTxtWrap">
                                        <h4 className="text2xlrg coloralt1 noTopSpacing">
                                            <span className="us6price">$99</span>
                                            <span className="textlrg">/6 months</span>
                                        </h4>
                                        <p className="bold coloralt1 noTopSpacing">after free trial</p>
                                    </div>
                                </label>
                                <label className="radOffer clearfix" htmlFor="usSub1Month">
                                    <div className="radCheckWrap">
                                        <div className="radCheckHidden">
                                            <input type="radio" name="offers" value="O-25401" id="usSub1Month" className="radCheckbox" />
                                        </div>
                                        <div id="usRadio1Month" className="lrgCheckRadio icon iconCheck"></div>
                                        <h4 className="radCheckTxt bold text3xlrg coloralt1 noTopSpacing">Monthly</h4>
                                    </div>
                                    <div className="offerTxtWrap">
                                        <h4 className="text2xlrg coloralt1 noTopSpacing">
                                            <span className="us1price">$24.99</span>
                                            <span className="textlrg">/month</span>
                                        </h4>
                                        <p className="bold coloralt1 noTopSpacing">after free trial</p>
                                    </div>
                                </label>
                            </div>
                            <input className="ancBtn orange full xlrg" type="submit" value="CLICK FOR FREE TRIAL ▶" />
                        </form>
                        <div className="ancGrid seeAllMemSection">
                            <div className="ancCol w50">
                                <button className="link bold text2xlrg seeAllMemBtn" type="button">See all membership options</button>
                            </div>
                            <div className="ancCol w50">
                                <p className="offerLegalTxt coloralt1">*Saves you $50 over 6 months versus monthly.</p>
                            </div>
                            <div className="ancCol w100">
                                <p className="textxsml coloralt1 topSpacingBlock"><sup>†</sup>One free trial per user. Free trial requires registration with a valid credit or debit card. You will be charged the full amount of your chosen membership price on expiry of the free trial, unless you cancel at least 2 days before the end of your free trial by visiting your My Account section or by calling 1-800-ANCESTRY. Memberships auto-renew at the end of your subscription period and your payment method will be debited the then applicable rate. To avoid auto-renewing cancel at least 2 days before your renewal date by visiting My Account or calling 1-800-ANCESTRY.</p>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(GreenTop);