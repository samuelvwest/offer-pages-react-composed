import { showSettingsTest, getPageSettingsLocal, pageTest, elligibilityTest, denyType } from '../actions/pageSettings';



export const pageSettings = getPageSettingsLocal() || {
        location: pageTest(),
        elligibility: elligibilityTest(),
        showSettings: showSettingsTest(),
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        breaks: {
            control: {
                tablet: 601,
                desktop: 769
            }
        },
        LDBM: true, // false, 'toggle-front', 'toggle-back', 'side-by-side'
        displayDurations: [1, 6], // 1, 3, 6, 12
        displayPackages: ['U.S. Discovery', 'World Explorer', 'All Access'], // 'U.S. Discovery', 'World Explorer', 'All Access'
        defaultOfferEmphasis: {
            renewPeriod: 1, // must be included in 'displayDurations' setting
            package: 'U.S. Discovery', // must be included in the 'displayPackages' setting
        },
    }

pageSettings.denyType = denyType(pageSettings.location, window.deniedTo);

export default pageSettings;