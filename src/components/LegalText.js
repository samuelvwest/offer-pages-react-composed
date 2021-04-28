import React from 'react';
import { connect } from 'react-redux';
import { scrollTo } from '../actions/utilities';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (prefix, attr, inModal) => {
    return `${prefix} ${prefix}--${attr}${!!inModal ? ` ${prefix}--inModal` : ``}`
}

const legalSups = {
    freeTrial: `†`,
    hardOffer: `†`,
    longDurationBilledMonthly: `§`,
    promoSave: `**`,
    durationSave: `*`,
    newspapersBasic: `‡`
}

Object.keys(legalSups).forEach((supTxt) => {
    legalSups[supTxt] = {
        sup: legalSups[supTxt],
        counts: {
            sups: 0,
            paras: 0
        }
    }
})

let ldbmLegalRendered = false;

export const LegalSup = (props) => {
    const supObj = legalSups[props.supRef];
    // if (!!props.para) {
    //     supObj.counts.paras++;
    // } else {
    //     supObj.counts.sups++;
    // }
    // console.log(props.supRef, supObj.sup, supObj.count);
    return (
        <sup className={`legal-text__sup${/\*/.test(supObj.sup) ? ` legal-text__sup--asterisk` : ``}`}
            onClick={() => { 
                if (!!props.goToOnClick) {
                    scrollTo(`.legal-text__paragraph--${props.supRef}:not(.legal-text__paragraph--inModal)`, `supRef-${props.supRef}`);
                }
            }}
        >
            {supObj.sup}
        </sup>
    )
}

export const LegalFreeTrial = ({ inModal }) => (
    <p className={classesMaker(`legal-text__paragraph`, `freeTrial`, inModal)}>
        <LegalSup supRef="freeTrial" para={true} />
        One free trial per user. Free trial requires registration with a valid credit or debit card. You will be charged the full amount of your chosen membership price on expiry of the free trial, unless you cancel at least 2 days before the end of your free trial by visiting your My Account section or by calling 1-800-ANCESTRY. Memberships auto-renew at the end of your subscription period and your payment method will be debited the then applicable rate. To avoid auto-renewing cancel at least 2 days before your renewal date by visiting My Account or calling&nbsp;1-800-ANCESTRY.
    </p>
)

export const LegalHardOffer = ({ inModal }) => (
    <p className={classesMaker(`legal-text__paragraph`, `hardOffer`, inModal)}>
        <LegalSup supRef="hardOffer" para={true} />
        Your subscription will automatically renew at the end of your subscription at list price. If you don't want to renew, cancel at least two days before your renewal date by visiting the My Account section or by <a href="https://support.ancestry.com/s/ancestry-support" target="_blank">contacting us</a>. See our <a href="/cs/legal/renewal-cancellation-terms" target="_blank">Renewal and Cancellation Terms</a> for further&nbsp;details.
    </p>
)

export const LegalLongDurationBilledMonthly = connect(mapStateToProps)((props) => {
    const numWords = {
        '3': 'three',
        '6': 'six',
        '12': 'twelve'
    }
    let durations = props.durations || props.pageSettings.subscriptions.display.durations.filter((duration) => duration.ldbm).map((duration) => duration.num);
    if (durations.length > 0) {
        const durWords = durations.map((duration, index, array) => {
            const preText = index === 0 ? `${array.length > 1 ? `either ` : ``}a ` : ``;
            return `${preText}${numWords[duration.toString()]}-month`
        }).reduce((accumulator, currentValue, currentIndex, array) => {
            const connector = array.length === 2 ? `` : `,`;
            const orWord = array.length === (currentIndex + 1) ? ` or` : ``;
            return accumulator + connector + orWord + ` ${currentValue}`
        })
        ldbmLegalRendered = !props.fromFullLegal;
        return (
            <p className={classesMaker(`legal-text__paragraph`, `longDurationBilledMonthly`, props.inModal)}>
                <LegalSup supRef="longDurationBilledMonthly" para={true} />
                You are committing to {durWords} subscription, but you will be billed on a monthly basis. If you cancel before the end of your subscription, an early termination fee of up to $25 may apply. See our <a target="_blank" href="/cs/legal/renewal-cancellation-terms">Renewal and Cancellation Terms</a> for more&nbsp;details.    
            </p>
        )
    }
    return <div></div>
});

export const LegalNewspapersBasic = ({ fromFullLegal, inModal }) => (
    <p className={classesMaker(`legal-text__paragraph`, `newspapersBasic`, inModal)}>
         <LegalSup supRef="newspapersBasic" para={!!fromFullLegal} />
        Other subscriptions to Newspapers.com may be available but are not included in the All Access&nbsp;package. 
    </p>
)

