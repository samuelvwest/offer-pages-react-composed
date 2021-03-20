import React from 'react';
import { connect } from 'react-redux';
import { modifyPageSettings, removePageSettingsLocal } from '../actions/pageSettings';
import { modifyVariables, removeVariablesLocal } from '../actions/variables';

const mapStateToProps = (state) => ({
    pageSettings: state.pageSettings,
    variables: state.variables,
    subscriptions: state.subscriptions
});

const mapDispatchToProps = (dispatch) => ({
    modifyPageSettings: (modifications) => dispatch(modifyPageSettings(modifications)),
    modifyVariables: (modifications) => dispatch(modifyVariables(modifications))
});

const SettingsButton = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const modifyGroup = /pageSettings/.test(props.settingGroup) ? props.modifyPageSettings : props.modifyVariables;
    const classes = `settings__group__button${props[props.settingGroup][props.settingAttribute] === props.settingValue ? ` settings__group__button--active` : ``}`;
    let modifications = {};
    modifications[props.settingAttribute] = props.settingValue;
    if (props.pageSettings.location === 'join' && !window.deniedTo) {
        window.deniedTo = {
            DenyToV1: 'Ancestry_US_Deluxe',
            DenyToV2: 'Ancestry_World_Deluxe'
        }
    }
    return <button className={classes} onClick={() => modifyGroup(modifications)}>{props.displayText}</button>
});

const DeniedToButton = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const classesMaker = () => {
        const activeClass = props.pageSettings.denyType === props.deniedTo  ? ` settings__group__button--active` : ``;
        const hideClass = props.pageSettings.location !== 'join' ? ` settings__group__button--hide` : ``;
         return `settings__group__button settings__group__button--deniedto${activeClass}${hideClass}`;
    }
    return <button className={classesMaker()} onClick={() => props.modifyPageSettings({ denyType: props.deniedTo })}>{props.displayText}</button>
});


const SettingsControl = () => (
    <div className="settings">
        <div className="settings__group">
            <SettingsButton 
                settingGroup="pageSettings"
                settingAttribute="showSettings" 
                settingValue={false} 
                displayText="Hide Settings" 
            />
            <button className="settings__group__button settings__group__button--clear-local" onClick={
                () => { 
                    removePageSettingsLocal(); 
                    removeVariablesLocal(); 
                    location.reload();
                }
            }>Clear Settings</button>
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
                settingValue="freetrial" 
                displayText="Free Trial" 
            />
            <SettingsButton 
                settingGroup="pageSettings"
                settingAttribute="elligibility" 
                settingValue="hardoffer" 
                displayText="Hard Offer" 
            />
        </div>
        {/* <hr /> */}
        <div className="settings__group">
            <h5 className="settings__group__name">Header Style</h5>
            <SettingsButton 
                settingGroup="variables"
                settingAttribute="headerStyle" 
                settingValue="control" 
                displayText="Control" 
            />
            <SettingsButton 
                settingGroup="variables"
                settingAttribute="headerStyle" 
                settingValue="sparkly-dragon" 
                displayText="Sparkly Dragon" 
            />
            <SettingsButton 
                settingGroup="variables"
                settingAttribute="headerStyle" 
                settingValue="color-columns" 
                displayText="Color Columns" 
            />
        </div>
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
            <h5 className="settings__group__name">Timeline</h5>
            <SettingsButton 
                settingGroup="variables"
                settingAttribute="timeline" 
                settingValue={false} 
                displayText="Control (Hidden)" 
            />
            <SettingsButton 
                settingGroup="variables"
                settingAttribute="timeline" 
                settingValue={true} 
                displayText="Present" 
            />
        </div>
        <div className="settings__group">
            <h5 className="settings__group__name">Offerings</h5>
            <SettingsButton 
                settingGroup="variables"
                settingAttribute="offerStyle" 
                settingValue="control" 
                displayText="Control" 
            />
        </div>
    </div>
)

export default SettingsControl;
