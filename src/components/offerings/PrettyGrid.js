import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { durationTexts, freemiumSubscription } from '../../data/subscriptions';
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

const freemiumStyleAdjuster = ({ breakPoint, placement }) => {
    if (window.outerWidth >= breakPoint) {
        const name = `offeringsFreemiumLabelAdjustment__${placement}`;
        if (!!window.windu && !window.windu.data[`${name}_mutationStandard`]) {
            window.windu.create({
                name,
                when: () => {
                    const freemiumLabel = document.querySelector(`.offerings-placement--${placement} .offer-label--freemium`);
                    const firstOfferLabel = document.querySelector(`.offerings-placement--${placement} .offer-label`);
                    const rowsTest = [].slice.call(document.querySelectorAll(`.offerings-placement--${placement} .offers-grid__row--duration`)).length > 1;
                    const freemiumTest = !!freemiumLabel && rowsTest
                    const firstLabelTest = !!firstOfferLabel && firstOfferLabel.style.marginBottom !== '';
                    return freemiumTest || firstLabelTest;
                },
                do: () => {
                    const freemiumLabel = document.querySelector(`.offerings-placement--${placement} .offer-label--freemium`);
                    const firstOfferLabel = document.querySelector(`.offerings-placement--${placement} .offer-label`);
                    if (!!freemiumLabel) {
                        const extraRows = [].slice.call(document.querySelectorAll(`.offerings-placement--${placement} .offers-grid__row--duration:not(.offers-grid__row--position-first):not(.offers-grid__row--position-only)`))
                        if (extraRows.length > 0) {
                            let margin = 0;
                            extraRows.forEach((row) => {
                                margin += row.offsetHeight;
                            })
                            freemiumLabel.style.marginBottom = `-${margin}px`;
                        }
                    } else if (firstOfferLabel.style.marginBottom !== '') {
                        firstOfferLabel.style.marginBottom = '';
                    }
                },
                maxTimes: 10000
            })
        }
    }
}


const cellStylingData = ({ subs, rowLabels, data }) => {
    data.cells.max = Math.max(...data.cells.sizes);
    data.cells.min = Math.min(...data.cells.sizes);
    if (rowLabels && data.cells.maxSizeWithRowLabels < data.cells.max) {
        const cellMaxRatio = data.cells.maxSizeWithRowLabels / data.cells.max;
        data.cells.sizes = data.cells.sizes.map(size => Math.max(data.cells.min, size * cellMaxRatio));
    }
    data.cells.sizes.forEach((num) => {
        data.gridArea.needed.sizes.push(data.rowLabelWidth + (num * subs.display.packages.length));
    })
    data.gridArea.available.withCTA = data.gridArea.available.noCTA - data.ctaArea.sideWidth;

    data.gridArea.needed.min = Math.min(...data.gridArea.needed.sizes);
    data.gridArea.needed.max = Math.max(...data.gridArea.needed.sizes);
    if (data.gridArea.available.withCTA > data.gridArea.needed.min) {
        data.gridArea.available.use = `withCTA`;
        data.ctaArea.placement = `side`;
    } else {
        data.gridArea.available.use = `noCTA`;
        data.ctaArea.placement = `bottom`;
    }
    data.cells.fontSize = data.gridArea.needed.sizes.reduce((prev, cur, idx) => {
        let pre = idx === 1 ? [0, prev] : prev;
        if (data.gridArea.available[data.gridArea.available.use] > cur && cur >= pre[1]) {
            return [idx, cur];
        }
        return pre;
    })[0];
    return data;
}

const EmptyCell = ({ cellClasses }) => <div className={`offers-grid__cell offers-grid__cell--empty ${cellClasses}`}>&nbsp;</div>

