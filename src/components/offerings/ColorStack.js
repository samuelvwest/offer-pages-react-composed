import React from 'react';
import { connect } from 'react-redux';
import { SVGAsset } from '../SVGs';
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

const DurationButton = ({ duration, pS, subs, toggleTest, sbsTest, modifyPageSettings }) => {
    const toggleButtonTest = duration.num > 1 && toggleTest;
    const privateRowTest = duration.num === 1 && (sbsTest || (toggleTest && subs.display.durations.length > 3) || (subs.display.durations.length % 2) !== 0);
    const activeTest = duration.num === pS.selectedOffer.renewMonths && (toggleButtonTest ? true : duration.ldbm === pS.selectedOffer.ldbm);
    return (
        <button key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} type="button" 
            className={`${activeTest ? `activePill icon iconCheck` : `inactivePill`}${privateRowTest ? ` privateRow` : ``}`}
            onClick={() => modifyPageSettings({ 
                selectedOffer: { 
                    renewMonths: duration.num, 
                    packageID: pS.selectedOffer.packageID,
                    ldbm: duration.ldbm
                }
            })}
        >
            {duration.num === 1 ? duration.text.toUpperCase() : `${duration.num} MONTHS`}
            {duration.num !== 1 && subs.ldbms && sbsTest && <span>paid {duration.ldbm ? `monthly` : `upfront`}</span>}
        </button>
    )
}

const OfferRow = ({ pkgData, pS, subs, periodText, returnColorStackForm, modifyPageSettings }) => {
    const freemiumTest = /freemium/.test(pkgData.type);
    const offer = subs.display.offersMap.find((ofr) => {
        const packageTest = pkgData.id === ofr.packageID;
        if (freemiumTest && packageTest) {
            return true;
        }
        const renewMonthsTest = subs.selectedOffer.renewMonths === ofr.renewalPeriod.renewMonths;
        const ldbmTest = subs.selectedOffer.ldbm === ofr.ldbm;
        return packageTest && renewMonthsTest && ldbmTest;
    });
    const selectedTest = freemiumTest ? 
            offer.packageID === subs.selectedOffer.packageID : 
            (offer.packageID === subs.selectedOffer.packageID && offer.renewalPeriod.renewMonths === subs.selectedOffer.renewMonths && offer.ldbm === subs.selectedOffer.ldbm);
    const savingsVars = offer.promoSavings ? {
        display: `promoSavings`,
        legalSup: `promoSave`
    } : !!offer.durationSavings ? {
        display: `durationSavings`,
        legalSup: `durationSave`
    } : false;
    return (
        <div key={offer.id} className={`package-row package-row--${offer.packageData.color}`}>
            <label className="package-row__label" htmlFor={offer.id}
                onClick={
                    (e) => {
                        modifyPageSettings({ 
                            selectedOffer: { 
                                renewMonths: pS.selectedOffer.renewMonths, 
                                packageID: offer.packageID,
                                ldbm: pS.selectedOffer.ldbm
                            }
                        })
                        setTimeout(() => {
                            const colorStackForm = returnColorStackForm();
                            // console.log(colorStackForm.offers.value);
                            // console.log('form submit', returnColorStackForm());
                            if (/O-Reg/.test(colorStackForm.offers.value)) {
                                // console.log('send to create account');
                                window.location.href = `/account/create?treebuilder=true&returnUrl=${document.location.origin}/begin/family-tree`;
                            } else {
                                // console.log('submit form')
                                colorStackForm.dispatchEvent(new Event('submit'));
                            }
                        }, 250);
                    }
                }
            >
                <input 
                    value={offer.offerIDs[pS.elligibility]} 
                    checked={selectedTest} 
                    onChange={() => {}}
                    className="radioBtn"
                    type="radio" 
                    name="offers" 
                    aria-labelledby={offer.description} 
                />
                <div className={`package-row__left-image-container package-row__left-image-container--${offer.packageData.color}`}>
                    <div className="package-row__left-image">
                        <SVGAsset 
                            assetID={offer.packageData.icon} 
                            classNames={`package-icon package-icon--${offer.packageData.color}`}
                        />
                    </div>
                </div>
                <div className={`package-row__info package-row__info--${offer.packageData.color}`}>
                    <span className={`package-row__desc-name package-row__desc-name--${offer.packageData.color}`}>
                        <span dangerouslySetInnerHTML={{__html: pkgData.descName}} />
                        {/Basic/.test(pkgData.descName) && <LegalSup supRef="newspapersBasic" goToOnClick={true} />}
                    </span>
                    <span className="icon iconArrowRight package-row__arrow"></span>
                    <span className={`ancCol package-row__price-text ${offer.ldbm ? `package-row__price-text--ldbm` : ``}${(offer.promoSavings && !/initial/.test(pS.elligibility)) ? ` package-row__price-text--promo` : ``}`}>
                        {(/initial/.test(pS.elligibility) && !freemiumTest) && 
                            <span>
                                {offer.initialPeriod.duration}&nbsp;
                                {offer.initialPeriod.durationType.toUpperCase()}S&nbsp; 
                                {offer.initialPeriod.displayPrice === "0" ? 
                                    `FREE` :
                                    `for ${offer.currency}${offer.initialPeriod.displayPrice}`    
                                }
                            </span>
                        }
                        {freemiumTest ? 
                            <span>$0.00</span> :
                            <span>
                                {/initial/.test(pS.elligibility) && <span className="price-text__light">then&nbsp;</span>}
                                {offer.promoSavings && 
                                    <span className="strike-through-price">
                                        {offer.currency}{!offer.ldbm ? offer.renewalPeriod.MSRP : offer.renewalPeriod.MSRPMEP}
                                    </span>
                                }
                                {!offer.ldbm ? 
                                    <span>
                                        <span className="price-text__heavy">{offer.currency}{offer.renewalPeriod.displayPrice}</span>
                                        <span className="price-text__light">/{periodText(offer.renewalPeriod.renewMonths)}</span>
                                    </span> : 
                                    <span>
                                        <span className="price-text__heavy">{offer.currency}{offer.renewalPeriod.displayPriceMEP}</span>
                                        <span className="price-text__light">
                                            /{periodText(offer.renewalPeriod.billMonths)}
                                            {/* &nbsp;for {periodText(offer.renewalPeriod.renewMonths)} */}
                                            <LegalSup supRef="longDurationBilledMonthly" />
                                        </span>
                                    </span>
                                }
                            </span>
                        }
                        {freemiumTest && <span>Access free records only</span>}
                    </span> 
                    {!freemiumTest && 
                        <span className="package-row__support-text">
                            {!savingsVars ? 
                                `Cancel anytime` :
                                <strong>
                                    SAVE {offer.currency}{offer[savingsVars.display].display}<LegalSup supRef={savingsVars.legalSup} />
                                </strong>
                            }
                        </span>
                    }
                </div>
            </label>
        </div>
    )
}

