import React from 'react';
import { connect } from 'react-redux';
import Timeline from '../Timeline';
import HeaderText from '../HeaderText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} header-style header-style--${styleName}`
}

const SparklyDragon = connect(mapStateToProps)((props) => {
    return (
        <div className={`${classesMaker('sparklydragon')} offerings-variable--${props.variables.offerings}`}>
            <section className="memOptions aboveFoldCon">
                <div className="chooseMemText hide768 show480 hidden-md-up textCenter">
                    <span className="bold headline-text">
                        <HeaderText />
                    </span>
                    <Timeline />
                </div>
                <div className="ancGrid priceGrid hide480 hero-section-container">
                    <div className="ancCol hide480 w25 hide show-lg-up-block">
                        <div className="documentsImg documentimg-hero-desk"></div>
                    </div>
                    <div className="ancCol full480 w75">
                        <div className="headlines">
                            <h1 className="greenTxt text3xlrg bold">
                                <HeaderText />
                            </h1>
                            <p className="textlrg">
                                <span className="cancel-txt">Cancel anytime. Keep your family tree.</span>
                            </p>
                        </div>
                        <Timeline />
                    </div>
                    <div className="ancCol hide480 w25 hide show768 hidden-lg-up">
                        <div className="documentsImg document-hero-img-tab"></div>
                    </div>
                    {/* <div className="buttonpill-wrap" id="form-plan-container">
                        <div className="buttonpill-inner">
                            <div className="buttonPill">
                                <button type="button" id="monthPill" className="activePill monthPill icon iconCheck">Monthly</button> 
                                <input id="monthPillInput" className="radioBtn hide" type="radio" name="planPer" value="monthly" /> 
                                <button type="button" id="month6Pill" className="inactivePill month6Pill">6 Months</button> 
                                <input id="month6PillInput" className="radioBtn hide" type="radio" name="planPer" value="biannual" />
                                <div className="arrow" id="save20">
                                    <span className="textsml">Saves $$</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
})

export default SparklyDragon;