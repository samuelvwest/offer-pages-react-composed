import React from 'react';
import { connect } from 'react-redux';

export const ColorStack = (props) => {
    return (
        <div className="container container--colorstack">
            <div className="contentCon">
                <form id="mobileOfferForm" className="form" action="/checkout/mli?">
                <input type="hidden" name="direct" value="1" />
                <input type="hidden" name="rtype" value="14" />
                <input type="hidden" name="quantities" value="1" />
                <input type="hidden" name="flow" value="3" />
                    <section className="pricingCon">
                        <section id="memOptions" className="aboveFoldCon">
                            <h1 className="chooseMemText" elementtiming="ancestry_meaningful_paint">
                                Choose a membership to try—<strong>FREE for 14 days.</strong><sup className="legalCross">†</sup>
                            </h1>
                            <div className="buttonPill">
                                <button type="button" id="monthPill" className="activePill icon iconCheck">MONTHLY</button>
                                <button type="button" id="month6Pill" className="inactivePill">6 MONTHS</button>
                            </div>
                        </section>
                        <section id="services" className="allOptionsCon">
                            <div className="usRecordsCon ">
                                <div className="annualPriceCon priceCon ancGrid up">
                                    <label className="priceLink clearfix" htmlFor="us6Month">
                                        <input id="us6Month" className="radioBtn" type="radio" name="offers" value="O-23590" />
                                        <div className="usImg ftlpMobileSprite ancCol w25">
                                            <div className="usColorOver"></div>
                                        </div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">All U.S. records</span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon">
                                                <span className="daysFree">14 DAYS FREE</span>
                                                <br /><span className="priceTxt">then $99</span>
                                            </span>
                                            <span className="ancCol w40 cancelText saveText"><strong>SAVE $50*</strong></span>
                                        </div>
                                    </label>
                                </div>
                                <div className="monthlyPriceCon priceCon ancGrid">
                                    <label className="priceLink clearfix" htmlFor="us1Month">
                                        <input id="us1Month" className="radioBtn" type="radio" name="offers" value="O-25401" />
                                        <div className="usImg ftlpMobileSprite ancCol w25">
                                            <div className="usColorOver"></div>
                                        </div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">All U.S. records</span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon">
                                                <span className="daysFree">14 DAYS FREE</span>
                                                <br /><span className="priceTxt">then $24.99/month</span>
                                            </span>
                                            <span className="ancCol w40 cancelText">Cancel anytime</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="uaRecordsCon">
                                <div className="annualPriceCon priceCon ancGrid up">
                                    <label className="priceLink clearfix" htmlFor="ua6Month">
                                        <input id="ua6Month" className="radioBtn" type="radio" name="offers" value="O-22056" />
                                        <div className="uaImg ftlpMobileSprite ancCol w25">
                                            <div className="uaColorOver"></div>
                                        </div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">Everything on Ancestry</span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon">
                                                <span className="daysFree">14 DAYS FREE</span>
                                                <br /><span className="priceTxt">then $149</span>
                                            </span>
                                            <span className="ancCol w40 cancelText saveText"><strong>SAVE $90*</strong></span>
                                        </div>
                                    </label>
                                </div>
                                <div className="monthlyPriceCon priceCon ancGrid">
                                    <label className="priceLink clearfix" htmlFor="ua1Month">
                                        <input id="ua1Month" className="radioBtn" type="radio" name="offers" value="O-25405" />
                                        <div className="uaImg ftlpMobileSprite ancCol w25">
                                            <div className="uaColorOver"></div>
                                        </div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">Everything on Ancestry</span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon">
                                                <span className="daysFree">14 DAYS FREE</span>
                                                <br /><span className="priceTxt">then $39.99/month</span>
                                            </span>
                                            <span className="ancCol w40 cancelText">Cancel anytime</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="wepRecordsCon">
                                <div className="annualPriceCon priceCon ancGrid up">
                                    <label className="priceLink clearfix" htmlFor="wep6Month">
                                        <input id="wep6Month" className="radioBtn" type="radio" name="offers" value="O-24567" />
                                        <div className="wepImg ftlpMobileSprite ancCol w25">
                                            <div className="wepColorOver"></div>
                                        </div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">
                                                Everything above,
                                                <br /><strong>plus Fold3 and Newspapers.com™ Basic<sup>‡</sup></strong>
                                            </span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon">
                                                <span className="daysFree">14 DAYS FREE</span>
                                                <br /><span className="priceTxt">then $199</span>
                                            </span>
                                            <span className="ancCol w40 cancelText saveText"><strong>SAVE $100*</strong></span>
                                        </div>
                                    </label>
                                </div>
                                <div className="monthlyPriceCon priceCon ancGrid">
                                    <label className="priceLink clearfix" htmlFor="wep1Month">
                                        <input id="wep1Month" className="radioBtn" type="radio" name="offers" value="O-25410" />
                                        <div className="wepImg ftlpMobileSprite ancCol w25">
                                            <div className="wepColorOver"></div>
                                        </div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">
                                                Everything above,
                                                <br /><strong>plus Fold3 and Newspapers.com™ Basic<sup>‡</sup></strong>
                                            </span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon">
                                                <span className="daysFree">14 DAYS FREE</span>
                                                <br /><span className="priceTxt">then $49.99/month</span>
                                            </span>
                                            <span className="ancCol w40 cancelText">Cancel anytime</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </section>
                    </section>
                </form>
                <section className="otherBenefitsCon">
                    <section className="guaranteeCon">
                        <img src="https://www.ancestrycdn.com/mars/landing/offer/us/ftlp-mobile/gaurantee-seal.png" alt="Ancestry 100% Guarantee" className="guaranteeSealImg" />
                        <div className="needHelpTextCon">
                            <p>
                                <strong className="textlrg">Need help?</strong>
                                <br /><span className="icon iconPhone">1-800-ANCESTRY</span>
                            </p>
                        </div>
                    </section>
                    <section className="exploreCon">
                        <div className="fullPgImgSprite exploreImg"></div>
                        <h3 className="text5xlrg">Explore records</h3>
                        <p className="text3xlrg">Discover your family story in billions of records—the largest collection online.</p>
                    </section>
                    <section className="growCon bgDark bgTexture1 bgColor4">
                        <div className="fullPgImgSprite growImg"></div>
                        <h3 className="text5xlrg">Grow your family tree</h3>
                        <p className="text3xlrg">We find new information about your family and help you discover more.</p>
                    </section>
                    <section className="goCon">
                        <div className="fullPgImgSprite goImg"></div>
                        <h3 className="text5xlrg">Go anywhere</h3>
                        <p className="text3xlrg">Take family history along with free mobile apps.</p>
                    </section>
                    <section className="getCon bgDark bgTexture1 bgColor3">
                        <div className="fullPgImgSprite getImg"></div>
                        <h3 className="text5xlrg">Get help</h3>
                        <p className="text3xlrg">Collaborate with the largest family history community—and even find new relatives.</p>
                    </section>
                    <section className="quoteCon">
                        <div className="quote">
                            <p>“I tried a 2-week free trial membership and I'm so glad I did. I can't believe how much I discovered.”</p>
                            <div className="quoteArrow"></div>
                        </div>
                        <div className="quoteNameCon">
                            <div className="fullPgImgSprite quoteImg"></div>
                            <p className="textalt coloralt text2xlrg">
                                Mary D.
                                <br /><span className="textxsml">ANCESTRY MEMBER</span>
                            </p>
                        </div>
                    </section>
                    <section className="finalCTACon">
                        <div className="btnCon">
                            <a href="#memOptions" className="ancBtn lrg">Choose a membership</a>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        assets: state.assets
    }
};

export default connect(mapStateToProps)(ColorStack);