export class ColorStack extends React.Component {
    returnColorStackForm = () => {
        return this.colorStackForm
        // this.colorStackForm.dispatchEvent(new Event('submit'))
    }
    render() {
        const pS = this.props.pageSettings;
        const subs = pS.subscriptions;
        const toggleTest = !!pS.LDBM && /toggle/.test(pS.LDBM);
        const sbsTest = !!pS.LDBM && /side-by-side/.test(pS.LDBM);
        const periodText = (num, text) => {
            const t = text || 'month';
            return num > 1 ? <span>{num}&nbsp;{t}s</span> : t;
        }
        return (
            <div className={`${classesMaker('colorstack')} offerings-placement--${this.props.placement}${/bottom/.test(this.props.placement) ? ` scroll-tracking--lowerOfferings` : ``} offerings-variable--${this.props.variables.offerings}`}>
                <form action="/checkout/mli?" 
                    ref={(ref) => { this.colorStackForm = ref }}
                    onSubmit={(e) => {
                        adobeTargetTrackEvent({
                            eventType: 'offersFormSubmit',
                            formLoc: this.props.placement,
                            offerID: subs.selectedOffer.id,
                            offeringsCreative: `colorstack`
                        })
                        e.target.submit();
                    }}
                >
                    {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                    <input type="hidden" name="direct" value="1" />
                    <input type="hidden" name="rtype" value={/initial/.test(pS.elligibility) ? '14' : '11'} />
                    <input type="hidden" name="quantities" value="1" />
                    <input type="hidden" name="flow" value="3" />
                    <section className="all-options">
                        <section className="all-options__durations">
                            <div className="pill-buttons">
                                {subs.display.durations.map((duration) => (
                                    <DurationButton
                                        key={duration.id}
                                        duration={duration}
                                        pS={pS}
                                        subs={subs}
                                        toggleTest={toggleTest}
                                        sbsTest={sbsTest}
                                        modifyPageSettings={this.props.modifyPageSettings}
                                    />
                                ))}
                            </div>
                            {toggleTest && pS.selectedOffer.renewMonths !== 1 && 
                                <p className="ldbm-buttons">
                                    <button type="button" onClick={() => this.props.modifyPageSettings({
                                        LDBM: (pS.selectedOffer.ldbm ? `toggle-back` : `toggle-front`),
                                        selectedOffer: { 
                                            renewMonths: pS.selectedOffer.renewMonths, 
                                            packageID: pS.selectedOffer.packageID,
                                            ldbm: !pS.selectedOffer.ldbm
                                        }
                                    })}>
                                        Or pay {pS.selectedOffer.ldbm ? `all ${pS.selectedOffer.renewMonths} months upfront` : `monthly`}
                                    </button>
                                </p>
                            }
                        </section>
                        <section className="all-options__packages">
                            {subs.display.packages.map((pkgData) => (
                                <OfferRow
                                    key={pkgData.id}
                                    pkgData={pkgData}
                                    pS={pS}
                                    subs={subs}
                                    periodText={periodText}
                                    returnColorStackForm={this.returnColorStackForm}
                                    modifyPageSettings={this.props.modifyPageSettings}
                                />
                            ))}
                        </section>
                    </section>
                </form>
                {(pS.selectedOffer.ldbm && subs.ldbms) && <LegalLongDurationBilledMonthly/>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorStack);