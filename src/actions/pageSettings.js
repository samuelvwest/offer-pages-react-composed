// Test if settings should be displayed
export const showSettingsTest = () => {
    return /localhost:8080|showsettings/.test(document.location.href)
            && !/hidesettings/.test(document.location.href);
}

// Set pageSettings {} in localStorage
export const setPageSettingsLocal = (pageSettings) => {
    if (showSettingsTest()) {
        const pageSettingsObj = Object.assign({}, pageSettings);
        pageSettingsObj.showSettings = true;
        window.localStorage.pageSettings = JSON.stringify(pageSettingsObj);
    }
}

// Get pageSettings {} from localStorage
export const getPageSettingsLocal = () => {
    if (!!window.localStorage && !!window.localStorage.pageSettings && showSettingsTest()) {
        return JSON.parse(window.localStorage.pageSettings);
    }
    return false;
}

// Remove pageSettings {} from localStorage
export const removePageSettingsLocal = () => {
    delete window.localStorage.pageSettings;
}

// Determine which page this is placed on
export const getLocation = () => {
    const liveLocationCheck = document.location.pathname.match(`offers\/?(.*)`);
    return !!liveLocationCheck ? liveLocationCheck[1] : `freetrial`;
}

// Get return URL for CARE/Deny Pages
export const getReturnURL = () => {
    const returnURL = document.location.search.match(/url=([^&]+)/);
    return !!returnURL ? returnURL[1] : false;
}

// Determine if elligible for Free Trial offer
export const getElligibility = ({ location, audiences }) => {
    const loc = location || getLocation();
    const auds = audiences || [];
    const getBait = document.cookie.match(`BAIT([^; ]+)`);
    const bait = !!getBait ? getBait[0] : '';
    const getOmniture = document.cookie.match(`OMNITURE([^; ]+)`);
    const omni = !!getOmniture ? getOmniture[0] : '';
    // console.log(loc);
    let subEl = 'initial';

    if (!/freetrial/.test(loc)) { // ensure free trial offer views on this page
        if ( // renewal tests
            /subscribe/.test(loc)
            || /E(Trial|Sub)%3D1/.test(bait)
            || /(S|s)ubscriber/.test(omni)
            || [
                'noydb_w18iwa28jg', // Not Free Trial Elligible Audience
                'winback_days55_58_90_bau', // Email Winback Discount Test Cell
                'winback_days55_58_90_sabm', // Email Winback SABM Test Cell
                'noydb_g3rdljj5qa', // Onsite Winback Discount Test Cell
                'noydb_kupi9jrk3n' // Onsite Winback SABM Test Cell
            ].some((aud) => auds.indexOf(aud) > -1)
        ) {
            subEl = 'renewal';
        }
        // if ( // migration tests
        //     /CSub%3d1/.test(bait)
        //     || /(S|s)ubscriber/.test(omni)
        //     || [
        //         'subscribers_global'
        //     ].some((aud) => auds.indexOf(aud) > -1)
        // ) {
        //     subEl = 'migration';
        // }
    }
    return subEl;
}

// Determine types of offers elligible for
export const offerElligibilityTypeTest = () => {
    return elligibilityTest() === `freetrial` ? `initial` : /CSub%3d1/.test(document.cookie) ? 'migration' : 'renewal'
}

// Identify Package Deny Type
export const denyType = (location) => {
    if (location === 'join') {
        if (!!window.deniedTo && !!window.deniedTo.DenyToV1 && !!window.deniedTo.DenyToV2) {
            return window.deniedTo.DenyToV1;
        }
        return `NO_DENIEDTO_VARIABLE`;
    }
    return 'NA';
}

// Replace Page Settings in REDUX
export const replacePageSettings = (pageSettings) => ({
    type: 'REPLACE_PAGE_SETTINGS',
    pageSettings
});

// Edit Page Settings in REDUX
export const modifyPageSettings = (pageSettings) => ({
    type: 'MODIFY_PAGE_SETTINGS',
    pageSettings
});