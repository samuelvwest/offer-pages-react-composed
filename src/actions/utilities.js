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

export const lazyLoadImgs = () => {
    // if (!window._lazyLoadImgsInitiated) {
        window._lazyLoadImgsInitiated = true;
        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazyImg");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });
            let lazyBgImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let lazyBgImage = entry.target;
                        lazyBgImage.classList.add("loadedBgImg");
                    }
                });
            });
            var lazyImagesSelector = 'img.lazyImg:not(.lazyObserved)';
            var lazyBgImagesSelector = '.lazyBgImg:not(.lazyObserved)';
            if (!!window.windu) {
                windu.create({
                    name: 'lazyImages',
                    selector: lazyImagesSelector,
                    attach: function (elem) {
                        lazyImageObserver.observe(elem);
                        elem.classList.add('lazyObserved')
                    }
                });
                windu.create({
                    name: 'lazyBgImages',
                    selector: lazyBgImagesSelector,
                    attach: function (elem) {
                        lazyBgImageObserver.observe(elem);
                        elem.classList.add('lazyObserved')
                    }
                });
            } else {
                var lazyImages = [].slice.call(document.querySelectorAll(lazyImagesSelector));
                var lazyBgImages = [].slice.call(document.querySelectorAll(lazyBgImagesSelector));
                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                    lazyImage.classList.add('lazyObserved')
                });
                lazyBgImages.forEach(function(lazyBgImage) {
                    lazyBgImageObserver.observe(lazyBgImage);
                    lazyBgImage.classList.add('lazyObserved')
                });
            }
        } else {
            // fall back to on scroll lazy load for browsers that don't recognize IntersectionObserver
            var lazyImg = document.querySelectorAll('.lazyImg'),
            lazyBgImg = document.querySelectorAll('.lazyBgImg');
            window.addEventListener('scroll', function() {
                for (var i = 0; i < lazyImg.length; i++) {
                    lazyImg[i].src = lazyImg[i].getAttribute('data-src');
                }
                for (var i = 0; i < lazyBgImg.length; i++) {
                    lazyBgImg[i].classList.add('loadedBgImg');
                }
            });
        }
    // }
}

// Test Local Storage availability
export const localStorageTest = () => {
    if (!window._lSAvail) {
        const test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            window._lSAvail = true;
        } catch (e) {
            window._lSAvail = false;
        }
    }
    return window._lSAvail;
}

// Get Local Storage Item (parsed)
export const getLocalStorageItem = (storageKey) => {
    if (!localStorageTest()) {
        return 0;
    }
    var storageItem = window.localStorage[storageKey];
    return typeof storageItem === 'undefined' ? 0 : JSON.parse(storageItem);
}
