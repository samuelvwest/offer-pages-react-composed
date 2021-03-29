import { showSettingsTest, getPageSettingsLocal, pageTest, elligibilityTest, denyType, getReturnURL } from '../actions/pageSettings';
import { subscriptions, packagesData } from './subscriptions';
import { buildDisplayOffersData, filterDisplayPackages } from '../actions/subscriptions';



export const pageSettings = getPageSettingsLocal() || {
    location: pageTest(),
    denyLevel: 1,
    elligibility: elligibilityTest(),
    showSettings: showSettingsTest(),
    settingsCollapsed: false,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    breaks: {
        control: {
            tablet: 601,
            desktop: 769
        }
    },
    LDBM: 'side-by-side', // false, 'toggle-front', 'toggle-back', 'side-by-side', 'only'
    displayDurations: [1, 3, 6, 12], // 1, 3, 6, 12
    displayPackages: ['usdiscovery', 'worldexplorer', 'allaccess'], // 'usdiscovery', 'worldexplorer', 'allaccess' 
    selectedOffer: {
        renewMonths: 1, // must be included in 'displayDurations' setting
        packageID: 'usdiscovery', // must be included in the 'displayPackages' setting
        ldbm: false // true/false value only factored in if 'LDBM' setting is 'side-by-side'
    },
    bestOffer: {
        renewMonths: 6, // must be included in 'displayDurations' setting
        packageID: 'worldexplorer', // must be included in 'displayPackages' setting
        ldbm: true // true/false value only factored in if 'LDBM' setting is 'side-by-side'
    },
    packagesData
}

pageSettings.returnURL = getReturnURL();
pageSettings.displayPackages = filterDisplayPackages(pageSettings.displayPackages, packagesData, pageSettings.denyLevel);
pageSettings.subscriptions = buildDisplayOffersData(pageSettings, subscriptions);

export default pageSettings;