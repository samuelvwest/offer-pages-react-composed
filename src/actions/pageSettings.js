// Test if settings should be displayed
export const showSettingsTest = () => {
    return /at_preview|localhost:8080/.test(document.location.href)
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

// Determine which page this is placed on
export const pageTest = () => {
    return !!document.location.pathname.match(`offers\/?(.*)`) ? document.location.pathname.match(`offers\/?(.*)`)[1] : `freetrial`;
}

// Get return URL for CARE/Deny Pages
export const getReturnURL = () => {
    const returnURL = document.location.search.match(/url=([^&]+)/);
    return !!returnURL ? returnURL[1] : false;
}

// Determine if elligible for Free Trial offer
export const elligibilityTest = () => {
    return pageTest() === `subscribe` ? `hardoffer` : !document.cookie.match(`BAIT([^; ]+)`) ? `freetrial` : /E(Trial|Sub)%3D1/.test(document.cookie.match(`BAIT([^; ]+)`)[0]) ? `hardoffer` : `freetrial`
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