export const openModal = (selector, settings) => {
    if (!!window.ui && window.ui.modal) {
        const modal = ui.modal(document.querySelector(selector), settings);
        modal.open();
    } else if (!!window.$ && !!window.$.modal) {
        $(selector).modal(settings);
    }
}

export const scrollTo = (selector) => {
    console.log(selector);
    const elems = [].slice.call(document.querySelectorAll(selector));
    console.log(elems);
    const target = {
        elem: document.querySelector(selector),
        offset: 0,
        block: 'start',
        proximity: 1000000
    }
    if (elems.length > 1) {
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
            console.log(rect, target.proximity, target.elem);
        })
    }
    target.elem.classList.add(`scroll-highlight`);
    if (target.proximity > 0) {
        if (!!window.$ && !!window.$.Animation) {
            console.log('jquery');
            window.$('html, body').stop().animate({
                'scrollTop': $(target.elem).offset().top + target.offset
            }, 800, 'swing');
        } else {
            console.log('native');
            target.elem.scrollIntoView({
                behavior: 'smooth',
                block: target.block
            })
        }
    }
    setTimeout(function() {
        target.elem.classList.add(`scroll-highligh--deactivate`);
        setTimeout(function() {
            target.elem.classList.remove(`scroll-highlight`);
            target.elem.classList.remove(`scroll-highligh--deactivate`);
        }, 1000)
    }, 1000)
}