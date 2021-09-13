import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import { LegalSup, LegalLongDurationBilledMonthly } from '../LegalText';

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

const BonsaiOfferings = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const headingHeightClass = !subs.ldbms ? 'two-lines' : (/toggle/.test(pS.LDBM) && subs.display.durations.length > 2) ? 'four-lines' : 'three-lines';
    const fullRowOffersTest = subs.display.durations.length > (pS.windowWidth < pS.breaks.control.desktop ? 2 : 3);
    return (
        <div className={`${classesMaker('bonsaigrid')} offerings-placement--${props.placement}${/bottom/.test(props.placement) ? ` scroll-tracking--lowerOfferings` : ``}`}>
            <form action="/checkout/mli?" className="bonsai-container dnSignupForm" onSubmit={() => {
                adobeTargetTrackEvent({
                    eventType: 'offersFormSubmit',
                    formLoc: props.placement,
                    offerID: subs.selectedOffer.id,
                    offeringsCreative: `bonsaigrid`
                })
            }}>
                {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                <input type="hidden" name="direct" value="1" />
                <input type="hidden" name="rtype" value={/initial/.test(pS.elligibility) ? '14' : '11'} />
                <input type="hidden" name="quantities" value="1" />
                <input type="hidden" name="flow" value="3" />
                <section className="offerGrid">
                    <div className="ancGrid priceGrid">
                        <div className={`ancCol ancColRow full480 ${fullRowOffersTest ? `offerings-full-row` : `w75`} priceTableCon`}>
                            <table className="ancGrid ancGridNoGutters priceTable">
                                <tbody>
                                    <tr className="hide320 durationsRow">
                                        <th className="ancCol1 hide320 w40" scope="col">&nbsp;</th>
                                        {subs.display.durations.map((duration) => {
                                            const toggleButtonTest = duration.num > 1 && !!pS.LDBM && /toggle/.test(pS.LDBM);
                                            const bestTest = duration.num === subs.bestOffer.renewalPeriod.renewMonths && (/side-by-side/.test(pS.LDBM) ? duration.ldbm === subs.bestOffer.ldbm : true);
                                            return (
                                                <th key={duration.id} className={`ancCol1 ${bestTest ? `bestCol ` : ``}hide320 w30`} scope="col">
                                                    <span className={`bold colHeading colHeading--${headingHeightClass} textlrg`}>
                                                        {duration.num === 1 ? `${duration.text} membership` : `${duration.num}-month membership`}
                                                        {duration.ldbm && <span>paid monthly</span>}
                                                        {toggleButtonTest && <a className="durationText" onClick={() => props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>or pay {duration.ldbm ? `upfront` : `monthly`}</a>}
                                                    </span>
                                                </th>
                                            )
                                        })}
                                    </tr>
                                    {subs.display.packages.map((pkgData) => {
                                        return (
                                            <tr key={pkgData.id} className="packageRow">
                                                <th className={`ancCol1 ancCol1Row colWrap full320 packageCol w40`} scope="row">
                                                    <div className={`logo logo--${pkgData.id}`}></div>
                                                    <h2 className="bold text3xlrg">{pkgData.name}</h2>
                                                    {/usdiscovery/.test(pkgData.id) && <p className="textlrg">Access all U.S. records on Ancestry</p>}
                                                    {/worldexplorer/.test(pkgData.id) && <p className="textlrg">Access all U.S. &amp; international records on Ancestry</p>}
                                                    {/allaccess/.test(pkgData.id) && <div>
                                                        <p className="textxlrg" style={{marginTop: '10px'}}>
                                                            Get full membership to:
                                                        </p>
                                                        <ul>
                                                            <li>Ancestry</li>
                                                            <li>Newspapers.com Basic<LegalSup supRef="newspapersBasic" goToOnClick={true} /></li>
                                                            <li>Fold3.com</li>
                                                        </ul>
                                                    </div>}
                                                </th>
                                                {subs.display.durations.map((duration) => {
                                                    const offer = subs.display.offersMap.find((offer) => {
                                                        const packageTest = pkgData.id === offer.packageID;
                                                        const renewMonthsTest = duration.num === offer.renewalPeriod.renewMonths;
                                                        const ldbmTest = duration.ldbm === offer.ldbm;
                                                        return packageTest && renewMonthsTest && ldbmTest;
                                                    });
                                                    const savingsVars = offer.promoSavings ? {
                                                        display: `promoSavings`,
                                                        legalSup: `promoSave`
                                                    } : !!offer.durationSavings ? {
                                                        display: `durationSavings`,
                                                        legalSup: `durationSave`
                                                    } : false;
                                                    if (!!offer) {
                                                        const bestTest = offer.renewalPeriod.renewMonths === subs.bestOffer.renewalPeriod.renewMonths && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.bestOffer.ldbm : true);
                                                        const selectedTest = offer.renewalPeriod.renewMonths === subs.selectedOffer.renewalPeriod.renewMonths && offer.packageID === subs.selectedOffer.packageID && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.selectedOffer.ldbm : true);
                                                        return (
                                                            <td key={`${offer.packageData.id}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}BR`} className={`ancCol1 ${bestTest ? `bestCol ` : ``}colWrap half320 w30`}>
                                                                <div className="priceLabel">
                                                                    <label htmlFor={`${offer.renewalPeriod.renewMonths}Month`} 
                                                                        onClick={() => props.modifyPageSettings({ 
                                                                            selectedOffer: { 
                                                                                renewMonths: offer.renewalPeriod.renewMonths, 
                                                                                packageID: offer.packageID,
                                                                                ldbm: offer.ldbm
                                                                            }
                                                                        })}
                                                                    >
                                                                        <h3 className="bold show320 textlrg">{offer.renewalPeriod.renewMonths === 1 ? `Monthly` : `${offer.renewalPeriod.renewMonths}-month`} membership</h3>
                                                                        {!!savingsVars && <p className="bold redTxt coloralt2 textxlrg">SAVE {offer.currency}{offer[savingsVars.display].display}<LegalSup supRef={savingsVars.legalSup} /></p>}
                                                                        <input 
                                                                            value={offer.offerIDs[pS.elligibility]} 
                                                                            checked={selectedTest} 
                                                                            onChange={() => {}}
                                                                            type="radio" 
                                                                            name="offers" 
                                                                            aria-labelledby={offer.description} 
                                                                        />
                                                                        <span className="bold greenTxt text4xlrg">
                                                                            {offer.promoSavings && <span className="strike-through-price">{offer.currency}{offer.renewalPeriod.MSRP}</span>}
                                                                            {!offer.ldbm  ? <span>{offer.currency}{offer.renewalPeriod.displayPrice}</span> : <span>{offer.currency}{offer.renewalPeriod.displayPriceMEP}/mo.<LegalSup supRef="longDurationBilledMonthly" goToOnClick={true} /></span>}
                                                                        </span>
                                                                        {/initial/.test(pS.elligibility) && <p>after free trial</p>}
                                                                    </label>
                                                                    {bestTest && subs.display.packages[subs.display.packages.length - 1].id === offer.packageID
                                                                        && <div className="bottomRow bestCol w100"></div>}
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                })}
                                            </tr>
                                        )})}
                                </tbody>
                            </table>
                        </div>
                        <div className={`ancCol ctaCol full480 ${fullRowOffersTest ? `submit-full-row`: `w25`}`}>
                            {/* <div className="documentsImg"></div> */}
                            <div className="arrow hide480"></div>
                            <div className="ctaBox">
                                <input type="submit" className="ancBtn orange lrg subBtn" value={/initial/.test(pS.elligibility) ? `Start FREE trial` : /renewal/.test(pS.elligibility) ? `Get started` : `Upgrade now`} />
                               {props.variables.supportSection && 
                                    <div className="myAccountInfo scroll-tracking--supportSection" 
                                        onClick={() => {
                                            adobeTargetTrackEvent({
                                                eventType: 'clickSection',
                                                section: 'supportSection'
                                            })
                                        }}
                                    >
                                        <div className="oldphone"></div>
                                        <p className="textsml">Subscribe or cancel any time by calling <span className="bold greenTxt textlrg phoneNumb">1-800-ANCESTRY</span></p>
                                        <p className="greenTxt"><small>(7 days a week, 9am-11pm ET)</small></p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {subs.ldbms && <LegalLongDurationBilledMonthly inModal={!!props.placement && /modal/.test(props.placement)} />}
                </section>
            </form>
        </div>
    )
})

export default BonsaiOfferings;