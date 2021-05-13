 // Set up pageSetting control function if not defined yet
 window._mPS = window._mPS || function(newState) {
    window.tao.g.modifyPageSettings = window.tao.g.modifyPageSettings || {};
    Object.keys(newState).forEach((key) => {
        window.tao.g.modifyPageSettings[key] = newState[key];
    });
}
// Set this pageSetting definition for P&M Test.
window._mPS({ LDBM: false })