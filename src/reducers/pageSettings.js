import { pageSettings, displayPackages } from '../data/pageSettings';
import { setPageSettingsLocal, getElligibility } from '../actions/pageSettings';
import { buildDisplayOffersData, filterDisplayPackages } from './../actions/subscriptions';
import { adobeTargetTrackEvent } from './../actions/tracking';

export default (state = pageSettings, action) => {
    switch (action.type) {
        case 'REPLACE_PAGE_SETTINGS':
            setPageSettingsLocal(action.pageSettings);
            return action.pageSettings;
        case 'MODIFY_PAGE_SETTINGS':
            const nextState = Object.assign({}, state);
            // console.log(action.pageSettings);
            Object.keys(action.pageSettings).forEach((key) => {
                if (!/subscriptions|source|audiences/.test(key)) {
                    // console.log(key);
                    nextState[key] = action.pageSettings[key];
                }
            });
            if (!!action.pageSettings.audiences) {
                const addArr = [];
                const removeArr = [];
                action.pageSettings.audiences.forEach((audience) => {
                    if (typeof audience === 'string') {
                        addArr.push(audience)
                    } else if (typeof audience === 'object') {
                        if (!!audience.remove) {
                            removeArr.push(audience.remove);
                        }
                        if (!!audience.add) {
                            addArr.push(audience.add)
                        }
                    } else {
                        console.log('structure of audiences to define is unrecognized')
                    }                    
                })
                addArr.forEach((audience) => {
                    if (nextState.audiences.indexOf(audience) === -1) {
                        nextState.audiences.push(audience)
                    }
                })
                removeArr.forEach((audience) => {
                    const audienceIndex = nextState.audiences.indexOf(audience);
                    if (audienceIndex > -1) {
                        nextState.audiences.splice(audienceIndex, 1);
                    }
                })
            }
            if (!!action.pageSettings.location || !!action.pageSettings.audiences) {
                nextState.elligibility = action.pageSettings.elligibility || getElligibility({
                    location: nextState.location, 
                    audiences: nextState.audiences
                });
            }
            if (
                !!action.pageSettings.displayPackages 
                || !!action.pageSettings.denyLevel 
                || !!action.pageSettings.packageData
            ) {
                nextState.displayPackages = filterDisplayPackages(
                    action.pageSettings.displayPackages || displayPackages, 
                    action.pageSettings.packagesData || state.packagesData, 
                    action.pageSettings.denyLevel || state.denyLevel
                )
            }
            const subscriptionsToUse = !!action.pageSettings.subscriptions ? action.pageSettings.subscriptions : state.subscriptions.offersMap;
            nextState.subscriptions = buildDisplayOffersData(nextState, subscriptionsToUse);
            // if (!nextState.subscriptions.ldbms && /toggle-front|only/.test(nextState.LDBM)) {
            //     // console.log(state)
            //     // console.log(nextState)
            //     nextState.LDBM = false;
            // }
            const localState = Object.assign({}, nextState);
            localState.audiences = []
            setPageSettingsLocal(localState);
            // Selected Offer Tracking 
            if (!!action.pageSettings.selectedOffer && (!action.pageSettings.source || !/variableSet/.test(action.pageSettings.source))) {
                const passObj = {
                    eventType: 'changedSelectedOffer'
                };
                Object.keys(state.selectedOffer).forEach((key) => {
                    passObj[key] = !!action.pageSettings.selectedOffer[key] ? action.pageSettings.selectedOffer[key].toString() : state.selectedOffer[key].toString();
                })
                Object.keys(action.pageSettings.selectedOffer).forEach((key) => {
                    if (state.selectedOffer[key] !== action.pageSettings.selectedOffer[key]) {
                        passObj[key] = `${action.pageSettings.selectedOffer[key]}_changed`;
                    }
                })
                // if (Object.keys(passObj).length > 1) {
                    adobeTargetTrackEvent(passObj)
                // }
            }
            return nextState;
        default: 
            return state;
    }
}