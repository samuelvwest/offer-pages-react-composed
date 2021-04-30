import { adobeTargetTrackEvent } from './tracking';

export const openModal = (selector, settings) => {
    if (!!window.ui && window.ui.modal) {
        const modal = ui.modal(document.querySelector(selector), settings);
        modal.open();
    } else if (!!window.$ && !!window.$.modal) {
        $(selector).modal(settings);
    }
}

export const scrollTo = ({ selector, trackStr, highlight = true }) => {
    // console.log(selector);
    const elems = [].slice.call(document.querySelectorAll(selector));
    // console.log(elems);
    const target = {
        elem: document.querySelector(selector),
        offset: 0,
        block: 'start',
        proximity: 1000000
    }
    elems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const heightNum = (window.innerHeight || document.documentElement.clientHeight) - rect.height;
        let proxCompNum = rect.top;
        if (rect.top > 0) {
            if (rect.top < heightNum) {
                proxCompNum = 0;
            } else {
                proxCompNum = rect.top - heightNum;
            }
        } else {
            proxCompNum = -1 * rect.top;
        }
        if (proxCompNum < target.proximity) {
            target.elem = el;
            target.proximity = proxCompNum;
            target.block = rect.top > heightNum ? 'end' : 'start';
            target.offset = rect.top > heightNum ? heightNum : 0;
        }
        // console.log(rect, target.proximity, target.elem);
    })
    if (target.proximity > 0 && !!target.elem) {
        if (!!window.$ && !!window.$.Animation) {
            // console.log('jquery');
            window.$('html, body').stop().animate({
                'scrollTop': $(target.elem).offset().top + target.offset
            }, 800, 'swing');
        } else {
            // console.log('native');
            target.elem.scrollIntoView({
                behavior: 'smooth',
                block: target.block
            })
        }
    // } else {
    //     console.log('no scroll', target);
    }
    if (highlight) {
        target.elem.classList.add(`scroll-highlight`);
        setTimeout(function() {
            target.elem.classList.add(`scroll-highlight--activate`);
            setTimeout(function() {
                target.elem.classList.remove(`scroll-highlight--activate`);
                setTimeout(function() {
                    target.elem.classList.remove(`scroll-highlight`);
                }, 1000)
            }, 1000)
        }, 100)
    }
    if (!!trackStr) {
        adobeTargetTrackEvent({
            eventType: 'scrollTo',
            button: trackStr
        })
    }
}