export const adobeTargetTrackEvent = (params) => {
    const passObj = {
        mbox:'spaEventTracking',
        params
    };
    if (!!window.tao && !!window.tao.f && !!window.tao.f.trackEvent) {
        tao.f.trackEvent(passObj);
        console.log('sent: ', passObj.params);
    } else {
        console.log('not sent: ', passObj.params);
    }
}

export const elemIsInViewport = (elem) => {
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
