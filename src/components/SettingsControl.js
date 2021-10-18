import React from 'react';
import { connect } from 'react-redux';
import { durationTexts, subscriptions, winbackSubscriptions, noABMorQBM, promoSubscriptions, semiDiscountTest } from '../data/subscriptions';
import { modifyPageSettings, removePageSettingsLocal } from '../actions/pageSettings';
import { modifyVariables, removeVariablesLocal } from '../actions/variables';

const mapStateToProps = (state) => ({
    pageSettings: state.pageSettings,
    variables: state.variables
});

const mapDispatchToProps = (dispatch) => ({
    modifyPageSettings: (modifications) => dispatch(modifyPageSettings(modifications)),
    modifyVariables: (modifications) => dispatch(modifyVariables(modifications))
});

const SettingsButton = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const modifyGroup = /pageSettings/.test(props.settingGroup) ? props.modifyPageSettings : props.modifyVariables;
    let additionalFunc = () => {};
    let activeTest = props[props.settingGroup][props.settingAttribute] === props.settingValue;
    let modifications = {};
    modifications[props.settingAttribute] = props.settingValue;
    if (/selectedOffer/.test(props.settingAttribute)) {
        activeTest = props.settingValue.renewMonths === props.pageSettings.selectedOffer.renewMonths && props.settingValue.packageID === props.pageSettings.selectedOffer.packageID && props.settingValue.ldbm === props.pageSettings.selectedOffer.ldbm;
    } else if (/settingsCollapsed/.test(props.settingAttribute)) {
        activeTest = props.pageSettings.settingsCollapsed;
        modifications.settingsCollapsed = !props.pageSettings.settingsCollapsed;
    } else if (/audiences/.test(props.settingAttribute)) {
        activeTest = props.pageSettings[props.settingAttribute].indexOf(props.settingValue) > -1;
        modifications[props.settingAttribute] = !!activeTest ? [{ remove: props.settingValue }] : [ props.settingValue ]
    } else if (/displayPackages/.test(props.settingAttribute)) {
        modifications[props.settingAttribute] = [...props.pageSettings.displayPackages]
        const pkgData = props.pageSettings.packagesData.find((pkg) => props.settingValue === pkg.id);
        const pkgIndex = modifications[props.settingAttribute].indexOf(pkgData.id);
        activeTest = pkgIndex !== -1;
        if (activeTest) {
            modifications[props.settingAttribute].splice(pkgIndex, 1);
        } else {
            modifications[props.settingAttribute].splice(modifications[props.settingAttribute].length, 0, pkgData.id);
        }
    } else if (/displayDurations/.test(props.settingAttribute)) {
        modifications[props.settingAttribute] = [...props.pageSettings.displayDurations]
        const durationData = {
            renewMonths: Number(props.settingValue),
            text: durationTexts[`dur${props.settingValue}`]
        }
        const durationIndex = modifications[props.settingAttribute].indexOf(durationData.renewMonths);
        activeTest = durationIndex !== -1;
        if (activeTest) {
            modifications[props.settingAttribute].splice(durationIndex, 1);
        } else {
            modifications[props.settingAttribute].splice(modifications[props.settingAttribute].length, 0, durationData.renewMonths);
        }
    } else if (/subscriptions/.test(props.settingAttribute)) {
        activeTest = !(props.pageSettings.subscriptions.offersMap.length < 7);
        modifications.subscriptions = subscriptions;
        if (/winback/.test(props.settingValue)) {
            activeTest = props.pageSettings.subscriptions.offersMap.length < 7;
            modifications.subscriptions = winbackSubscriptions;
            if (/toggle|only/.test(props.pageSettings.LDBM)) {
                additionalFunc = () => {
                    props.modifyPageSettings({
                        LDBM: false
                    });
                }
            }
        // } else if (/promo/.test(props.settingValue)) {
        //     activeTest = !!props.pageSettings.subscriptions.promoSaveOffers;
        //     modifications.subscriptions = promoSubscriptions;
        } else if (/sabm/.test(props.settingValue)) {
            const offersMap = semiDiscountTest[props.settingValue];
            // console.log(offersMap);
            activeTest = offersMap.length === props.pageSettings.subscriptions.offersMap.length;
            modifications.subscriptions = offersMap;
        } else if (/noABMorQBM/.test(props.settingValue)) {
            const offersMap = noABMorQBM;
            // console.log(offersMap);
            activeTest = offersMap.length === props.pageSettings.subscriptions.offersMap.length;
            modifications.subscriptions = offersMap;
        }
    } else if (/packageEmphasis/.test(props.settingAttribute)) {
        additionalFunc = () => {
            props.modifyPageSettings({
                selectedOffer: {
                    renewMonths: props.pageSettings.selectedOffer.renewMonths,
                    packageID: props.settingValue,
                    ldbm: props.pageSettings.selectedOffer.ldbm 
                }
            });
        }
    } else if (/durationEmphasis/.test(props.settingAttribute)) {
        let pSMods = {};
        pSMods.selectedOffer = {
            renewMonths: /monthly/.test(props.settingValue) ? 1 : 6,
            packageID: props.pageSettings.selectedOffer.packageID,
            ldbm: /sabm/.test(props.settingValue) 
        }
        if (/toggle/.test(props.pageSettings.LDBM) && pSMods.selectedOffer.renewMonths > 1) {
            pSMods.LDBM = `toggle-${pSMods.selectedOffer.ldbm ? `front` : `back`}`;
        }
        additionalFunc = () => {
            props.modifyPageSettings(pSMods);
        }
    }
    const classes = `settings__group__button settings__group__button--${props.displayText.toLowerCase().replace(/ /g, '-')}${activeTest ? ` settings__group__button--active` : ``}`;
    if (props.pageSettings.location === 'join' && !window.deniedTo) {
        window.deniedTo = {
            DenyToV1: 'Ancestry_US_Deluxe',
            DenyToV2: 'Ancestry_World_Deluxe'
        }
    }
    return <button className={classes} onClick={() => {
        modifyGroup(modifications);
        additionalFunc();
    }}>{props.displayText}</button>
});