const LDBMToggleButton = connect(mapStateToProps, mapDispatchToProps)(({ pageSettings: pS, modifyPageSettings, ldbmTest, embeddedInCell }) => (
    <a 
        className="ldbm-toggle-button"
        onClick={() => {
            if (!!embeddedInCell) {
                window._embeddedLDBMToggleOnly = true;
            }
            const pSUpdate = {
                LDBM: (ldbmTest ? `toggle-back` : `toggle-front`)
            }
            if (pS.selectedOffer.renewMonths > 1) {
                pSUpdate.selectedOffer = { 
                    renewMonths: pS.selectedOffer.renewMonths, 
                    packageID: pS.selectedOffer.packageID,
                    ldbm: !ldbmTest
                }
            }
            modifyPageSettings(pSUpdate);
        }}
    >
            or pay {ldbmTest ? `upfront` : `monthly`}
    </a>
));

const PackageHeadingCell = ({ pkgData, pS, offerStyles }) => {
    return (
        <div key={pkgData.id} className={`offers-grid__cell offers-grid__cell--${pkgData.color} offers-grid__cell--column-label`}>
            {(pS.subscriptions.bestOffer.packageID === pkgData.id && pS.subscriptions.display.packages.length > 1) && 
                <div className={`badge badgeSize2 badge--tier${offerStyles.cells.fontSize}`}>
                    {pS.bestOffer.packageID === pkgData.id ? 
                        `MOST POPULAR` : 
                        `RECOMMENDED`
                    }
                </div>
            }
            <div className="cell-content">
                <h2 className="cell-package-name">{pkgData.name}</h2>
                <p className="cell-package-description">
                    {pkgData.description}
                    {/Basic/.test(pkgData.description) && <LegalSup supRef="newspapersBasic" goToOnClick={true} />}
                </p>
            </div>
        </div>
    )
}

const ColumnRenewalTextCell = ({ pkgData, ftTest }) => {
    return (
        <div className={`offers-grid__cell offers-grid__column-renewal-text`}>
            {ftTest && 
                <span className="column-free-text">
                    {/treebuilder/.test(pkgData.id) ? `Free account` : <span>Free for 14&nbsp;days</span>}
                </span>
            }
            {/treebuilder/.test(pkgData.id) ? 
                <span>
                    {!/treebuilder/.test(pkgData.id) ? `Free account` : `Limited access to records`}
                </span> : 
                <span>
                    Auto renewing, cancel&nbsp;anytime
                </span>
             }
        </div>
    )
}

const RowLabelCell = ({ duration, rowPosition, ldbmToggleButtonTest, modifyPageSettings }) => {
    return (
        <div className={`offers-grid__cell offers-grid__cell--row-label position-${rowPosition}`}>
            <span className="duration-text">
                {duration.num === 1 ? `Monthly` : `${duration.num} month`}
            </span>
            {(duration.num === 1 || !ldbmToggleButtonTest) && 
                <button type="button" className="link renew-cancel-text" 
                    onClick={() => { 
                        scrollTo({
                            selector: '.legal-text__paragraph--freeTrial, .legal-text__paragraph--hardOffer',
                            trackStr: 'auto-renewing--cancel'
                        }) 
                    }}
                >
                    Auto Renewing, Cancel&nbsp;Anytime.
                </button>
            } 
            {ldbmToggleButtonTest && <LDBMToggleButton ldbmTest={duration.ldbm} />}
        </div>
    )
}

