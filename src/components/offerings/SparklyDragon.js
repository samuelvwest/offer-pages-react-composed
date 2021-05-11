import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings } from '../../actions/pageSettings';
import { adobeTargetTrackEvent } from '../../actions/tracking';
import { USMap, Globe, GlobePlus, PlusCircle } from '../SVGs';
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

export class SparklyDragon extends React.Component {
    render() {
        const pS = this.props.pageSettings;
        const subs = pS.subscriptions;
        const ftTest = /initial/.test(pS.elligibility);
        const toggleTest = !!pS.LDBM && /toggle/.test(pS.LDBM);
        const sbsTest = !!pS.LDBM && /side-by-side/.test(pS.LDBM);
        const maxDurationSavings = {
            test: !!subs.durationSaveOffers
        }
        if (maxDurationSavings.test) {
            maxDurationSavings.max = Math.max.apply(null, subs.durationSaveOffers.map((ofr => ofr.durationSavings.display)));
            maxDurationSavings.offer = subs.durationSaveOffers.find((ofr) => ofr.durationSavings.display === maxDurationSavings.max)
        }
        return (
            <div className={`${classesMaker('sparklydragon')} offerings-placement--${this.props.placement}${/bottom/.test(this.props.placement) ? ` scroll-tracking--lowerOfferings` : ``}`}>
                <div className="page-container">
                    <div className="buttonpills-wrap">
                        <div className="buttonpills-inner" style={{ width: `${(40 + ((subs.display.durations.length - (subs.display.durations.length < 4 ? 0 : 1)) * 105))}px`}}>
                            <div className="buttonPills">
                                {subs.display.durations.map((duration, index, array) => {
                                    const toggleButtonTest = duration.num > 1 && toggleTest;
                                    const privateRowTest = duration.num === 1 && (sbsTest || (toggleTest && subs.display.durations.length > 3) || ((subs.display.durations.length % 2) !== 0 && subs.display.durations.length > 3));
                                    const activeTest = duration.num === subs.selectedOffer.renewMonths && (toggleButtonTest ? true : duration.ldbm === subs.selectedOffer.ldbm);
                                    return (
                                        <button key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} type="button" 
                                            className={`${activeTest ? `activePill icon iconCheck` : `inactivePill`}${privateRowTest ? ` privateRow` : ``}`}
                                            onClick={() => this.props.modifyPageSettings({ 
                                                selectedOffer: { 
                                                    renewMonths: duration.num, 
                                                    packageID: pS.selectedOffer.packageID,
                                                    ldbm: duration.ldbm
                                                }
                                            })}
                                        >
                                            {duration.num === 1 ? duration.text : `${duration.num} MONTHS`}
                                            {duration.num !== 1 && subs.ldbms && sbsTest && <span>paid {duration.ldbm ? `monthly` : `upfront`}</span>}
                                        </button>
                                    )
                                })}
                            </div>
                            {maxDurationSavings.test && 
                                <div className="arrow">
                                    <span className="textsml">
                                        Save <span className="arrow__upto">up to</span> <strong>{maxDurationSavings.offer.currency}{maxDurationSavings.offer.durationSavings.display}<LegalSup supRef="durationSave" /></strong>
                                    </span>
                                </div>
                            }
                            {toggleTest && subs.selectedOffer.renewMonths !== 1 && 
                                <p className="durationLDBMButton">
                                    <button type="button" onClick={() => this.props.modifyPageSettings({
                                        LDBM: (subs.selectedOffer.ldbm ? `toggle-back` : `toggle-front`),
                                        selectedOffer: { 
                                            renewMonths: pS.selectedOffer.renewMonths, 
                                            packageID: pS.selectedOffer.packageID,
                                            ldbm: !subs.selectedOffer.ldbm
                                        }
                                    })}>
                                        Or pay {subs.selectedOffer.ldbm ? `all ${subs.selectedOffer.renewMonths} months upfront` : `monthly`}
                                    </button>
                                </p>
                            }
                        </div>
                    </div>
                    {pS.windowWidth < pS.breaks.sparklydragon.desktop ? 
                        (
                            <form action="/checkout/mli?" className="form freetrial-form" 
                                ref={(ref) => { this.sparklyDragonForm = ref }}
                                onSubmit={(e) => {
                                    adobeTargetTrackEvent({
                                        eventType: 'offersFormSubmit',
                                        formLoc: this.props.placement,
                                        offerID: subs.selectedOffer.id,
                                        offeringsCreative: `sparklydragon`
                                    })
                                    e.target.submit()
                                }}
                            >
                                {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                                <input type="hidden" name="direct" value="1" /> 
                                <input type="hidden" name="rtype" value={ftTest ? '14' : '11'} /> 
                                <input type="hidden" name="quantities" value="1" /> 
                                <input type="hidden" name="flow" value="3" />
                                <div className="ancGrid ancGridEqual center-grid hide768 show480 subs-plan-container">
                                    {subs.display.packages.map((pkgData) => {
                                        const offer = subs.display.offersMap.find((ofr) => {
                                            const packageTest = pkgData.id === ofr.packageID;
                                            const renewMonthsTest = subs.selectedOffer.renewalPeriod.renewMonths === ofr.renewalPeriod.renewMonths;
                                            const ldbmTest = subs.selectedOffer.ldbm === ofr.ldbm;
                                            return packageTest && renewMonthsTest && ldbmTest;
                                        });
                                        const selectedTest = offer.packageID === subs.selectedOffer.packageID && offer.renewalPeriod.renewMonths === subs.selectedOffer.renewMonths && offer.ldbm === subs.selectedOffer.ldbm;
                                        const pkgVars = offer.packageData.order === 3  ? {
                                            genericClass: `allacc`,
                                            wrapClasses: `allacc-plan-wrap allacc-plan-br-mbl`,
                                            heroClass: `allacc-geo-mbl`,
                                            img: `allacc-mbl.png`,
                                            descClass: ` allacc-plan-desc`,
                                            detailClassStr: `allaccess`,
                                            colorClass: `allaccess-color`,
                                            arrowClass: `allacc-arrow`
                                        } : offer.packageData.order === 2 ? {
                                            genericClass: `worlddel`,
                                            wrapClasses: `world-ex-plan-wrap usnintrecords`,
                                            heroClass: `world-ex-geo-mbl`,
                                            img: `world-delx-mbl.png`,
                                            descClass: ``,
                                            detailClassStr: `usnint`,
                                            colorClass: `Wave3`,
                                            arrowClass: `world-ex-arrow`
                                        } : {
                                            genericClass: `usdis`,
                                            wrapClasses: `us-dis-plan-wrap usrecords`,
                                            heroClass: `us-dis-geo-mbl`,
                                            img: `us-dis-mbl.png`,
                                            descClass: ``,
                                            detailClassStr: `us`,
                                            colorClass: `bamboo3`,
                                            arrowClass: `us-dis-arrow`
                                        }
                                        return (
                                            <section key={`${pkgData.id}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}BR`}  className={`subs-plan-outer-wrap`}
                                                onClick={
                                                    (e) => {
                                                        this.props.modifyPageSettings({ 
                                                            selectedOffer: { 
                                                                renewMonths: offer.renewalPeriod.renewMonths, 
                                                                packageID: offer.packageID,
                                                                ldbm: offer.ldbm
                                                            }
                                                        })
                                                        setTimeout(() => {
                                                            this.sparklyDragonForm.dispatchEvent(new Event('submit'));
                                                        }, 250);
                                                    }
                                                }
                                            >
                                                <div className={`subs-plan-wrap ${pkgVars.wrapClasses}`}>
                                                    {!!offer.durationSavings && <div className="saving-plan-sixmonths">Save {offer.currency}{offer.durationSavings.display}<LegalSup supRef="durationSave" /></div>}
                                                    <div className={`plan-hero-img ${pkgVars.heroClass}`}>
                                                        <img src={`https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.96/images/${pkgVars.img}`} />
                                                    </div>
                                                    <div className={`subs-plan-desc${pkgVars.descClass}`}>
                                                        <h1 className="conTitle planTitle">
                                                            {pkgData.name}
                                                            <br />
                                                            {/usdiscovery/.test(pkgData.id) && <span className="textsml plan-subtitle">Access to billions of U.S. records.</span>}
                                                            {/worldexplorer/.test(pkgData.id) && <span className="textsml plan-subtitle">Access billions of U.S. <span className="bold">and</span> International&nbsp;records.</span>}
                                                            {/allaccess/.test(pkgData.id) && <span className="textsml plan-subtitle">Everything above, <span className="bold">plus</span> access to Newspapers.com™ Basic<LegalSup supRef="newspapersBasic" /> and&nbsp;Fold3.</span>}
                                                        </h1>
                                                        <span className={`plan-detail ${pkgVars.detailClassStr}${offer.renewalPeriod.renewMonths === 1 ? `-monthly` : ``}-plan-detail${(ftTest && offer.renewalPeriod.renewMonths > 1) ? ` plan-detail--longduration` : ``}${!!offer.promoSavings ? ` plan-detail--promosavings` : ``} ${!ftTest ? `plan-detail--hardoffer` : ``} textsml`}>
                                                            <span className={`plan-price-wrap ${!ftTest ? `plan-price-wrap--hardoffer` : ``} ${pkgVars.colorClass}`}>
                                                                <span className={`plan-price ${!ftTest ? `plan-price--hardoffer` : ``}`}>
                                                                    {!!offer.promoSavings && 
                                                                        <span className={`strike-through-price ${!ftTest ? `strike-through-price--hardoffer` : ``}`}>
                                                                            {offer.currency}{!offer.ldbm ? offer.renewalPeriod.MSRP : offer.renewalPeriod.MSRPMEP}
                                                                            <LegalSup supRef="promoSave" />
                                                                        </span>
                                                                    }
                                                                    {offer.currency}{!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP}
                                                                </span>
                                                                {offer.renewalPeriod.renewMonths === 1 ? `/month` : offer.ldbm ? `/mo.` : ``}
                                                            </span>
                                                            {offer.renewalPeriod.renewMonths !== 1 && <span> {!offer.ldbm ? `every` : `for`} <span className="border-highlight">{offer.renewalPeriod.renewMonths} months</span></span>}{offer.ldbm && <LegalSup supRef="longDurationBilledMonthly" />}
                                                            {ftTest && <span> after free trial</span>}
                                                        </span> 
                                                    </div>
                                                    <div className={`right-arrow-wrap ${pkgVars.colorClass}`}>
                                                        <span className={`icon iconArrowRight ${pkgVars.arrowClass}`}></span>
                                                    </div>
                                                    <input 
                                                        value={offer.offerIDs[pS.elligibility]} 
                                                        checked={selectedTest} 
                                                        onChange={() => {}}
                                                        className="radioBtn hide"
                                                        type="radio" 
                                                        name="offers" 
                                                        aria-labelledby={offer.description} 
                                                    />
                                                </div>
                                            </section>
                                        )
                                    })}
                                </div>
                            </form> 
                        ) : (
                            <form action="/checkout/mli?" className="form freetrial-form" onSubmit={() => {
                                adobeTargetTrackEvent({
                                    eventType: 'offersFormSubmit',
                                    formLoc: this.props.placement,
                                    offerID: subs.selectedOffer.id,
                                    offeringsCreative: `sparklydragon`
                                })
                            }}>
                                {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                                <input type="hidden" name="direct" value="1" /> 
                                <input type="hidden" name="rtype" value={ftTest ? '14' : '11'} /> 
                                <input type="hidden" name="quantities" value="1" /> 
                                <input type="hidden" name="flow" value="3" />
                                <div className={`ancGrid ancGridEqual center-grid hide480 plan-select-tiles plan-select-tiles--${subs.display.packages.length}`}>
                                    {subs.display.packages.map((pkgData) => {
                                            const offer = subs.display.offersMap.find((ofr) => {
                                                const packageTest = pkgData.id === ofr.packageID;
                                                const renewMonthsTest = subs.selectedOffer.renewalPeriod.renewMonths === ofr.renewalPeriod.renewMonths;
                                                const ldbmTest = subs.selectedOffer.ldbm === ofr.ldbm;
                                                return packageTest && renewMonthsTest && ldbmTest;
                                            });
                                            const selectedTest = offer.packageID === subs.selectedOffer.packageID && offer.renewalPeriod.renewMonths === subs.selectedOffer.renewMonths && offer.ldbm === subs.selectedOffer.ldbm;
                                            const pkgVars = offer.packageData.order === 3  ? {
                                                secClass: `allacc-sec`,
                                                psWrapClass: `allacc-ps-wrap`,
                                                borderClass: `allacc-border`,
                                                labelClass: `allacc-subs-label`,
                                                radioTxtClass: ``,
                                                freeTxtClass: `allaccess-color`,
                                                planDetailClass: `allaccess-${offer.renewalPeriod.renewMonths === 1 ? `monthly-` : ``}plan-detail`,
                                                colorClass: `allaccess-color`,
                                                ctaClasses: `allaccess-btn-bgcolor mt-2`,
                                                headerImgElem:<div className="allacc-plan-img-wrap"><GlobePlus /></div>
                                            } : offer.packageData.order === 2 ? {
                                                secClass: ``,
                                                psWrapClass: `worldex-ps-wrap`,
                                                borderClass: `worldex-border`,
                                                labelClass: `worldex-subs-label`,
                                                radioTxtClass: `worldex-radio-txt`,
                                                freeTxtClass: `usnintrecordsFreeText`,
                                                planDetailClass: `usnint-${offer.renewalPeriod.renewMonths === 1 ? `monthly-` : ``}plan-detail`,
                                                colorClass: `Wave3`,
                                                ctaClasses: `blue worldex-bgcolor free-trial-btn-md-up`,
                                                headerImgElem:<div className="usint-plan-img-wrap"><Globe classNames="usnintrecords-img" /></div>
                                            } : {
                                                secClass: `usrecords`,
                                                psWrapClass: `usdis-ps-wrap`,
                                                borderClass: `usrecords-border`,
                                                labelClass: `us-subs-label`,
                                                radioTxtClass: ``,
                                                freeTxtClass: `usrecordsFreeText`,
                                                planDetailClass: `us-${offer.renewalPeriod.renewMonths === 1 ? `monthly-` : ``}plan-detail`,
                                                colorClass: `bamboo3`,
                                                ctaClasses: `usdis-bgcolor free-trial-btn-md-up`,
                                                headerImgElem:<div className="us-plan-img-wrap"><USMap classNames="usrecords-img" /></div>
                                            }
                                            return (
                                                <section 
                                                    key={`${pkgData.id}_${offer.renewalPeriod.renewMonths}MR_${offer.renewalPeriod.billMonths}BR`}  
                                                    className={`ancCol w33 con ${pkgVars.secClass} grey-border p10 rounded-2 ${pkgVars.psWrapClass} ${selectedTest ? pkgVars.borderClass : ``}`} 
                                                    onClick={() => this.props.modifyPageSettings({ 
                                                        selectedOffer: { 
                                                            renewMonths: offer.renewalPeriod.renewMonths, 
                                                            packageID: offer.packageID,
                                                            ldbm: offer.ldbm
                                                        }
                                                    })}
                                                >
                                                    <header className="conHeader plan-select-header">
                                                        <label className={`container ${pkgVars.labelClass}`}>
                                                            <span className={`textxlrg radio-text ${pkgVars.radioTxtClass} text-left`}>{pkgData.name}</span> 
                                                            <input 
                                                                value={offer.offerIDs[pS.elligibility]} 
                                                                checked={selectedTest} 
                                                                onChange={() => {}}
                                                                className="radio" // might need to add {numtext}month-subs-input class
                                                                type="radio" 
                                                                name="offers" 
                                                                aria-labelledby={offer.description} 
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        {pkgVars.headerImgElem}
                                                    </header>
                                                    <div className="conBody">
                                                        {ftTest && 
                                                            <span className={`${pkgVars.freeTxtClass} text4xlrg`}>
                                                                <strong>14 days free</strong>
                                                            </span> 
                                                        }
                                                        <span className={pkgVars.planDetailClass}>
                                                            {ftTest && <span><br />then </span>}
                                                            <span className={`plan-price-wrap ${!ftTest ? `plan-price-wrap--hardoffer` : ``}`}>
                                                                <span className={`plan-price ${!ftTest ? `plan-price--hardoffer` : ``}`}>
                                                                    {!!offer.promoSavings && 
                                                                        <span className="strike-through-price">
                                                                            {offer.currency}{!offer.ldbm ? offer.renewalPeriod.MSRP : offer.renewalPeriod.MSRPMEP}
                                                                            <LegalSup supRef="promoSave" />
                                                                        </span>
                                                                    }
                                                                    {offer.currency}{!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP}
                                                                </span>
                                                                {offer.renewalPeriod.renewMonths === 1 ? `/month` : offer.ldbm ? `/mo.` : ``}
                                                            </span>
                                                            {offer.renewalPeriod.renewMonths !== 1 && <span> {!offer.ldbm ? `every` : `for`}&nbsp;<span className="border-highlight">{offer.renewalPeriod.renewMonths}&nbsp;months</span></span>}{offer.ldbm && <LegalSup supRef="longDurationBilledMonthly" goToOnClick={true} />}
                                                        </span>
                                                        {!!offer.durationSavings && 
                                                            <div className="saving-plan-sixmonths">
                                                                Saves {offer.currency}{offer.durationSavings.display}<LegalSup supRef="durationSave" />
                                                                <div className="tooltip">
                                                                    <img className="ques-icon" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" /> 
                                                                    <span className="tooltiptext tooltip-bottom normal">
                                                                        <span className={`${pkgVars.colorClass} bold`}><LegalSup supRef="durationSave" /></span>
                                                                        <LegalDurationSaveLine offer={offer}/>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        }
                                                        <hr className="hr-line-mtb10 border-bt-cl plan-month-line" />
                                                        <p className="plan-description">
                                                            {/usdiscovery/.test(pkgData.id) && <span>Access <span className="bold">billions of U.S. records</span> on Ancestry® to find your ancestors’&nbsp;stories.</span>}
                                                            {/worldexplorer/.test(pkgData.id) && <span>Access <span className="bold">billions of international and U.S. records</span> on Ancestry® to find your ancestors’&nbsp;stories.</span>}
                                                            {/allaccess/.test(pkgData.id) && <span>Access billions of international and U.S. records on Ancestry® to find your ancestors’ stories. <span className="bold">Plus, access military and newspaper records on:</span></span>}
                                                            
                                                            {/* {/sparklydragon/.test(this.props.variables.testimonials) &&
                                                                <span className="text-left textsml see-example-text">
                                                                    <a href="#examples-head-md-up" onClick={this.emptyFunction}>See example</a>
                                                                </span>
                                                            } */}
                                                        </p>
                                                        {!/allaccess/.test(pkgData.id) ? <br /> :
                                                            <div className="allaccess-img-container flex-container topSpacingBlock flex-center">
                                                                <div className="tooltip">
                                                                    <div className="fold-img-wrapper">
                                                                        <div>
                                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/fold.svg" className="fold-img" />
                                                                        </div>
                                                                        <div className="textsml text-left">
                                                                            <a href="javascript:;">What's this?</a>
                                                                        </div>
                                                                        <span className="tooltiptext tooltip-bottom normal">
                                                                            <div>Search for family stories in more than 537 million U.S. military records on Fold3.</div>
                                                                            <div className="fold-callout-img-wrap textCenter rel-pos">
                                                                                <div className="fold-callout-img-inner-wrap">
                                                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/fold3-callout-img.png" className="fold-callout-img" />
                                                                                </div>
                                                                                <a href="#examples-head-md-up" onClick={this.emptyFunction}>
                                                                                    <button className="ancBtn full-width allaccess-btn-bgcolor see-example-btn" type="button">See example</button>
                                                                                </a>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <PlusCircle />
                                                                </div>
                                                                <div className="tooltip">
                                                                    <div className="newspaper-img-wrapper">
                                                                        <div className="rel-pos">
                                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/newpapers.svg" className="newspapers-img" /> 
                                                                            <sup className="news-basic-text">Basic</sup>
                                                                        </div>
                                                                        <span className="news-basic-text-tab">Basic</span>
                                                                        <div className="textsml text-left">
                                                                            <a href="javascript:;">What's this?<LegalSup supRef="newspapersBasic" goToOnClick={true} /></a>
                                                                        </div>
                                                                        <span className="tooltiptext tooltip-bottom normal tooltip-news-wrap-new">
                                                                            <div>Search for family stories in more than 142 million articles on Newspapers.com.</div>
                                                                            <div className="newspaper-callout-img-wrap textCenter rel-pos">
                                                                                <div className="newspaper-callout-img-inner-wrap">
                                                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/newspapers-callout-img.png" className="newspaper-callout-img" />
                                                                                </div>
                                                                                <a href="#examples-head-md-up" onClick={this.emptyFunction}>
                                                                                    <button className="ancBtn full-width allaccess-btn-bgcolor see-example-btn" type="button">See example</button>
                                                                                </a>
                                                                            </div>
                                                                            <div className="textsml tooltip-subtext"><LegalSup supRef="newspapersBasic" />Other subsciptions to Newspapers.com may be available, but are not included in the All Access package</div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                    {selectedTest && <button className={`ancBtn free-trial-button full-width mb-0 ${pkgVars.ctaClasses}`} type="submit">{/initial/.test(pS.elligibility) ? `Start free trial` : /renewal/.test(pS.elligibility) ? `Get started` : `Upgrade now`}</button>}
                                                </section>
                                            )
                                        })}
                                </div>
                            </form>
                        )
                    }
                    {subs.ldbms && <LegalLongDurationBilledMonthly/>}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SparklyDragon);