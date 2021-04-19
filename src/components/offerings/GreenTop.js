import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import BonsaiGrid from './BonsaiGrid';
import { LegalSup, LegalLongDurationBilledMonthly, LegalDurationSaves, LegalTextWrapper, LegalText } from '../LegalText';

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

export class GreenTop extends React.Component {
    seeAllOptionsModal = () => {
        if (!!window.ui && window.ui.modal) {
            const seeAllOptionsModal = ui.modal('.modal--top-greentop', {
                width: 900
            });
            seeAllOptionsModal.open();
        } else if (!!window.$ && !!window.$.modal) {
            $('.modal--top-greentop').modal({
                width: '900px'
            });
        }
    }
    render() {
        const pS = this.props.pageSettings;
        const subs = pS.subscriptions;
        const toggleTest = !!pS.LDBM && /toggle/.test(pS.LDBM);
        const sbsTest = !!pS.LDBM && /side-by-side/.test(pS.LDBM);
        const ldbmDurations = [];
        const durationSaveOffers = [];
        return (
            <div className={`${classesMaker('greentop')} offerings-placement--${this.props.placement}${/bottom/.test(this.props.placement) ? ` scroll-tracking--lowerOfferings` : ``}`}>
                <section className="ftSubOfferSection mainOfferSection">
                    <div className="page">
                        <div className="ancGrid full480">
                            <div className="ancCol w60">
                                <form action="/checkout/mli?" className="ftSubOfferForm dnSignupForm" onSubmit={() => {
                                    adobeTargetTrackEvent({
                                        eventType: 'offersFormSubmit',
                                        formLoc: this.props.placement,
                                        offerID: subs.selectedOffer.id,
                                        offeringsCreative: `greentop`
                                    })
                                }}>
                                    {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                                    <input type="hidden" name="direct" value="1" />
                                    <input type="hidden" name="rtype" value={/initial/.test(pS.elligibility) ? '14' : '11'} />
                                    <input type="hidden" name="quantities" value="1" />
                                    <input type="hidden" name="flow" value="3" />
                                    <div className="rad2OfferStacked">
                                        {[...subs.display.durations].sort((a, b) => {
                                            const numTest = b.num - a.num;
                                            return numTest !== 0 ? numTest : a.ldbm ? 1 : -1;
                                        }).map((duration) => {
                                            const offer = subs.display.offersMap.find((ofr) => {
                                                const packageTest = pS.denyLevel === ofr.packageData.order;
                                                const renewMonthsTest = duration.num === ofr.renewalPeriod.renewMonths;
                                                const ldbmTest = duration.ldbm === ofr.ldbm;
                                                return packageTest && renewMonthsTest && ldbmTest;
                                            });
                                            if (duration.ldbm) ldbmDurations.push(duration.num)
                                            if (offer.durationSavings) durationSaveOffers.push(offer)
                                            const toggleButtonTest = duration.num > 1 && toggleTest;
                                            const selectedTest = offer.renewalPeriod.renewMonths === subs.selectedOffer.renewMonths && (toggleButtonTest ? true : offer.ldbm === subs.selectedOffer.ldbm);
                                            const bestTest = offer.renewalPeriod.renewMonths === subs.bestOffer.renewMonths && (toggleButtonTest ? true : offer.ldbm === subs.bestOffer.ldbm);
                                            return (
                                                <label key={offer.id} className={`radOffer clearfix ${selectedTest ? `selectedOption` : ``}`} htmlFor="usOption6Month"
                                                    onClick={() => this.props.modifyPageSettings({ 
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
                                                                value={offer.offerIDs[pS.elligibility]} 
                                                                checked={selectedTest} 
                                                                onChange={() => {}}
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
                                                                        <br />
                                                                    </span>
                                                                }
                                                                {offer.currency}{!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP}
                                                            </span> 
                                                            <span className="textlrg">/{offer.renewalPeriod.renewMonths === 1 ? `month` : !offer.ldbm ? `${offer.renewalPeriod.renewMonths} months` : `per mo.`}{offer.ldbm && <LegalSup supRef="longDurationBilledMonthly" />}</span>
                                                        </h4>
                                                        {/initial/.test(pS.elligibility) && <p className="bold coloralt1 noTopSpacing">after free trial</p>}
                                                        {toggleButtonTest &&
                                                            <div className={`durationTxtWrap upfrontText`}>
                                                                <p className="bold coloralt1 noTopSpacing upfrontText">
                                                                    <a onClick={() => this.props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>
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
                            {!/control/.test(this.props.variables.headerStyle) && 
                                <div className="ancCol w40 hide480">
                                    <div className="pageHeroImg pageHeroImg--offering"></div>
                                </div>
                            }
                        </div>
                        <div className="seeAllMemSection">
                            <button className="link bold text2xlrg seeAllMemBtn" type="button" onClick={this.seeAllOptionsModal}>See all membership options</button>
                            <div className="modal modal--top-greentop">
                                <BonsaiGrid placement="modal"/>
                                <LegalText/>
                            </div>
                            {(ldbmDurations.length > 0 || durationSaveOffers.length > 0) && 
                                <LegalTextWrapper>
                                    {ldbmDurations.length > 0 && <LegalLongDurationBilledMonthly durations={ldbmDurations} />}
                                    {durationSaveOffers.length > 0 && <LegalDurationSaves durationSaveOffers={durationSaveOffers} />}
                                </LegalTextWrapper>
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GreenTop);