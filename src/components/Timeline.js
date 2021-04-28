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

const addDays = (date, days) => {
    let dateToAddTo = new Date(Number(date))
    dateToAddTo.setDate(date.getDate() + days)
    return dateToAddTo
}

const Timeline = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions
    if (props.variables.timeline && !/migration/.test(pS.elligibility)) {
        const firstDay = new Date();  
        const ftEnd = addDays(firstDay, 14);
        const barColorClass = /usdiscovery/.test(subs.selectedOffer.packageID) ? `usdis` : /worldexplorer/.test(subs.selectedOffer.packageID) ? `worldex` : `allaccess`;
        return (
            <div className={`mytimelineWrapper mytimelineWrapper-desk header-style-variable--${props.variables.headerStyle} offerings-variable--${props.variables.offerings}`}>
                <div className={`mytimeline ${barColorClass}-bgcolor ${barColorClass}-bgcolor--${props.variables.offerings}`}>
                    <div className="myleft-circle">
                        <div className="mydot-circle"></div>
                    </div>
                    <div className="myline"></div>
                    {/initial/.test(pS.elligibility) ? 
                        <div>
                            <div className="mytoday">
                                Today&nbsp;•&nbsp;  
                                <span className="today-date normal">{monthsArr[firstDay.getMonth()]} {firstDay.getDate()}</span>
                            </div>
                            <p>FREE 14-day trial<LegalSup supRef="freeTrial" goToOnClick={true}/></p>
                            <div className="myright-circle"></div>
                            <div className="mybilldate">
                                First&nbsp;Bill&nbsp;•&nbsp;
                                <span className="bill-date normal">
                                    {monthsArr[ftEnd.getMonth()]} {ftEnd.getDate()}
                                </span>
                            </div>
                        </div> : 
                        <div>
                            <div className="mytoday">
                                First&nbsp;Bill&nbsp;Today&nbsp;•&nbsp;  
                                <span className="today-date normal">
                                    {monthsArr[firstDay.getMonth()]} {firstDay.getDate()}
                                </span>
                            </div>
                            <p>Chosen Duration</p>
                            <div className="myright-circle"></div>
                            <div className="mybilldate mybilldate--secondbill">Second&nbsp;Bill</div>
                        </div>
                    }
                </div>
                <div className="myposttrial"></div>
            </div>
        )
    } else {
        return <div className="no-timeline"></div>
    }
});

export default Timeline;