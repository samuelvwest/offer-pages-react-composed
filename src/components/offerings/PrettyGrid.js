import React from 'react';
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

const freemiumStyleAdjuster = (colorStackBreak, placement) => {
    if (window.outerWidth >= colorStackBreak) {
        // make sure height of freemium element matches rest of table because, well, there was no other way. :( 
        const freemiumLabel = document.querySelector(`.offerings-placement--${placement} .offer-label--freemium`);
        const firstOfferLabel = document.querySelector(`.offerings-placement--${placement} .offer-label`);
        if (!!freemiumLabel) {
            // setTimeout(() => {
                const extraRows = [].slice.call(document.querySelectorAll(`.offerings-placement--${placement} .offers-grid__row--duration:not(.offers-grid__row--position-first):not(.offers-grid__row--position-only)`))
                if (extraRows.length > 0) {
                    let margin = 0;
                    extraRows.forEach((row) => {
                        margin += row.offsetHeight;
                    })
                    freemiumLabel.style.marginBottom = `-${margin}px`;
                }
            // }, 50)
        } else if (firstOfferLabel.style.marginBottom !== '') {
            firstOfferLabel.style.marginBottom = '';
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
        // let rowWidth = num;
        // if (num > data.cells.maxSizeWithRowLabels) {
        //     rowWidth = Math.min(num, data.cells.maxSizeWithRowLabels)
        //     data.cells.aboveRowMax += 1;
        // }
        // data.gridArea.needed.sizes.push(data.rowLabelWidth + (rowWidth * subs.display.packages.length));
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
    data.cells.fontSize = data.gridArea.needed.sizes.reduce((prev, cur, idx, arr) => {
        // console.log(prev, cur, idx);
        let pre = idx === 1 ? [0, prev] : prev;
        if (data.gridArea.available[data.gridArea.available.use] > cur && cur >= pre[1]) {
            return [idx, cur];
        }
        return pre;
    })[0];
    return data;
}

const DividerCell = ({ idx }) => <td className="offers-table__cell offers-table__cell--divider">&nbsp;</td>

const EmptyCell = ({ cellClasses }) => <div className={`offers-grid__cell offers-grid__cell--empty ${cellClasses}`}>&nbsp;</div>

const LDBMToggleButton = connect(mapStateToProps, mapDispatchToProps)(({ pageSettings: pS, modifyPageSettings, ldbmTest, embeddedInCell }) => (
    <a 
        className="ldbm-toggle-button"
        onClick={() => {
            // console.log('toggle start', pS.LDBM, pS.selectedOffer.ldbm, pS.subscriptions.selectedOffer.ldbm);
            if (!!embeddedInCell) {
                window._embeddedLDBMToggleOnly = true;
                // setTimeout(() => {
                //     if (!!window._embeddedLDBMToggleOnly) {
                //         delete
                //     }
                // }, 250);
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
            // console.log('toggle end', pS.LDBM, pS.selectedOffer.ldbm, pS.subscriptions.selectedOffer.ldbm);
        }}
    >
            or pay {ldbmTest ? `upfront` : `monthly`}
    </a>
));

const PackageHeadingCell = ({ pkgData, pS, offerStyles }) => {
    return (
        <div key={pkgData.id} className={`offers-grid__cell offers-grid__cell--${pkgData.color} offers-grid__cell--column-label`}>
            {(pS.subscriptions.bestOffer.packageID === pkgData.id && pS.subscriptions.display.packages.length > 1) && 
                <div className="badge badgeSize2">
                    {pS.bestOffer.packageID === pkgData.id ? 
                        `MOST POPULAR` : 
                        `BEST VAlUE`
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
                    {/treebuilder/.test(pkgData.id) ? `Free` : <span>Free for 14&nbsp;days</span>}
                </span>
            }
            {/treebuilder/.test(pkgData.id) ? 
                <span>
                    Limited access to records
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

const OfferCell = ({ pS, subs, duration, pkgData, durIndex, displayRowLabels, offerStyles, ldbmToggleButtonTest, rowPosition, modifyPageSettings }) => {
    // Freemium stuffs
    const freemiumTest = /freemium/.test(pkgData.type);
    // Other stuffs
    // console.log(duration);
    const offer = subs.display.offersMap.find((ofr) => {
        const packageTest = pkgData.id === ofr.packageID;
        const renewMonthsTest = duration.num === ofr.renewalPeriod.renewMonths;
        const ldbmTest = duration.ldbm === ofr.ldbm;
        const freemiumMatch = packageTest && freemiumTest;
        const fullMatch = packageTest && renewMonthsTest && ldbmTest;
        // console.log(freemiumMatch, fullMatch);
        return freemiumMatch || fullMatch;
    });
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
        // console.log('offer select start', pS.LDBM, pS.selectedOffer.ldbm, pS.subscriptions.selectedOffer.ldbm);
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

    // console.log(offer);
    return (freemiumTest && durIndex > 0) ? <EmptyCell cellClasses={offerCellClasses} /> : (
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

                {!!offer.promoSavings && 
                    <span className={priceInfoClasses}>
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
                {freemiumTest ?  
                    <span className={priceInfoClasses}>
                        <span className="currency-symbol">$</span>
                        <span className="integer">0</span>
                        <span className="decimal-point">.</span>
                        <span className="decimal-number">00</span>
                    </span> :
                    <span className={priceInfoClasses}>
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
                                {offer.renewalPeriod.billMonths > 1 ? `${offer.renewalPeriod.billMonths} mo.` : `month`}
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
                        Does <strong>not</strong>&nbsp;include:
                        <ul className="bulleted">
                            <li>Premium US&nbsp;records</li>
                            <li>Direct messaging other&nbsp;members</li>
                            <li>Access to over 20 billion global&nbsp;records</li>
                        </ul>
                    </span>
                }
            </label>
        </div>
    )
    const cellClasses = `offers-table__cell offers-table__cell--content offers-table__cell--offer ${!displayRowLabels ? `offers-table__cell--duration-label-embedded` : ``}`;
    const labelClasses = `offer-label ${!displayRowLabels ? `offer-label--duration-embedded` : ``}`;
    // Determine if freemium offer cells and populate accordingly (no actual offers)
    if (/freemium/.test(pkgData.type)) {
        const registrationSubDesc = (
            <span className="offers-table__registration-list-items textsml">
                Does <strong>not</strong>&nbsp;include:
                <ul className="bulleted">
                    <li>Premium UK and Irish&nbsp;records</li>
                    <li>Direct messaging other&nbsp;members</li>
                    <li>Access to over 20 billion global&nbsp;records</li>
                </ul>
            </span>
        )
        const freeRegOnclick = () => {
            modifyPageSettings({ 
                selectedOffer: { 
                    renewMonths: pS.selectedOffer.renewMonths, 
                    packageID: pkgData.id,
                    ldbm: pS.selectedOffer.ldbm
                }
            })
        }
        if (duration.id === subs.durations[0].id) {
            return (
                <td className={cellClasses}>
                    <input 
                        value={pkgData.id} 
                        checked={pS.selectedOffer.packageID === pkgData.id} 
                        onChange={() => {}}
                        type="radio" 
                        name="offers" 
                        aria-labelledby={pkgData.description} 
                    />
                    <label 
                        className={labelClasses}
                        onClick={freeRegOnclick}
                    >
                        <span className="price-group">
                            <span className="price-group__currency">$</span>
                            <span className="price-group__integer">0</span>
                            <span className="price-group__period">.</span>
                            <span className="price-group__decimal">00</span>
                        </span>
                    </label>
                    {subs.durations.length === 1 && registrationSubDesc}
                </td>
            )
        } else {
            return (
                <td 
                    className={cellClasses}
                    onClick={freeRegOnclick}
                >
                    {(duration.id === subs.durations[1].id || (duration.id === subs.durations[2].id && /toggle/.test(pS.LDBM))) && 
                        registrationSubDesc
                    }
                </td>
            )
        }
    }
    // Build actual offer information if not a Freemium offer cell
    // const offer = subs.display.offersMap.find((offer) => {
    //     const packageTest = pkgData.id === offer.packageID;
    //     const renewMonthsTest = duration.num === offer.renewalPeriod.renewMonths;
    //     const ldbmTest = duration.ldbm === offer.ldbm;
    //     return packageTest && renewMonthsTest && ldbmTest;
    // });
    // const savingsVars = offer.promoSavings ? {
    //     display: `promoSavings`,
    //     legalSup: `promoSave`
    // } : !!offer.durationSavings ? {
    //     display: `durationSavings`,
    //     legalSup: `durationSave`
    // } : false;
    // const selectedTest = offer.renewalPeriod.renewMonths === subs.selectedOffer.renewalPeriod.renewMonths && offer.packageID === subs.selectedOffer.packageID && (/side-by-side/.test(pS.LDBM) ? offer.ldbm === subs.selectedOffer.ldbm : true);
    return (
        <td className={cellClasses}>
            <input 
                value={offer.offerIDs[pS.elligibility]} 
                checked={selectedTest} 
                onChange={() => {}}
                type="radio" 
                name="offers" 
                aria-labelledby={offer.description} 
            />
            <label 
                className={labelClasses}
                onClick={() => {
                    // console.log('offer select start', pS.LDBM, pS.selectedOffer.ldbm, pS.subscriptions.selectedOffer.ldbm);
                    if (!!window._embeddedLDBMToggleOnly) {
                        delete window._embeddedLDBMToggleOnly;
                    } else {
                        modifyPageSettings({ 
                            selectedOffer: { 
                                renewMonths: offer.renewalPeriod.renewMonths, 
                                packageID: offer.packageID,
                                ldbm: offer.ldbm
                            }
                        })
                    }
                    // console.log('offer select end', pS.LDBM, pS.selectedOffer.ldbm, pS.subscriptions.selectedOffer.ldbm);
                }
            }>
                {/* {!displayRowLabels &&
                    <span className="column-cell-label">
                        {console.log(offer)}
                        {durationTexts[`dur${offer.renewalPeriod.renewMonths}`]}
                    </span>
                } */}
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
                        const integerTest = index === 0;
                        const useClass = integerTest ? `price-group__integer` : `price-group__decimal`;
                        return <span key={index} className={useClass}>
                            {num}
                            {integerTest && <span className="price-group__period">.</span>}
                            {/* {(!displayRowLabels && !integerTest) && <span>/month</span>} */}
                        </span>
                    })}
                    {!displayRowLabels &&
                        <span className="cell-duration-label">
                            {/* {console.log(offer)} */}
                            /<span className="cell-duration-label__duration">{offer.renewalPeriod.billMonths > 1 ? `${offer.renewalPeriod.billMonths} mo.` : `month`}</span> 
                        </span>
                    }
                </span>
                {offer.ldbm && 
                    <span className="offerPriceTxt--ldbm">
                        {displayRowLabels ? 
                            <span>per&nbsp;month</span> :
                            <span>for&nbsp;{offer.renewalPeriod.renewMonths}&nbsp;months</span>
                        }
                        <LegalSup supRef="longDurationBilledMonthly" goToOnClick={true} />
                    </span>
                }
                {(!displayRowLabels && ldbmToggleButtonTest) && <LDBMToggleButton ldbmTest={duration.ldbm} embeddedInCell={true} />}
                {!!savingsVars && <span className="savingsText text2xlrg coloraltgreen bold">SAVE {offer.currency}{offer[savingsVars.display].display}<LegalSup supRef={savingsVars.legalSup} /></span>}
            </label>
        </td>
    )
}

export class PrettyGrid extends React.Component {
    componentDidMount() {
        freemiumStyleAdjuster(this.props.pageSettings.breaks.prettyGrid.tablet, this.props.placement);
    }
    componentDidUpdate() {
        freemiumStyleAdjuster(this.props.pageSettings.breaks.prettyGrid.tablet, this.props.placement);
    }
    render() {
        const pS = this.props.pageSettings;
        if (this.props.pageSettings.windowWidth < this.props.pageSettings.breaks.prettyGrid.tablet) {
            // Color Stack for Phone on all offer pages
            return <ColorStack placement={this.props.placement}/>
        }
        const subs = pS.subscriptions;
        const splitPackagesArr = [];
        // Check for Freemium/Treebuilder inclusion
        // if (/treebuilder/.test(pS.displayPackages)) {
        //     splitPackagesArr.push(pS.packagesData.find((pkg) => pkg.id === `treebuilder`));
        //     splitPackagesArr.push({ divider: true });
        // }
        // Build rest of standard package data array
        subs.display.packages.forEach((pkgData, index) => {
            if (index > 0) {
                splitPackagesArr.push({ divider: true })
            }
            pkgData.divider = false;
            splitPackagesArr.push(pkgData);
        })
        const ftTest = /initial/.test(pS.elligibility);
        const displayRowLabels = this.props.pageSettings.displayRowLabels && !/treebuilder/.test(pS.displayPackages);
        // const offersGridStyle = window.outerWidth <= 1005 || subs.display.packages.length > 3;
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
       console.log(offerStyles);

        // console.log(displayRowLabels)
        return (
            <div className={`${classesMaker('prettygrid')} offerings-placement--${this.props.placement}${/bottom/.test(this.props.placement) ? ` scroll-tracking--lowerOfferings` : ``}`}>
                <section className="offers-container">
                    {/* <div className="page pageWidth1 pagePadded"> */}
                        <form className="offers-form" action="/checkout/mli?" 
                            ref={(ref) => { this.sparklyDragonForm = ref }}
                            onSubmit={(e) => {
                                adobeTargetTrackEvent({
                                    eventType: 'offersFormSubmit',
                                    formLoc: this.props.placement,
                                    offerID: subs.selectedOffer.id,
                                    offeringsCreative: `prettygrid`
                                })
                                console.log(e.target.offers.value);
                                // e.target.submit();
                            }}
                        >
                            {!!pS.returnURL && <input type="hidden" name="returnUrl" value={pS.returnURL} />}
                            <input type="hidden" name="direct" value="1" />
                            <input type="hidden" name="rtype" value={ftTest ? '14' : '11'} />
                            <input type="hidden" name="quantities" value="1" />
                            <input type="hidden" name="flow" value="3" />
                            {/* <div className=""> */}
                                <div className={`offers-grid offers-grid--cta-placement-${offerStyles.ctaArea.placement} offers-grid--row-labels-${displayRowLabels}`}>
                                    <div className="offers-grid__row">
                                        {/* {displayRowLabels && <div className="offers-grid__cell offers-grid__cell--empty"></div>} */}
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
                                        // console.log(rowPosition);
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
                                    {/* <table className="offers-table topSpacingBlock">
                                        <tbody>
                                            <tr className="offers-table__row offers-table__row--header">
                                                {displayRowLabels && <td className="offers-table__cell offers-table__cell--memberships offers-table_cell--row-label"></td>}
                                                {splitPackagesArr.map((pkgData, index) => pkgData.divider ? 
                                                    <DividerCell key={index} idx={index} /> : 
                                                    <PackageHeadingCell 
                                                        key={index} 
                                                        pkgData={pkgData} 
                                                        idx={index} 
                                                        psBestOffer={pS.bestOffer.packageID}
                                                        displayRowLabels={displayRowLabels}
                                                    />
                                                )}
                                            </tr>
                                            {!displayRowLabels && 
                                                <tr className="offers-table__row offers-table__row--column-renewal-text">
                                                    {splitPackagesArr.map((pkgData, index) => pkgData.divider ? 
                                                        <DividerCell key={index} idx={index} /> : 
                                                        <ColumnRenewalTextCell 
                                                            key={index} 
                                                            pkgData={pkgData} 
                                                            idx={index} 
                                                            ftTest={ftTest}
                                                        />
                                                    )}
                                                </tr>
                                            }
                                            {subs.display.durations.map((duration, index) => {
                                                const ldbmToggleButtonTest = duration.num > 1 && !!pS.LDBM && /toggle/.test(pS.LDBM);
                                                const rowPosition = subs.display.durations.length === 1 ? `only` : index === 0 ? `first` : (index + 1) === subs.display.durations.length ? `last` : `middle`;
                                                // console.log(rowPosition);
                                                return (
                                                    <tr key={`${duration.num}MR_${duration.ldbm ? 1 : duration.num}MB`} className={`offers-table__row offers-table__row--duration offers-table__row--position-${rowPosition}`}>
                                                        {displayRowLabels &&
                                                            <RowLabelCell 
                                                                duration={duration} 
                                                                ldbmToggleButtonTest={ldbmToggleButtonTest} 
                                                                modifyPageSettings={this.props.modifyPageSettings}
                                                            />
                                                        }
                                                        {splitPackagesArr.map((pkgData, index)  => pkgData.divider ? 
                                                            <DividerCell key={index} idx={index} /> : 
                                                            <SelectableOfferCell 
                                                                key={index}
                                                                subs={subs}
                                                                duration={duration}
                                                                pkgData={pkgData}
                                                                idx={index}
                                                                pS={pS}
                                                                displayRowLabels={displayRowLabels}
                                                                ldbmToggleButtonTest={ldbmToggleButtonTest} 
                                                                modifyPageSettings={this.props.modifyPageSettings}
                                                             />
                                                        )}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table> */}
                                    {/* {(subs.display.durations.some((duration) => duration.num > 1) && /toggle-back/.test(pS.LDBM)) &&
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
                                    } */}
                                    {subs.ldbms && 
                                        <div 
                                            className="legal-wrapper"
                                            style={{maxWidth: `${offerStyles.gridArea.needed.max}px`}}
                                        >
                                            <LegalLongDurationBilledMonthly/>
                                        </div>
                                    }
                                </div>
                                {/* <div className="ancGridBreak768"></div> */}
                                <div className={`offers-form__cta offers-form__cta--placement-${offerStyles.ctaArea.placement} offers-form__cta--row-labels-${displayRowLabels}`}>
                                    <div className="cta-arrow"></div>
                                    <a href="" className="ancBtn orange lrg submit-button"
                                        onClick={(e) => { 
                                            e.preventDefault();
                                            this.sparklyDragonForm.dispatchEvent(new Event('submit')); 
                                        }}
                                    >
                                        {/initial/.test(pS.elligibility) ? 
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
                            {/* </div> */}
                        </form>
                    {/* </div> */}
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrettyGrid);