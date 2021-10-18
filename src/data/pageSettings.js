import { showSettingsTest, getPageSettingsLocal, getLocation, getElligibility, getReturnURL } from '../actions/pageSettings';
import { getLocalStorageItem } from '../actions/utilities';
import { subscriptions, packagesData } from './subscriptions';
import { buildDisplayOffersData, filterDisplayPackages } from '../actions/subscriptions';

export const displayPackages = ['usdiscovery', 'worldexplorer', 'allaccess'] // 'usdiscovery', 'worldexplorer', 'allaccess' 
export const displayDurations = [1, 6] // 1, 3, 6, 12

export const pageSettings = getPageSettingsLocal() || {
    location: getLocation(),
    denyLevel: 1,
    elligibility: 'initial',
    showSettings: showSettingsTest(),
    settingsCollapsed: false,
    windowWidth: window.outerWidth,
    windowHeight: window.outerWidth,
    breaks: {
        control: {
            tablet: 601,
            desktop: 769
        },
        sparklydragon: {
            desktop: 768
        },
        prettyGrid: {
            tablet: 601
        }
    },
    audiences: [ ], // any audience the CDP views as qualified can be placed as a 'string' in this array to be targeted by any and all components on the page. 
    LDBM: 'toggle-front', // false, 'toggle-front', 'toggle-back', 'side-by-side', 'only'
    displayDurations,
    displayPackages,
    selectedOffer: {
        renewMonths: 6, // must be included in 'displayDurations' setting
        packageID: 'worldexplorer', // must be included in the 'displayPackages' setting
        ldbm: true // true/false value only factored in if 'LDBM' setting is 'side-by-side'
    },
    bestOffer: {
        renewMonths: 6, // must be included in 'displayDurations' setting
        packageID: 'worldexplorer', // must be included in 'displayPackages' setting
        ldbm: true // true/false value only factored in if 'LDBM' setting is 'side-by-side'
    },
    currentOffer: {
        renewMonths: 6, // must be included in 'displayDurations' setting
        packageID: 'worldexplorer', // must be included in 'displayPackages' setting
        ldbm: false // true/false value only factored in if 'LDBM' setting is 'side-by-side'
    },
    packagesData
}

if (/ancestry/.test(location.hostname)) {
    pageSettings.location = getLocation();
    const customerObj = getLocalStorageItem('customerObject')
    if (!!customerObj && !!customerObj.lio_segments) {
        customerObj.lio_segments.forEach((audience) => {
            if (pageSettings.audiences.indexOf(audience) === -1) {
                pageSettings.audiences.push(audience);
            }
        });
    }
    pageSettings.elligibility = getElligibility({ audiences: pageSettings.audiences });
}
pageSettings.returnURL = getReturnURL();
pageSettings.displayPackages = filterDisplayPackages(pageSettings.displayPackages, packagesData, pageSettings.denyLevel);
pageSettings.subscriptions = buildDisplayOffersData(pageSettings, subscriptions);

export default pageSettings;