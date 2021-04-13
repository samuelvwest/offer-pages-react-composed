import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import ColorStack from './ColorStack';
import { LegalSup, LegalDurationSaveLine, LegalLongDurationBilledMonthly } from '../LegalText';

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

export class PrettyGrid extends React.Component {
    render() {
        const pS = this.props.pageSettings;
        if (this.props.pageSettings.windowWidth < this.props.pageSettings.breaks.prettyGrid.tablet) {
            // Color Stack for Phone on all offer pages
            return <ColorStack/>
        }
        const subs = pS.subscriptions;
        const splitPackagesArr = [];
        subs.display.packages.forEach((pkgData, index, array) => {
            if (index > 0) {
                splitPackagesArr.push({ divider: true })
            }
            pkgData.divider = false;
            splitPackagesArr.push(pkgData);
        })
        const ftTest = /initial/.test(pS.elligibility);
        const toggleTest = !!pS.LDBM && /toggle/.test(pS.LDBM);
        const sbsTest = !!pS.LDBM && /side-by-side/.test(pS.LDBM);
        return (
            <div className={`${classesMaker('prettygrid')} offerings-placement--${this.props.placement}`}>
                <section className="offerPageForm">
                    <div className="page pageWidth1 pagePadded">
                        <form className="form" action="/checkout/mli?">
                            <input type="hidden" name="direct" value="1" />
                            <input type="hidden" name="rtype" value={ftTest ? '14' : '11'} />
                            <input type="hidden" name="quantities" value="1" />
                            <input type="hidden" name="flow" value="3" />
                            <div className="ancGrid ancGridEqual ancGridSmall full768">
                                <div className="ancCol w70">
                                    <table className="offers-table topSpacingBlock">
                                        <tbody>
                                            <tr className="offers-table__row offers-table__row--header">
                                                <td className="offers-table__cell offers-table__cell--memberships">
                                                    {/* Memberships */}
                                                </td>

                                                {splitPackagesArr.map((pkgData, index) => {
                                                    if (pkgData.divider) {
                                                        return <td key={`pkg-divider-${index}`} className="offers-table__cell offers-table__cell--divider">&nbsp;</td>
                                                    }
                                                    const pkgVars = pkgData.order === 3  ? {
                                                        colorClass: `bgColor2`,
                                                        description: <p className="noTopSpacing hide480 textsml">Get full membership to: Ancestry.com, Fold3.com, &amp; Newspapers.com Basic<LegalSup supRef="newspapersBasic" /></p>
                                                    } : pkgData.order === 2 ? {
                                                        colorClass: `bgColor4`,
                                                        description: <p className="noTopSpacing hide480 textsml">Access all U.S. &amp; international records on Ancestry</p>
                                                    } : {
                                                        colorClass: `bgColor3`,
                                                        description: <p className="noTopSpacing hide480 textsml">Access all U.S. records on Ancestry</p>
                                                    }
                                                    return (
                                                        <td key={pkgData.id} className={`offers-table__cell offers-table__cell--content offers-table__cell--top-label ${pkgVars.colorClass}`}>
                                                            {pS.bestOffer.packageID === pkgData.id && <div className="badge badgeSize2 badgeColorTeal">MOST POPULAR</div>}
                                                            <h2 className="text3xlrg">{pkgData.name}</h2>
                                                            {pkgVars.description}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                            {subs.display.durations.map((duration) => {
                                                const toggleButtonTest = duration.num > 1 && !!pS.LDBM && /toggle/.test(pS.LDBM);
                                                // const includedOffers = subs.display.offersMap.filter((offer) => offer.renewalPeriod.renewMonths === duration.num && offer.ldbm === duration.ldbm);
                                                // let rowClassIndex = -1;
                                                // if (includedOffers.some((offer) => !!offer.durationSavings)) rowClassIndex++
                                                // if (includedOffers.some((offer) => !!offer.promoSavings)) rowClassIndex++
                                                // if (includedOffers.some((offer) => offer.ldbm)) rowClassIndex++
                                                // if (/initial/.test(pS.elligibility)) rowClassIndex++
                                                // const rowClass = rowClasses[Math.max(0,rowClassIndex)]
                                                // includedOffers.forEach((offer) => offer.rowClass = rowClass);
                                                return (
                                                    // <div key={duration.id} className={`priceRow ${rowClass}`}>
                                                    //     <strong className="text2xlrg">
                                                    //         {duration.num === 1 ? duration.text : `${duration.num}-month`} membership
                                                    //         {duration.ldbm && <span><br />paid monthly</span>}
                                                    //     </strong>
                                                    //     {duration.num === 1 && <span><br /><span className="textxlrg">Cancel anytime</span></span>}
                                                    //     {toggleButtonTest && <span className="textxlrg ldbmToggle"><br /><a onClick={() => props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>or pay {duration.ldbm ? `upfront` : `monthly`}</a></span>}
                                                    // </div>

                                                    <tr key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} className="offers-table__row offers-table__row--duration">
                                                        <td className="offers-table__cell offers-table__cell--content offers-table__cell--left-label">
                                                            <span className="text2xlrg">{duration.num === 1 ? `Monthly` : `${duration.num} month`}</span>
                                                            {(duration.num === 1 || !toggleButtonTest) && <span><br /><a href="#offerPageFooter"><span className="texttiny">Auto Renewing, Cancel&nbsp;Anytime.</span></a></span>} 
                                                            {toggleButtonTest && <span className="textlrg ldbmToggle"><br /><a onClick={() => this.props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>or pay {duration.ldbm ? `upfront` : `monthly`}</a></span>}
                                                        </td>
                                                        {splitPackagesArr.map((pkgData, index) => {
                                                            if (pkgData.divider) {
                                                                return <td key={`pkg-divider-${index}`} className="offers-table__cell offers-table__cell--divider">&nbsp;</td>
                                                            }
                                                            const offer = subs.display.offersMap.find((offer) => {
                                                                const packageTest = pkgData.id === offer.packageID;
                                                                const renewMonthsTest = duration.num === offer.renewalPeriod.renewMonths;
                                                                const ldbmTest = duration.ldbm === offer.ldbm;
                                                                return packageTest && renewMonthsTest && ldbmTest;
                                                            });
                                                            const bestTest = offer.renewalPeriod.renewMonths === subs.bestOffer.renewalPeriod.renewMonths && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.bestOffer.ldbm : true);
                                                            const selectedTest = offer.renewalPeriod.renewMonths === subs.selectedOffer.renewalPeriod.renewMonths && offer.packageID === subs.selectedOffer.packageID && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.selectedOffer.ldbm : true);
                                                            return (
                                                                <td key={`${pkgData.id}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}BR`} className="offers-table__cell offers-table__cell--content offers-table__cell--offer">
                                                                    <input 
                                                                        value={offer.offerIDs[pS.elligibility]} 
                                                                        checked={selectedTest} 
                                                                        onChange={() => {}}
                                                                        type="radio" 
                                                                        name="offers" 
                                                                        aria-labelledby={offer.description} 
                                                                    />
                                                                    <label onClick={() => this.props.modifyPageSettings({ 
                                                                        selectedOffer: { 
                                                                            renewMonths: offer.renewalPeriod.renewMonths, 
                                                                            packageID: offer.packageID,
                                                                            ldbm: offer.ldbm
                                                                        }
                                                                    })}>

                                                                        {!!offer.promoSavings && 
                                                                            <span className="price-group">
                                                                                <span className="strike-through-price">
                                                                                    <span className="price-group__currency">{offer.currency}</span>
                                                                                    {(!offer.ldbm ? offer.renewalPeriod.MSRP : offer.renewalPeriod.MSRPMEP).toString().split('.').map((num, index) => {
                                                                                        const useClass = index === 0 ? `price-group__integer` : `price-group__decimal`;
                                                                                        return <span key={index} className={useClass}>{num}</span>
                                                                                    })}
                                                                                    <LegalSup supRef="promoSave" />
                                                                                </span>
                                                                            </span>
                                                                        }
                                                                        <span className="price-group">
                                                                            <span className="price-group__currency">{offer.currency}</span>
                                                                            {(!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP).toString().split('.').map((num, index) => {
                                                                                const useClass = index === 0 ? `price-group__integer` : `price-group__decimal`;
                                                                                return <span key={index} className={useClass}>{num}</span>
                                                                            })}
                                                                        </span>
                                                                        {offer.ldbm && <span className="offerPriceTxt--ldbm">per&nbsp;month<LegalSup supRef="longDurationBilledMonthly" /></span>}
                                                                        {!!offer.durationSavings && <span className="savingsText text2xlrg coloraltgreen bold">SAVE {offer.currency}{offer.durationSavings.display}<LegalSup supRef="durationSave" /></span>}
                                                                    </label>
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    {(subs.display.durations.some((duration) => duration.num > 1) && /toggle/.test(pS.LDBM)) &&
                                        <p className="textxsml italic textRight payGoModalBtn">
                                            <a href="#offerPageFooter">   
                                                <span className="texttiny">Auto Renewing, Cancel&nbsp;Anytime.</span>
                                            </a>
                                        </p>
                                    }
                                </div>
                                <div className="ancGridBreak768"></div>
                                <div className="ancCol w30 offerFormCtaCol">
                                    <div className="offerFormCtaArrow hide768"></div>
                                    <a href="" className="ancBtn orange lrg offerFormSubmitBtn">{/initial/.test(pS.elligibility) ? <span className="free-trial-submit-button">Start free trial<LegalSup supRef="freeTrial"/></span> : /renewal/.test(pS.elligibility) ? `Become a member` : `Upgrade membership`}</a>
                                </div>
                            </div>
                            {subs.ldbms && <LegalLongDurationBilledMonthly/>}
                            {/* <div className="textCenter topSpacingBlock">
                                <a className="compareButton text3xlrg" href="#offerPageCompare">Compare memberships<br /><span className="icon iconArrowDown text6xlrg"></span></a>
                            </div> */}
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrettyGrid);