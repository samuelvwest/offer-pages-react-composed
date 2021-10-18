import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import { scrollTo } from '../../actions/utilities';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import ColorStack from './ColorStack';
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

export class PrettyGrid extends React.Component {
    render() {
        const pS = this.props.pageSettings;
        if (this.props.pageSettings.windowWidth < this.props.pageSettings.breaks.prettyGrid.tablet) {
            // Color Stack for Phone on all offer pages
            return <ColorStack placement={this.props.placement}/>
        }
        const subs = pS.subscriptions;
        const splitPackagesArr = [];
        subs.display.packages.forEach((pkgData, index) => {
            if (index > 0) {
                splitPackagesArr.push({ divider: true })
            }
            pkgData.divider = false;
            splitPackagesArr.push(pkgData);
        })
        const ftTest = /initial/.test(pS.elligibility);
        return (
            <div className={`${classesMaker('prettygrid')} offerings-placement--${this.props.placement}${/bottom/.test(this.props.placement) ? ` scroll-tracking--lowerOfferings` : ``}`}>
                <section className="offerPageForm">
                    <div className="page pageWidth1 pagePadded">
                        <form className="form" action="/checkout/mli?" 
                            ref={(ref) => { this.sparklyDragonForm = ref }}
                            onSubmit={(e) => {
                                adobeTargetTrackEvent({
                                    eventType: 'offersFormSubmit',
                                    formLoc: this.props.placement,
                                    offerID: subs.selectedOffer.id,
                                    offeringsCreative: `prettygrid`
                                })
                                e.target.submit();
                            }}
                        >
                            {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
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
                                                        description: <p className="noTopSpacing hide480 textsml">Get full membership to: Ancestry.com, Fold3.com, &amp; Newspapers.com Basic<LegalSup supRef="newspapersBasic" goToOnClick={true} /></p>
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
                                                return (
                                                    <tr key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} className="offers-table__row offers-table__row--duration">
                                                        <td className="offers-table__cell offers-table__cell--content offers-table__cell--left-label">
                                                            <span className="text2xlrg">{duration.num === 1 ? `Monthly` : `${duration.num} month`}</span>
                                                            {(duration.num === 1 || !toggleButtonTest) && 
                                                                <span>
                                                                    <br />
                                                                    <button type="button" className="link" 
                                                                        onClick={() => { 
                                                                            scrollTo({
                                                                                selector: '.legal-text__paragraph--freeTrial, .legal-text__paragraph--hardOffer',
                                                                                trackStr: 'auto-renewing--cancel'
                                                                            }) 
                                                                        }}
                                                                    >
                                                                        <span className="texttiny">Auto Renewing, Cancel&nbsp;Anytime.</span>
                                                                    </button>
                                                                </span>} 
                                                            {toggleButtonTest && (
                                                                <span className="textlrg ldbmToggle">
                                                                    <br />
                                                                    <a onClick={() => this.props.modifyPageSettings({LDBM: (duration.ldbm ? `toggle-back` : `toggle-front`) })}>or pay {duration.ldbm ? `upfront` : `monthly`}</a>
                                                                </span>
                                                            )}
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
                                                            const savingsVars = offer.promoSavings ? {
                                                                display: `promoSavings`,
                                                                legalSup: `promoSave`
                                                            } : !!offer.durationSavings ? {
                                                                display: `durationSavings`,
                                                                legalSup: `durationSave`
                                                            } : false;
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
                                                                                    <br />
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
                                                                        {offer.ldbm && <span className="offerPriceTxt--ldbm">per&nbsp;month<LegalSup supRef="longDurationBilledMonthly" goToOnClick={true} /></span>}
                                                                        {!!savingsVars && <span className="savingsText text2xlrg coloraltgreen bold">SAVE {offer.currency}{offer[savingsVars.display].display}<LegalSup supRef={savingsVars.legalSup} /></span>}
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
                                            <button type="button" className="link" 
                                                onClick={() => { 
                                                    scrollTo({
                                                        selector: '.legal-text__paragraph--freeTrial, .legal-text__paragraph--hardOffer',
                                                        trackStr: 'auto-renewing--cancel'
                                                    }) 
                                                }}
                                            >
                                                <span className="texttiny">Auto Renewing, Cancel&nbsp;Anytime.</span>
                                            </button>
                                        </p>
                                    }
                                </div>
                                <div className="ancGridBreak768"></div>
                                <div className="ancCol w30 offerFormCtaCol">
                                    <div className="offerFormCtaArrow hide768"></div>
                                    <a href="" className="ancBtn orange lrg offerFormSubmitBtn"
                                        onClick={(e) => { 
                                            e.preventDefault();
                                            this.sparklyDragonForm.dispatchEvent(new Event('submit')); 
                                        }}
                                    >
                                        {/initial/.test(pS.elligibility) ? <span className="free-trial-submit-button">Start free trial<LegalSup supRef="freeTrial" /></span> : /renewal/.test(pS.elligibility) ? <span>Become a member<LegalSup supRef="hardOffer" /></span> : `Upgrade membership`}
                                    </a>
                                </div>
                            </div>
                            {subs.ldbms && <LegalLongDurationBilledMonthly/>}
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrettyGrid);