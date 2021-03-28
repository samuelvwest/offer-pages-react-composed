import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (prefix, attr) => {
    return `${prefix} ${prefix}--${attr}`
}

const legalSups = {
    freeTrial: `†`,
    hardOffer: `†`,
    longDurationBilledMonthly: `§`,
    promoSave: `α`,
    durationSave: `*`,
    newspapersBasic: `**`
}

export const LegalSup = ({ supRef }) => (
    <sup className={`legal-text__sup${/\*/.test(legalSups[supRef]) ? ` legal-text__sup--asterisk` : ``}`}>{legalSups[supRef]}</sup>
)

export const LegalFreeTrial = () => (
    <p className={classesMaker(`legal-text__paragraph`, `free-trial`)}>
        <LegalSup supRef="freeTrial"/>
        One free trial per user. Free trial requires registration with a valid credit or debit card. You will be charged the full amount of your chosen membership price on expiry of the free trial, unless you cancel at least 2 days before the end of your free trial by visiting your My Account section or by calling 1-800-ANCESTRY. Memberships auto-renew at the end of your subscription period and your payment method will be debited the then applicable rate. To avoid auto-renewing cancel at least 2 days before your renewal date by visiting My Account or calling&nbsp;1-800-ANCESTRY.
    </p>
)

export const LegalHardOffer = () => (
    <p className={classesMaker(`legal-text__paragraph`, `hard-offer`)}>
        <LegalSup supRef="hardOffer"/>
        Your subscription will automatically renew at the end of your subscription at list price. If you don't want to renew, cancel at least two days before your renewal date by visiting the My Account section or by <a href="https://support.ancestry.com/s/ancestry-support" target="_blank">contacting us</a>. See our <a href="/cs/legal/renewal-cancellation-terms" target="_blank">Renewal and Cancellation Terms</a> for further&nbsp;details.
    </p>
)

export const LegalLongDurationBilledMonthly = () => (
    <p className={classesMaker(`legal-text__paragraph`, `ldbm`)}>
        <LegalSup supRef="longDurationBilledMonthly"/>
        You are committing to a six-month subscription, but you will be billed on a monthly basis. If you cancel before the end of your subscription, an early termination fee of up to $25 may apply. See our <a target="_blank" href="/cs/legal/renewal-cancellation-terms">Renewal and Cancellation Terms</a> for more&nbsp;details.    
    </p>
)

export const LegalNewspapersBasic = () => (
    <p className={classesMaker(`legal-text__paragraph`, `newspapers-basic`)}>
        <LegalSup supRef="newspapersBasic"/>
        Other subscriptions to Newspapers.com may be available but are not included in the All Access package. 
    </p>
)

export const LegalDurationSaves = connect(mapStateToProps)(({ pageSettings }) => {
    const uniqueSaves = [];
    pageSettings.subscriptions.durationSaveOffers.forEach((offer) => {
        if (!uniqueSaves.find((uOfr) => uOfr.renewalPeriod.renewMonths === offer.renewalPeriod.renewMonths && uOfr.renewalPeriod.displayPrice === offer.renewalPeriod.displayPrice)) {
            uniqueSaves.push(offer);
        }
    })
    return (
        <p className={classesMaker(`legal-text__paragraph`, `duration-saves`)}>
            <LegalSup supRef="durationSave"/>
            {uniqueSaves.map((offer, index) => (
                <span key={index}>{index > 0 && <br />}A {offer.renewalPeriod.renewMonths}-month {offer.packageData.name} commitment of {offer.currency}{offer.renewalPeriod.displayPrice} saves you {offer.currency}{offer.durationSavings.display} when compared to a {offer.durationSavings.compareOffer.renewalPeriod.renewMonths}-month commitment of {offer.currency}{offer.durationSavings.compareOffer.renewalPeriod.displayPrice} over the same time&nbsp;period.</span>
            ))}
        </p>
    )
})

export const LegalPromoSaves = ({ saveOffers }) => {
    const uniqueSaves = [];
    saveOffers.forEach((offer) => {
        if (!uniqueSaves.find((uOfr) => uOfr.renewalPeriod.renewMonths === offer.renewalPeriod.renewMonths && uOfr.renewalPeriod.displayPrice === offer.renewalPeriod.displayPrice)) {
            uniqueSaves.push(offer);
        }
    })
    return (
        <p className={classesMaker(`legal-text__paragraph`, `promo-saves`)}>
            <LegalSup supRef="promoSave"/>
            {uniqueSaves.map((offer, index) => (
                <span key={index}>{index > 0 && <br />}A {offer.renewalPeriod.renewMonths}-month {offer.packageData.name} subscription {offer.ldbm && `paid monthly `}has a regular price of {offer.currency}{offer.renewalPeriod.MSRP} every&nbsp;{offer.renewalPeriod.renewMonths === 1 ? `month` : `${offer.renewalPeriod.renewMonths}-months`}.</span>
            ))}
        </p>
    )
}

export const LegalText = connect(mapStateToProps)((props) => (
    <div className="legal-text">
        {props.pageSettings.subscriptions.ldbms && <LegalLongDurationBilledMonthly />}
        {props.pageSettings.elligibility === `freetrial` ? <LegalFreeTrial /> : <LegalHardOffer />}
        {props.pageSettings.subscriptions.durationSaveOffers && <LegalDurationSaves saveOffers={props.pageSettings.subscriptions.durationSaveOffers} />}
        {props.pageSettings.subscriptions.promoSaveOffers && <LegalPromoSaves saveOffers={props.pageSettings.subscriptions.promoSaveOffers} />}
        {!!props.pageSettings.subscriptions.display.packages.find((pkg) => pkg.id === `allaccess`) && <LegalNewspapersBasic />}
    </div>
))

export default LegalText