const SettingsDropDown = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const modifyGroup = /pageSettings/.test(props.settingGroup) ? props.modifyPageSettings : props.modifyVariables;
    const newSelection = (e, valueGroup) => {
        let modifications = {};
        modifications[props.settingAttribute] = props[props.settingGroup][props.settingAttribute]
        modifications[props.settingAttribute][valueGroup] = /renewMonths/.test(valueGroup) ? Number(e.target.value) : /ldbm/.test(valueGroup) ? /true/.test(e.target.value) : e.target.value;
        modifyGroup(modifications);
    }
    let valueOptions = [{ name: `Paid Monthly`, value: true }, { name: `Paid Upfront`, value: false }];
    let valueGroup = `ldbm`;
    if (/displayDurations/.test(props.settingValue)) {
        valueOptions = props.pageSettings.displayDurations.map((duration) => ({ 
            name: durationTexts[`dur${duration}`],
            value: Number(duration)
        }))
        valueGroup = `renewMonths`;
    } else if (/displayPackages/.test(props.settingValue)) {
        valueOptions = props.pageSettings.displayPackages.map((pkg) => { 
            const pkgData = props.pageSettings.packagesData.find((pkg2) => pkg2.id === pkg);
            return {
                name: pkgData.name,
                value: pkgData.id
            }
        })
        valueGroup = `packageID`;
    }
    const selectedObj = valueOptions.find((valOpt) => props[props.settingGroup].subscriptions[props.settingAttribute][valueGroup] === valOpt.value)

    return (
        <select className="settings__group__dropdown" name={`${props.settingAttribute}-${props.settingValue}`} onChange={(e) => { newSelection(e, valueGroup) }} value={selectedObj.value}>
            {valueOptions.map((valOpt) => <option key={`${props.settingAttribute}-${valueGroup}_from_${props[props.settingGroup][props.settingAttribute][valueGroup]}_to_${valOpt.value}`} value={valOpt.value}>{valOpt.name}</option>)}
        </select>
    )
})

const DeniedToButton = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const denyPackage = props.pageSettings.packagesData.find((pkg) => pkg.denyStr === props.deniedTo);
    const classesMaker = () => {
        const activeClass = props.pageSettings.denyLevel === denyPackage.order  ? ` settings__group__button--active` : ``;
        const hideClass = props.pageSettings.location !== 'join' ? ` settings__group__button--hide` : ``;
         return `settings__group__button settings__group__button--deniedto${activeClass}${hideClass}`;
    }
    return <button className={classesMaker()} onClick={() => props.modifyPageSettings({ denyLevel: denyPackage.order })}>{props.displayText}</button>
});