const OfferCell = ({ 
    pS, 
    subs, 
    duration, 
    pkgData, 
    durIndex, 
    displayRowLabels, 
    offerStyles, 
    ldbmToggleButtonTest, 
    rowPosition, 
    modifyPageSettings 
}) => {
    // Freemium stuffs
    const freemiumTest = /freemium/.test(pkgData.type);
    // Other stuffs
    const offer = subs.display.offersMap.find((ofr) => {
        const packageTest = pkgData.id === ofr.packageID;
        if (freemiumTest && packageTest) {
            return true;
        }
        const renewMonthsTest = duration.num === ofr.renewalPeriod.renewMonths;
        const ldbmTest = duration.ldbm === ofr.ldbm;
        return packageTest && renewMonthsTest && ldbmTest;
    });
    // console.log(offer);
    const savingsVars = offer.promoSavings ? {
        display: `promoSavings`,
        legalSup: `promoSave`
    } : !!offer.durationSavings ? {
        display: `durationSavings`,
        legalSup: `durationSave`
    } : false;
    const selectedTest = freemiumTest ? pS.selectedOffer.packageID === pkgData.id : (offer.renewalPeriod.renewMonths === subs.selectedOffer.renewalPeriod.renewMonths && offer.packageID === subs.selectedOffer.packageID && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.selectedOffer.ldbm : true));
    const offerCellClasses = `offers-grid__cell--offer position-${rowPosition}`;
    const priceInfoClasses = `price-info price-info--content-tier${offerStyles.cells.fontSize}`;
    const offerCellOnclick = () => {
        if (!!window._embeddedLDBMToggleOnly) {
            delete window._embeddedLDBMToggleOnly;
        } else {
            const selectedOffer = freemiumTest ? { 
                renewMonths: pS.selectedOffer.renewMonths, 
                packageID: offer.packageID,
                ldbm: pS.selectedOffer.ldbm
            } : { 
                renewMonths: offer.renewalPeriod.renewMonths, 
                packageID: offer.packageID,
                ldbm: offer.ldbm
            }
            modifyPageSettings({ selectedOffer })
        }
    }
    
    return (freemiumTest && durIndex > 0) ? 
        <EmptyCell cellClasses={offerCellClasses} /> : 
        (
            <div className={`offers-grid__cell ${offerCellClasses}`}>
                <input 
                    value={offer.offerIDs[pS.elligibility]} 
                    checked={selectedTest} 
                    onChange={() => {}}
                    type="radio" 
                    name="offers" 
                    aria-labelledby={offer.description} 
                />
                <label 
                    className={`offer-label offer-label--size-tier${offerStyles.cells.fontSize} ${freemiumTest ? `offer-label--freemium` : ``}`}
                    onClick={offerCellOnclick}
                >

                    {freemiumTest ?  
                        <span className={priceInfoClasses}>
                            <span className="currency-symbol">$</span>
                            <span className="integer">0</span>
                            <span className="decimal-point">.</span>
                            <span className="decimal-number">00</span>
                        </span> :
                        <span className={priceInfoClasses}>
                            {!!offer.promoSavings && 
                                <span className="strike-through-price">
                                    <span className="currency-symbol">{offer.currency}</span>
                                    {(!offer.ldbm ? offer.renewalPeriod.MSRP : offer.renewalPeriod.MSRPMEP).toString().split('.').map((num, index) => {
                                        const integerTest = index === 0;
                                        const useClass = integerTest ? `integer` : `decimal-number`;
                                        return <span key={index} className={useClass}>
                                            {num}
                                            {integerTest && <span className="decimal-point">.</span>}
                                        </span>
                                    })}
                                </span>
                            }
                            {!!offer.promoSavings && <br />}
                            <span className="currency-symbol">{offer.currency}</span>
                            {(!offer.ldbm ? offer.renewalPeriod.displayPrice : offer.renewalPeriod.displayPriceMEP).toString().split('.').map((num, index) => {
                                const integerTest = index === 0;
                                const useClass = integerTest ? `integer` : `decimal-number`;
                                return <span key={index} className={useClass}>
                                    {num}
                                    {integerTest && <span className="decimal-point">.</span>}
                                </span>
                            })}
                            {!displayRowLabels &&
                                <span className="per-duration">
                                    {offer.renewalPeriod.billMonths > 1 ? `${offer.renewalPeriod.billMonths} mos.` : `mo.`}
                                </span>
                            }
                            {offer.ldbm && 
                                <span className="ldbm-addon">
                                    {displayRowLabels ? 
                                        <span>per&nbsp;month</span> :
                                        <span>for&nbsp;{offer.renewalPeriod.renewMonths}&nbsp;months</span>
                                    }
                                    <LegalSup supRef="longDurationBilledMonthly" goToOnClick={true} />
                                </span>
                            }
                        </span>
                    }
                    {(!displayRowLabels && ldbmToggleButtonTest) && 
                        <LDBMToggleButton 
                            ldbmTest={duration.ldbm} 
                            embeddedInCell={true} 
                        />
                    }
                    {!!savingsVars && 
                        <span className="savings-text">
                            SAVE {offer.currency}{offer[savingsVars.display].display}
                            <LegalSup supRef={savingsVars.legalSup} />
                        </span>
                    }
                    {freemiumTest && 
                        <span className="registration-list-items">
                            {/* Includes free record collections.
                            <ul className="bulleted">
                                <li>Free record collections</li>
                                <li>Family tree building and research&nbsp;tools</li>
                            </ul>
                            <br /> */}
                            Does <strong>not</strong>&nbsp;include:
                            <ul className="bulleted">
                                <li>Access to over 30 billion global records on Ancestry®</li>
                                <li>Direct messaging other&nbsp;members</li>
                            </ul>
                        </span>
                    }
                </label>
            </div>
        )
}

