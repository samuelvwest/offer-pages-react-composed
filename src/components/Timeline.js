import React from 'react';
import { connect } from 'react-redux';
import { disclaimerSups } from './Disclaimer';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables,
        subscriptions: state.subscriptions
    }
};

const monthsArr = [ `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` ]

const addDays = (date, days) => {
    let dateToAddTo = new Date(Number(date))
    dateToAddTo.setDate(date.getDate() + days)
    return dateToAddTo
}

const Timeline = connect(mapStateToProps)((props) => {
    if (props.variables.timeline) {
        const firstDay = new Date();  
        const ftEnd = addDays(firstDay, 14);
        // console.log(firstDay, ftEnd);
        return (
            <div className="mytimelineWrapper mytimelineWrapper-desk">
                <div className="mytimeline usdis-bgcolor" id="mytimeline-md">
                    <div className="myleft-circle">
                        <div className="mydot-circle"></div>
                    </div>
                    <div className="myline"></div>
                    {props.pageSettings.elligibility === 'freetrial' ? 
                        <div>
                            <div className="mytoday">
                                Today&nbsp;•&nbsp;  
                                <span className="today-date normal">{monthsArr[firstDay.getMonth()]} {firstDay.getDate()}</span>
                            </div>
                            <p>FREE 14-day trial{disclaimerSups.freetrial}</p>
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