const SettingsGrouping = connect(mapStateToProps)((props) => (!props.collapsable || (!!props.collapsable && !props.pageSettings.settingsCollapsed)) ? (
    <div className="settings__grouping">
        {!!props.groupName && <h4 className="settings__groupings__name">{props.groupName}</h4>}
        {props.children}
    </div>
) : <div></div>)

const SettingsControl = connect(mapStateToProps)((props) => (
    <div className="settings">
        <SettingsGrouping collapsable={false}>
            <SettingsButton 
                settingGroup="pageSettings"
                settingAttribute="showSettings" 
                settingValue={false} 
                displayText="Hide All" 
            />
            <button className="settings__group__button settings__group__button--clear" onClick={
                () => { 
                    removePageSettingsLocal(); 
                    removeVariablesLocal(); 
                    location.reload();
                }
            }>Clear</button>
            <SettingsButton 
                settingGroup="pageSettings"
                settingAttribute="settingsCollapsed" 
                settingValue={true} 
                displayText="Collapse" 
            />
        </SettingsGrouping>
        <SettingsGrouping collapsable={true} groupName="Page Settings">
            <div className="settings__group">
                <h5 className="settings__group__name">Location</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="location" 
                    settingValue="freetrial" 
                    displayText="FTLP" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="location" 
                    settingValue="subscribe" 
                    displayText="HOLP" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="location" 
                    settingValue="join" 
                    displayText="CARE" 
                />
                <DeniedToButton
                    deniedTo="Ancestry_US_Deluxe"
                    displayText="US Deluxe"
                />
                <DeniedToButton
                    deniedTo="Ancestry_World_Deluxe"
                    displayText="World"
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Elligibility</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="elligibility" 
                    settingValue="initial" 
                    displayText="Initial" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="elligibility" 
                    settingValue="renewal" 
                    displayText="Renewal" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="elligibility" 
                    settingValue="migration" 
                    displayText="Migration" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Audiences</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="chrome_users"
                    displayText="Chrome Browser" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="reactivation"
                    displayText="Reactivation" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="noydb_w18iwa28jg"
                    displayText="Not Free Trial Elligible" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="winback" 
                    displayText="Winback" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="winback_days55_58_90_bau" 
                    displayText="Email Winback Discount Cell" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="winback_days55_58_90_sabm" 
                    displayText="Email Winback SABM Cell" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="noydb_g3rdljj5qa" 
                    displayText="Onsite Winback Discount Cell" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="audiences" 
                    settingValue="noydb_kupi9jrk3n" 
                    displayText="Onsite Winback SABM Cell" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Packages</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayPackages" 
                    settingValue="usdiscovery" 
                    displayText="U.S. Discovery" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayPackages" 
                    settingValue="worldexplorer" 
                    displayText="World Explorer" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayPackages" 
                    settingValue="allaccess" 
                    displayText="All Access" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Durations</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayDurations" 
                    settingValue="1" 
                    displayText="Monthly" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayDurations" 
                    settingValue="3" 
                    displayText="Quarterly" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayDurations" 
                    settingValue="6" 
                    displayText="Semi-Annual" 
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="displayDurations" 
                    settingValue="12" 
                    displayText="Annual" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Long Durations Billed Monthly</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="LDBM" 
                    settingValue={false} 
                    displayText="Not Included"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="LDBM" 
                    settingValue="only" 
                    displayText="Only"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="LDBM" 
                    settingValue="side-by-side" 
                    displayText="Side by Side"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="LDBM" 
                    settingValue="toggle-front" 
                    displayText="Toggle Front"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="LDBM" 
                    settingValue="toggle-back" 
                    displayText="Toggle Back"
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Selected Offer</h5>
                <SettingsDropDown 
                    settingGroup="pageSettings"
                    settingAttribute="selectedOffer" 
                    settingValue="displayDurations"
                />
                <SettingsDropDown 
                    settingGroup="pageSettings"
                    settingAttribute="selectedOffer" 
                    settingValue="ldbm"
                />
                <SettingsDropDown 
                    settingGroup="pageSettings"
                    settingAttribute="selectedOffer" 
                    settingValue="displayPackages"
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Best Offer</h5>
                <SettingsDropDown 
                    settingGroup="pageSettings"
                    settingAttribute="bestOffer" 
                    settingValue="displayDurations"
                />
                <SettingsDropDown 
                    settingGroup="pageSettings"
                    settingAttribute="bestOffer" 
                    settingValue="ldbm"
                />
                <SettingsDropDown 
                    settingGroup="pageSettings"
                    settingAttribute="bestOffer" 
                    settingValue="displayPackages"
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Subscriptions</h5>
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="standard" 
                    displayText="Standard Offers"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="winback" 
                    displayText="Winback Offers"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="noABMorQBM" 
                    displayText="No ABM or QBM"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa30sabm30" 
                    displayText="SA:30 | SABM:30"
                />
                {/* <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa25sabm25" 
                    displayText="SA:25 | SABM:25"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa20sabm20" 
                    displayText="SA:20 | SABM:20"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa15sabm15" 
                    displayText="SA:15 | SABM:15"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa35sabm25" 
                    displayText="SA:35 | SABM:25"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa35sabm15" 
                    displayText="SA:35 | SABM:15"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa30sabm15" 
                    displayText="SA:30 | SABM:15"
                />
                <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="sa25sabm15" 
                    displayText="SA:25 | SABM:15"
                /> */}
                {/* <SettingsButton 
                    settingGroup="pageSettings"
                    settingAttribute="subscriptions" 
                    settingValue="promo" 
                    displayText="Promo Offers"
                /> */}
            </div>
        </SettingsGrouping>
        <SettingsGrouping collapsable={true} groupName="Test Variables">
            <div className="settings__group">
                <h5 className="settings__group__name">Header Text</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="headerText" 
                    settingValue="control" 
                    displayText="Control" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="headerText" 
                    settingValue="sparkly-dragon" 
                    displayText="Sparkly Dragon" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Support Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="supportSection" 
                    settingValue={true} 
                    displayText="Control (included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="supportSection" 
                    settingValue={false} 
                    displayText="Not Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Features Grid</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="featuresGrid" 
                    settingValue="control" 
                    displayText="Control" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="featuresGrid" 
                    settingValue="sparkly-dragon" 
                    displayText="Sparkly Dragon" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="featuresGrid" 
                    settingValue="pretty-grid" 
                    displayText="Pretty Grid" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="featuresGrid" 
                    settingValue="not-included" 
                    displayText="Not Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Testimonial Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="testimonialSection" 
                    settingValue={true} 
                    displayText="Control (included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="testimonialSection" 
                    settingValue={false} 
                    displayText="Not Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Info Sections</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="infoSections" 
                    settingValue={false} 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="infoSections" 
                    settingValue={true} 
                    displayText="Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Video Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="videoSection" 
                    settingValue={false} 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="videoSection" 
                    settingValue="modal" 
                    displayText="Modal" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="videoSection" 
                    settingValue="embedded" 
                    displayText="Embedded" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Examples Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="examplesSection" 
                    settingValue={false} 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="examplesSection" 
                    settingValue={true} 
                    displayText="Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">FAQs Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="faqsSection" 
                    settingValue="not-included" 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="faqsSection" 
                    settingValue="sparkly-dragon" 
                    displayText="Sparkly Dragon" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="faqsSection" 
                    settingValue="pretty-grid"
                    displayText="Pretty Grid" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Other Products Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="otherProductsSection" 
                    settingValue={false} 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="otherProductsSection" 
                    settingValue={true} 
                    displayText="Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Privacy Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="privacySection" 
                    settingValue={false} 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="privacySection" 
                    settingValue={true} 
                    displayText="Included" 
                />
            </div>
            <div className="settings__group">
                <h5 className="settings__group__name">Feedback Section</h5>
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="feedbackSection" 
                    settingValue={false} 
                    displayText="Control (not included)" 
                />
                <SettingsButton 
                    settingGroup="variables"
                    settingAttribute="feedbackSection" 
                    settingValue={true} 
                    displayText="Included" 
                />
            </div>
        </SettingsGrouping>
    </div>
));

export default SettingsControl;