export const LegalDurationSaveLine = ({ offer }) => (
    <span className={classesMaker(`legal-text__line`,`duration-save`)}>
        A {offer.renewalPeriod.renewMonths}&ndash;month {offer.packageData.name} commitment of {offer.currency}{offer.renewalPeriod.displayPrice} saves you {offer.currency}{offer.durationSavings.display} when compared to a {offer.durationSavings.compareOffer.renewalPeriod.renewMonths}-month commitment of {offer.currency}{offer.durationSavings.compareOffer.renewalPeriod.displayPrice} over the same time&nbsp;period.
    </span>
)

export const LegalDurationSaves = connect(mapStateToProps)((props) => {
    const uniqueSaves = [];
    const durationSaveOffers = props.durationSaveOffers || props.pageSettings.subscriptions.durationSaveOffers
    durationSaveOffers.forEach((offer) => {
        if (!uniqueSaves.find((uOfr) => uOfr.renewalPeriod.renewMonths === offer.renewalPeriod.renewMonths && uOfr.renewalPeriod.displayPrice === offer.renewalPeriod.displayPrice)) {
            uniqueSaves.push(offer);
        }
    })
    return (
        <p className={classesMaker(`legal-text__paragraph`, `durationSave`, props.inModal)}>
            <LegalSup supRef="durationSave" para={true} />
            {uniqueSaves.map((offer, index) => (
                <span key={index}>
                    {index > 0 && <br />}
                    <LegalDurationSaveLine offer={offer} />
                </span>
            ))}
        </p>
    )
})

export const LegalPromoSaveLine = ({ offer }) => <span className={classesMaker(`legal-text__line`,`promo-save`)}>A {offer.renewalPeriod.renewMonths}-month {offer.packageData.name} subscription {offer.ldbm && `paid monthly `}has a regular price of {offer.currency}{offer.renewalPeriod.MSRP} every&nbsp;{offer.renewalPeriod.renewMonths === 1 ? `month` : `${offer.renewalPeriod.renewMonths}-months`}.</span>

export const LegalPromoSaves = ({ saveOffers, inModal }) => {
    const uniqueSaves = [];
    saveOffers.forEach((offer) => {
        if (!uniqueSaves.find((uOfr) => uOfr.renewalPeriod.renewMonths === offer.renewalPeriod.renewMonths && uOfr.renewalPeriod.displayPrice === offer.renewalPeriod.displayPrice)) {
            uniqueSaves.push(offer);
        }
    })
    return (
        <p className={classesMaker(`legal-text__paragraph`, `promoSave`, inModal)}>
            <LegalSup supRef="promoSave" para={true} />
            {uniqueSaves.map((offer, index) => (
                <span key={index}>
                    {index > 0 && <br />}
                    <LegalPromoSaveLine offer={offer} />
                </span>
            ))}
            <br />Your subscription will automatically renew at the end of your subscription at list price. If you don't want to renew, cancel at least two days before your renewal date by visiting the My Account section or by contacting us. See our Renewal and Cancellation Terms for further&nbsp;details.
        </p>
    )
}

export const LegalTextWrapper = connect(mapStateToProps)((props) => (
    <div className={`legal-text-wrap offerings-variable--${props.variables.offerings}`}>
        <div className="legal-text">
            {props.children}
        </div>
    </div>
))

export const LegalText = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const joinControlTest = !props.inModal && /join/.test(pS.location) && /control/.test(props.variables.offerings)
    return (
        <LegalTextWrapper>
                {!ldbmLegalRendered && subs.ldbms && 
                    <LegalLongDurationBilledMonthly fromFullLegal={true} inModal={props.inModal} />
                }
                {/initial/.test(pS.elligibility) ? 
                    <LegalFreeTrial inModal={props.inModal} /> : 
                    <LegalHardOffer inModal={props.inModal} />
                }
                {!joinControlTest && subs.durationSaveOffers && 
                    <LegalDurationSaves saveOffers={subs.durationSaveOffers} inModal={props.inModal} />
                }
                {subs.promoSaveOffers && 
                    <LegalPromoSaves saveOffers={subs.promoSaveOffers} inModal={props.inModal} />
                }
                {!joinControlTest && !!subs.display.packages.find((pkg) => pkg.id === `allaccess`) && 
                    <LegalNewspapersBasic fromFullLegal={true} inModal={props.inModal} />
                }
        </LegalTextWrapper>
    )
})

export default LegalText