export class PrettyGrid extends React.Component {
    componentDidMount() {
        freemiumStyleAdjuster({
            breakPoint: this.props.pageSettings.breaks.prettyGrid.tablet, 
            placement: this.props.placement
        });
    }
    componentDidUpdate() {
        freemiumStyleAdjuster({
            breakPoint: this.props.pageSettings.breaks.prettyGrid.tablet, 
            placement: this.props.placement
        });
    }
    render() {
        // useEffect(freemiumStyleAdjuster);
        const pS = this.props.pageSettings;
        if (this.props.pageSettings.windowWidth < this.props.pageSettings.breaks.prettyGrid.tablet) {
            // Color Stack for Phone on all offer pages
            return <ColorStack placement={this.props.placement}/>
        }
        const subs = pS.subscriptions;
        const ftTest = /initial/.test(pS.elligibility);
        const displayRowLabels = this.props.pageSettings.displayRowLabels && !/treebuilder/.test(pS.displayPackages);
        const offerStyles = cellStylingData({
            subs,
            rowLabels: displayRowLabels, 
            data: {
            cells: {
                    sizes: [162, 172, 215, 250],
                    maxSizeWithRowLabels: 215,
                    aboveRowMax: 0,
                    fontSize: 0
                },
                rowLabelWidth: displayRowLabels ? 110 : 0,
                gridArea: {
                    needed: {
                        sizes: [],
                    },
                    available: {
                        noCTA: Math.min(window.outerWidth, 1200)
                    }
                },
                ctaArea: {
                    placement: `bottom`,
                    sideWidth: 300
                }
            }
        })
        return (
            <div className={`${classesMaker('prettygrid')} offerings-placement--${this.props.placement}${/bottom/.test(this.props.placement) ? ` scroll-tracking--lowerOfferings` : ``}`}>
                <section className="offers-container">
                    <form className="offers-form" action="/checkout/mli?" 
                        ref={(ref) => { this.prettyGridForm = ref }}
                        onSubmit={(e) => {
                            adobeTargetTrackEvent({
                                eventType: 'offersFormSubmit',
                                formLoc: this.props.placement,
                                offerID: subs.selectedOffer.id,
                                offeringsCreative: `prettygrid`
                            })
                            // console.log(e.target.offers.value);

                            if (/O-Reg/.test(e.target.offers.value)) {
                                window.location.href = `/account/create?treebuilder=true&returnUrl=${document.location.origin}/begin/family-tree`;
                            } else {
                                e.target.submit();
                            }
                        }}
                    >
                        {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                        <input type="hidden" name="direct" value="1" />
                        <input type="hidden" name="rtype" value={ftTest ? '14' : '11'} />
                        <input type="hidden" name="quantities" value="1" />
                        <input type="hidden" name="flow" value="3" />
                        <div className={`offers-grid offers-grid--cta-placement-${offerStyles.ctaArea.placement} offers-grid--row-labels-${displayRowLabels}`}>
                            <div className="offers-grid__row">
                                {displayRowLabels && <EmptyCell cellClasses="offers-grid__cell--row-label" />}
                                {subs.display.packages.map((pkgData, index) => 
                                    <PackageHeadingCell 
                                        key={index} 
                                        pkgData={pkgData} 
                                        idx={index} 
                                        pS={pS}
                                        displayRowLabels={displayRowLabels}
                                        offerStyles={offerStyles}
                                    />
                                )}
                            </div>
                            {!displayRowLabels &&
                                <div className="offers-grid__row">
                                    {displayRowLabels && <EmptyCell cellClasses="offers-grid__cell--row-label" />}
                                    {subs.display.packages.map((pkgData, index) => 
                                        <ColumnRenewalTextCell 
                                            key={index} 
                                            pkgData={pkgData} 
                                            ftTest={ftTest}
                                        />
                                    )}
                                </div>
                            }
                            {subs.display.durations.map((duration, index) => {
                                const ldbmToggleButtonTest = duration.num > 1 && !!pS.LDBM && /toggle/.test(pS.LDBM);
                                const durIndex = index;
                                const rowPosition = subs.display.durations.length === 1 ? `only` : index === 0 ? `first` : (index + 1) === subs.display.durations.length ? `last` : `middle`;
                                return (
                                    <div key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} className={`offers-grid__row offers-grid__row--duration offers-grid__row--position-${rowPosition}`}>
                                        {displayRowLabels &&
                                            <RowLabelCell 
                                                duration={duration} 
                                                ldbmToggleButtonTest={ldbmToggleButtonTest} 
                                                rowPosition={rowPosition}
                                                modifyPageSettings={this.props.modifyPageSettings}
                                            />
                                        }
                                        {subs.display.packages.map((pkgData, index)  => ( 
                                            <OfferCell 
                                                key={index}
                                                subs={subs}
                                                duration={duration}
                                                pkgData={pkgData}
                                                durIndex={durIndex}
                                                pS={pS}
                                                displayRowLabels={displayRowLabels}
                                                offerStyles={offerStyles}
                                                ldbmToggleButtonTest={ldbmToggleButtonTest} 
                                                rowPosition={rowPosition}
                                                modifyPageSettings={this.props.modifyPageSettings}
                                            />
                                        ))}
                                    </div>
                                )
                            })}
                            {subs.ldbms && 
                                <div 
                                    className="legal-wrapper"
                                    style={{maxWidth: `${offerStyles.gridArea.needed.max}px`}}
                                >
                                    <LegalLongDurationBilledMonthly/>
                                </div>
                            }
                        </div>
                        <div className={`offers-form__cta offers-form__cta--placement-${offerStyles.ctaArea.placement} offers-form__cta--row-labels-${displayRowLabels}`}>
                            <div className="cta-arrow"></div>
                            <a href="" className="ancBtn orange lrg submit-button"
                                onClick={(e) => { 
                                    e.preventDefault();
                                    this.prettyGridForm.dispatchEvent(new Event('submit')); 
                                }}
                            >
                                {/treebuilder/.test(subs.selectedOffer.packageID) ? 
                                    <span>Start now</span> : /initial/.test(pS.elligibility) ? 
                                    <span className="free-trial-text">
                                        Start free trial<LegalSup supRef="freeTrial" />
                                    </span> : /renewal/.test(pS.elligibility) ? 
                                        <span>
                                            Become a member<LegalSup supRef="hardOffer" />
                                        </span> : 
                                        `Upgrade membership`
                                }
                            </a>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrettyGrid);