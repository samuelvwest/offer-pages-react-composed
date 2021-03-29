import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import { LegalSup } from '../LegalText';

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

const GreenTop = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const toggleTest = !!pS.LDBM && /toggle/.test(pS.LDBM);
    const sbsTest = !!pS.LDBM && /side-by-side/.test(pS.LDBM);
    return (
        <div className={classesMaker('greentop')}>
            <section className="ftSubOfferSection mainOfferSection">
                <div className="page">
                    <div className="ancGrid full480">
                        <div className="ancCol w60">
                            <form action="/checkout/mli?" id="mainCtaForm" className="ftSubOfferForm dnSignupForm">
                                {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                                <input type="hidden" name="direct" value="1" />
                                <input type="hidden" name="rtype" value={pS.elligibility === 'freetrial' ? '14' : '11'} />
                                <input type="hidden" name="quantities" value="1" />
                                <input type="hidden" name="flow" value="3" />
                                <div className="rad2OfferStacked">
                                    {subs.display.durations.sort((a, b) => {
                                        const numTest = b.num - a.num;
                                        return numTest !== 0 ? numTest : a.ldbm ? 1 : -1;
                                    }).map((duration) => {
                                        const offer = subs.display.offersMap.find((ofr) => {
                                            const packageTest = pS.denyLevel === ofr.packageData.order;
                                            const renewMonthsTest = duration.num === ofr.renewalPeriod.renewMonths;
                                            const ldbmTest = duration.ldbm === ofr.ldbm;
                                            return packageTest && renewMonthsTest && ldbmTest;
                                        });
                                        const toggleButtonTest = duration.num > 1 && toggleTest;
                                        // console.log(pS.denyLevel, duration.num, duration.ldbm);
                                        // console.log(offer);
                                        // const privateRowTest = duration.num === 1 && (sbsTest || (toggleTest && subs.display.durations.length > 3) || (subs.display.durations.length % 2) !== 0);
                                        const selectedTest = offer.renewalPeriod.renewMonths === subs.selectedOffer.renewMonths && (toggleButtonTest ? true : offer.ldbm === subs.selectedOffer.ldbm);
                                        const bestTest = offer.renewalPeriod.renewMonths === subs.bestOffer.renewMonths && (toggleButtonTest ? true : offer.ldbm === subs.bestOffer.ldbm);
                                        return (
                                            <label key={offer.id} className={`radOffer clearfix ${selectedTest ? `selectedOption` : ``}`} htmlFor="usOption6Month"
                                                onClick={() => props.modifyPageSettings({ 
                                                    selectedOffer: { 
                                                        renewMonths: offer.renewalPeriod.renewMonths, 
                                                        packageID: offer.packageID,
                                                        ldbm: offer.ldbm
                                                    }
                                                })}
                                            >
                                                {(!!offer.durationSavings || bestTest) && subs.display.durations.length > 1 &&
                                                    <p className={`savingsFlag${bestTest ? ` savingsFlag--best` : ``}`}>
                                                        {bestTest && `BEST`}{!!offer.durationSavings ? `${bestTest ? ` - ` : ``}SAVE ${offer.currency}${offer.durationSavings.display}` : ``}{!!offer.durationSavings && <LegalSup supRef="durationSave" />}
                                                    </p>
                                                }
                                                <div className="radCheckWrap">
                                                    <div className="radCheckHidden">
                                                        <input 
                                                            id={offer.id} 
                                                            value={offer.offerIDs[subs.offerElligibilityType]} 
                                                            defaultChecked={selectedTest} 
                                                            className="radio"
                                                            type="radio" 
                                                            name="offers" 
                                                            aria-labelledby={offer.description} 
                                                        />
                                                    </div>
                                                    <div className={`lrgCheckRadio icon${selectedTest ? ` iconCheck` : ``}`}></div>
                                                    <h4 className="radCheckTxt bold text3xlrg coloralt1 noTopSpacing">{offer.renewalPeriod.renewMonths === 1 ? `Monthly` : `${offer.renewalPeriod.renewMonths} months`}</h4>
                                                </div>
                                                <div className="offerTxtWrap">
                                                    <h4 className="text2xlrg coloralt1 noTopSpacing">
                                                        <span className="us6price">
                                                            {offer.promoSavings && 
                                                                <span className="strike-through-price">
                                                                    {offer.currency}{!offer.ldbm ? offer.renewalPeriod.MSRP : offer.renewalPeriod.MSRPMEP}
                                                                    <LegalSup supRef="promoSave" />
                                                                </span>
                                                            }
                                                            {offer.currency}{!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP}
                                                        </span> 
                                                        <span className="textlrg">/{offer.renewalPeriod.renewMonths === 1 ? `month` : !offer.ldbm ? `${offer.renewalPeriod.renewMonths} months` : `per mo.`}{offer.ldbm && <LegalSup supRef="longDurationBilledMonthly" />}</span>
                                                    </h4>
                                                    {pS.elligibility === `freetrial` && <p className="bold coloralt1 noTopSpacing">after free trial</p>}
                                                    {toggleButtonTest &&
                                                        <div className="durationTxtWrap upfrontText">
                                                            <p className="bold coloralt1 noTopSpacing upfrontText">
                                                                <a onClick={() => props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>
                                                                    or&nbsp;pay&nbsp;{duration.ldbm ? `upfront` : `monthly`}
                                                                </a>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            </label>
                                        )
                                    })}
                                </div>
                                <input className="ancBtn orange full xlrg" type="submit" value={/initial/.test(subs.offerElligibilityType) ? `CLICK FOR FREE TRIAL ▶` : /renewal/.test(subs.offerElligibilityType) ? `CLICK TO GET STARTED ▶` : `UPGRADE NOW ▶`} />
                            </form>
                        </div>
                        {!/control/.test(props.variables.headerStyle) && 
                            <div className="ancCol w40 hide480">
                                <div className="pageHeroImg"></div>
                            </div>
                        }
                    </div>
                    <div className="ancGrid seeAllMemSection">
                        <div className="ancCol w50">
                            <button className="link bold text2xlrg seeAllMemBtn" type="button">See all membership options</button>
                        </div>
                        <div className="ancCol w50"></div>
                    </div>
                </div>
            </section>
        </div>
    )
})

export default GreenTop;