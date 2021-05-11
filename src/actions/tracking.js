export const adobeTargetTrackEvent = (params) => {
    const passObj = {
        mbox:'spaEventTracking',
        params
    };
    if (!!params.mbox) {
        passObj.mbox = params.mbox;
        delete params.mbox;
    }
    const trackStr = JSON.stringify(params);
    if (!!window.tao && !!window.tao.g && !!window.tao.f && !!window.tao.f.trackEvent) {
        window.tao.g.spaTrackedEvents = window.tao.g.spaTrackedEvents || [];
        if (!window.tao.g.spaTrackedEvents.some((tS) => tS === trackStr)) {
            window.tao.f.trackEvent(passObj);
            window.tao.g.spaTrackedEvents.push(trackStr);
            if (/aiapconfig/.test(document.location.href)) {
                console.log('sent: ', passObj);
            }
        }
    } else {
        window._spaTrackedEvents = window._spaTrackedEvents || [];
        if (!window._spaTrackedEvents.some((tS) => tS === trackStr)) {
            window._spaTrackedEvents.push(trackStr);
            console.log('not sent: ', passObj);
        }
    }
}

export const elemIsInViewport = (elem) => {
    if (!!elem) {
        const rect = elem.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const percentFromBottom = 0.4;
        const compareHeight = windowHeight * (1 - percentFromBottom); 
        // console.log(elem, rect.top)
        return (
            (rect.top > 0 && rect.top < compareHeight)
            || (rect.bottom > 0 && rect.bottom <= windowHeight)
        );
    }
    return false
}
