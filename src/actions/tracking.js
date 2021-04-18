export const adobeTargetTrackEvent = (params) => {
    const passObj = {
        mbox:'spaEventTracking',
        params
    };
    if (!!window.tao && !!window.tao.f && !!window.tao.f.trackEvent) {
        tao.f.trackEvent(passObj);
        console.log('sent: ', passObj);
    } else {
        console.log('not sent: ', passObj);
    }
}