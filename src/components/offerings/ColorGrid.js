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

const ColorGrid = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const rowClasses = [ `priceSmallRow`, `priceMediumLowRow`, `priceMediumHighRow`, `priceTallRow` ]
    return (
        <section id="formCon" className={classesMaker('colorgrid')}>
            <form className="form clearfix" id="newOfferStyle" action="/checkout/mli?">
                {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                <input type="hidden" name="direct" value="1" />
                <input type="hidden" name="rtype" value={pS.elligibility === 'freetrial' ? '14' : '11'} />
                <input type="hidden" name="quantities" value="1" />
                <input type="hidden" name="flow" value="3" />
                <div className="ancGrid ancGridNoGutters" id="priceGrid">
                    <div className="priceCol ancCol w40" id="priceFirstCol">
                        <div className="priceRow priceHeadRow"></div>
                        {subs.display.durations.map((duration) => {
                            const toggleButtonTest = duration.num > 1 && !!pS.LDBM && /toggle/.test(pS.LDBM);
                            const includedOffers = subs.display.offersMap.filter((offer) => offer.renewalPeriod.renewMonths === duration.num && offer.ldbm === duration.ldbm);
                            let rowClassIndex = -1;
                            if (includedOffers.some((offer) => !!offer.durationSavings)) rowClassIndex++
                            if (includedOffers.some((offer) => !!offer.promoSavings)) rowClassIndex++
                            if (includedOffers.some((offer) => offer.ldbm)) rowClassIndex++
                            if (pS.elligibility === `freetrial`) rowClassIndex++
                            const rowClass = rowClasses[Math.max(0,rowClassIndex)]
                            includedOffers.forEach((offer) => offer.rowClass = rowClass);
                            return (
                                <div key={duration.id} className={`priceRow ${rowClass}`}>
                                    <strong className="text2xlrg">
                                        {duration.num === 1 ? duration.text : `${duration.num}-month`} membership
                                        {duration.ldbm && <span><br />paid monthly</span>}
                                    </strong>
                                    {duration.num === 1 && <span><br /><span className="textxlrg">Cancel anytime</span></span>}
                                    {toggleButtonTest && <span className="textxlrg ldbmToggle"><br /><a onClick={() => props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>or pay {duration.ldbm ? `upfront` : `monthly`}</a></span>}
                                </div>
                            )
                        })}
                    </div>
                    {subs.display.packages.map((pkgData) => {
                        return (
                            <div key={pkgData.id} className={`priceCol ancCol w20 ${pkgData.order === 3 ? `purpleColumn` : pkgData.order === 2 ? `blueColumn` : `greenColumn`}`}>
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id={pkgData.id}>{pkgData.name}</h2>
                                    {/usdiscovery/.test(pkgData.id) && <p className="textlrg">Uncover your family story in U.S. records</p>}
                                    {/worldexplorer/.test(pkgData.id) && <p className="textxlrg">Unlock global content &amp; collections</p>}
                                    {/allaccess/.test(pkgData.id) && <p className="textxlrg">All of Ancestry, Fold3, Newspapers.com Basic<LegalSup supRef="newspapersBasic" /></p>}
                                </div>
                                {subs.display.durations.map((duration) => {
                                    const offer = subs.display.offersMap.find((offer) => {
                                        const packageTest = pkgData.id === offer.packageID;
                                        const renewMonthsTest = duration.num === offer.renewalPeriod.renewMonths;
                                        const ldbmTest = duration.ldbm === offer.ldbm;
                                        return packageTest && renewMonthsTest && ldbmTest;
                                    });
                                    if (!!offer) {
                                        const selectedTest = offer.renewalPeriod.renewMonths === subs.selectedOffer.renewalPeriod.renewMonths && offer.packageID === subs.selectedOffer.packageID && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.selectedOffer.ldbm : true);
                                        return (
                                            <label key={`${offer.packageData.id}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}BR`} className={`priceRow ${offer.rowClass} clearfix`} htmlFor={offer.id}
                                                onClick={() => props.modifyPageSettings({ 
                                                    selectedOffer: { 
                                                        renewMonths: offer.renewalPeriod.renewMonths, 
                                                        packageID: offer.packageID,
                                                        ldbm: offer.ldbm
                                                    }
                                                })}
                                            >
                                                <input 
                                                    id={offer.id} 
                                                    value={offer.offerIDs[subs.offerElligibilityType]} 
                                                    defaultChecked={selectedTest} 
                                                    className="radio"
                                                    type="radio" 
                                                    name="offers" 
                                                    aria-labelledby={offer.description} 
                                                />
                                                <div className={`checkSelectCon ancCol${selectedTest ? ` icon iconCheck` : ``}`}></div>
                                                <div className="priceCon ancCol">
                                                    {!!offer.durationSavings && <span className="saveText textxlrg">SAVE {offer.currency}{offer.durationSavings.display}<LegalSup supRef="durationSave" /><br /></span>}
                                                    {offer.promoSavings && <span className="promoSave" ><span className="strike-through-price">{offer.currency}{!offer.ldbm ? offer.renewalPeriod.MSRP : `${offer.renewalPeriod.MSRPMEP}/mo.`}<LegalSup supRef="promoSave" /></span><br /></span>}
                                                    <span className="priceText text4xlrg">{offer.currency}{!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP}</span>
                                                    {offer.ldbm && <span className="priceText textlrg"><br />per month<LegalSup supRef="longDurationBilledMonthly" /></span>}
                                                    {pS.elligibility === `freetrial` && <span className="freeTrialText textlrg"><br />after free trial</span>}
                                                </div>
                                            </label>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}
                </div>
                <div id="priceGridCtaCon" className="ancGrid">
                    <div className="ancCol w40"></div>
                    <div className="ancCol w60">
                        <input type="submit" className="ancBtn orange lrg ancBtnRnd" id="priceGridCta" value={/initial/.test(subs.offerElligibilityType) ? `Start your FREE trial` : /renewal/.test(subs.offerElligibilityType) ? `Get started` : `Upgrade now`}  />
                    </div>
                </div>
            </form>
        </section>
    )
})

export default ColorGrid;