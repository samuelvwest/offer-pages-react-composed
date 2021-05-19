import React from 'react';
import { connect } from 'react-redux';
import { adobeTargetTrackEvent } from '../actions/tracking';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};
const classesMaker = (styleName) => {
    return `container container--${styleName} testimonial-section testimonial-section--${styleName}`
}

export const MaryDQuote = connect(mapStateToProps)((props) => (
    <span>
        I tried a{/initial/.test(props.pageSettings.elligibility) ? ` 2-week free trial` : ``} membership and I’m so glad I&nbsp;did. 
        {!!props.brk ? <br className="hide768" /> : ` `} 
        I can’t believe how much I&nbsp;discovered.
    </span>
))

const TestimonialSection = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    const inFeatureGridTest = pS.windowWidth >= pS.breaks.control.desktop && /control/.test(props.variables.featuresGrid);
    if (props.variables.testimonialSection && !inFeatureGridTest) {
        return pS.windowWidth <= pS.breaks.control.tablet ? (
            <section className={`quoteCon ${classesMaker('colorstack')} scroll-tracking--testimonialSection`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'testimonialSection'
                    })
                }}
            >
                <div className="quote">
                    <p>“<MaryDQuote />”</p>
                    <div className="quoteArrow"></div>
                </div>
                <div className="quoteNameCon">
                    <div className="fullPgImgSprite quoteImg lazyBgImg"></div>
                    <p className="textalt coloralt text2xlrg">Mary D.<br /><span className="textxsml">ANCESTRY MEMBER</span></p>
                </div>
            </section>
        ) : (
            <section className={`offerPageTestimonial ${classesMaker('prettygrid')} scroll-tracking--testimonialSection`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'testimonialSection'
                    })
                }}
            >
                <div className="pagePadded">
                    <div className="testimonialBkg lazyBgImg"></div>
                    <div className="testimonialContent coloralt4 topSpacingBlock">
                        <h2 className="italic text4xlrg"><MaryDQuote brk={true} />”</h2>
                        <p className="textxlrg bold">Mary D. –Ancestry Member</p>
                    </div>
                </div>
            </section> 
        )
    }
    return <div className="testimonial-section--not-included"></div>
})

export default TestimonialSection;