import React from 'react';
import { connect } from 'react-redux';
import { LegalSup } from './LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const monthsArr = [ `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` ]

const numWords = {
    '1': 'One',
    '3': 'Three',
    '6': 'Six',
    '12': 'Twelve'
}

const addDays = (date, days) => {
    let dateToAddTo = new Date(Number(date))
    dateToAddTo.setDate(date.getDate() + days)
    return dateToAddTo
}

const addMonths = (date, months) => {
    let dateToAddTo = new Date(Number(date))
    dateToAddTo.setMonth(date.getMonth() + months)
    return dateToAddTo
}

const Timeline = connect(mapStateToProps)(({ pageSettings: pS, variables }) => {
    // const pS = props.pageSettings;
    const subs = pS.subscriptions
    if (variables.timeline && !/migration/.test(pS.elligibility)) {
        const today = new Date();  
        const nextBill = /initial/.test(pS.elligibility) ? addDays(today, 14) : addMonths(today, subs.selectedOffer.renewalPeriod.billMonths);
        const barColorClass = /usdiscovery/.test(subs.selectedOffer.packageID) ? `usdis` : /worldexplorer/.test(subs.selectedOffer.packageID) ? `worldex` : `allaccess`;
        console.log(subs.selectedOffer.renewalPeriod.billMonths.toString());
        console.log(subs.selectedOffer);
        const vars = /initial/.test(pS.elligibility) ? {
            firstMark: <span>Today&nbsp;•&nbsp;</span>,
            bar: <p>
                    FREE 14-day trial&nbsp;
                    <LegalSup supRef="freeTrial" goToOnClick={true}/>
                </p>,
            secondMark: <span>First&nbsp;Bill&nbsp;•&nbsp;</span>,
            secondBillClass: ``
        } : {
            firstMark: <span>First&nbsp;Bill&nbsp;•&nbsp;</span>,
            bar: <p>
                    {numWords[subs.selectedOffer.renewalPeriod.billMonths.toString()]}&nbsp;month{subs.selectedOffer.renewalPeriod.billMonths > 1 && `s`}
                    &nbsp;<LegalSup supRef="hardOffer" goToOnClick={true}/>&nbsp;
                    {subs.selectedOffer.ldbm && <LegalSup supRef="longDurationBilledMonthly" goToOnClick={true}/>}
                </p>,
            secondMark: <span>Second&nbsp;Bill&nbsp;•&nbsp;</span>,
            secondBillClass: ` mybilldate--secondbill`
        }
        return (
            <div className={`mytimelineWrapper mytimelineWrapper-desk header-style-variable--${variables.headerStyle} offerings-variable--${variables.offerings}`}>
                <div className={`mytimeline ${barColorClass}-bgcolor ${barColorClass}-bgcolor--${variables.offerings}`}>
                    <div className="myleft-circle">
                        <div className="mydot-circle"></div>
                    </div>
                    <div className="myline"></div>
                    <div className="mytoday">
                        {vars.firstMark} 
                        <span className="today-date normal">
                            {monthsArr[today.getMonth()]} {today.getDate()}
                        </span>
                    </div>
                    {vars.bar}
                    <div className="myright-circle"></div>
                    <div className={`mybilldate${vars.secondBillClass}`}>
                        {vars.secondMark}
                        <span className="bill-date normal">
                            {monthsArr[nextBill.getMonth()]} {nextBill.getDate()}
                        </span>
                    </div>
                </div>
                <div className="myposttrial"></div>
            </div>
        )
    } else {
        return <div className="no-timeline"></div>
    }
});

export default Timeline;