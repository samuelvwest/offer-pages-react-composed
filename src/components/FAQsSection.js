import React from 'react';
import { connect } from 'react-redux';
import { adobeTargetTrackEvent } from '../actions/tracking';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} faqs-section`
}

const faqs = [
    {
        question: <span>Will I be charged during my free&nbsp;trial?</span>,
        answer: <p>
                If a free trial is canceled during the trial period, the trial will end automatically, and you will not be charged. Free trials on Ancestry automatically turn into paid subscriptions after two&nbsp;weeks.
            </p>,
        elligibility: `free-trial`
    }, {
        question: <span>What's included in my free&nbsp;trial?</span>,
        answer: <p>
                Free trials are available for each of the three subscriptions available. The subscription you choose for the free trial will be the subscription your trial turns into after two weeks. During the trial period, you have complete access to all records and features available with that&nbsp;subscription.
            </p>,
        elligibility: `free-trial`
    }, {
        question: <span>When will my subscription&nbsp;renew?</span>,
        answer: <p>
                Unless you’ve canceled your membership, it will automatically renew on the Ends On date on your Account Options page, where your current membership is displayed and from which page you can also upgrade and cancel your subscription. When you upgrade from an annual subscription, your new subscription will begin immediately, and you'll receive a refund for the time remaining on your current subscription. When you upgrade from a monthly subscription, a month will be added to the new subscription to compensate for the days remaining on the prior subscription. If you cancel, your subscription will end on your Ends On&nbsp;date.
            </p>,
        elligibility: `hard-offer`
    }, {
        question: <span>Will I receive updates from&nbsp;Ancestry?</span>,
        answer: <p>
                Subscribing to Ancestry emails can help keep you informed about new records and features, product improvements, tips from expert genealogists, success stories, special promotions, and&nbsp;more.
            </p>,
        elligibility: `all`
    }, {
        question: <span>How do I cancel my free&nbsp;trial?</span>,
        answer: <p>
                Cancel anytime at least two days before your renewal date by visiting the My Account section or by <a href="https://support.ancestry.com/s/ancestry-support" target="_blank">contacting us</a>
            </p>,
        elligibility: `all`
    }
]

export class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    toggleExpanded = () => {
        this.setState((prevState) => {
            return { 
                expanded: !prevState.expanded 
            }
        })
        adobeTargetTrackEvent({
            eventType: 'clickButton',
            button: 'expandFAQ'
        })
    }
    render() {
        return (
            <li>
                <button className={`faqButton link text3xlrg${this.state.expanded ? ` activeFaqButton`: ``}`} type="button" aria-expanded={this.state.expanded} onClick={this.toggleExpanded}>
                    {this.props.title}
                    <span className="icon iconArrowDown"></span>
                </button>
                <div className={`faqAnswer${this.state.expanded ? ` faqAnswerActive` : ``}`}>
                    {this.props.children}
                </div>
            </li>
        )
    }
}

export class FAQsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandAll: false
        }
    }
    toggleExpandedAll = () => {
        this.setState((prevState) => {
            return { 
                expandAll: !prevState.expandAll 
            }
        })
        adobeTargetTrackEvent({
            eventType: 'clickButton',
            button: 'showAllFAQs'
        })
    }
    changeShowAllToHide = () => {
        this.setState({ expandAll: false })
    }
    render() {
        if (this.props.variables.faqsSection) {
            const filterStr = RegExp(`all|${/initial/.test(this.props.pageSettings.elligibility) ? `free-trial` : `hard-offer`}`, `i`)
            return (
                <section className={`${classesMaker('pretty-grid')} offerPageFaq scroll-tracking--faqsSection`}>
                    <div className="page pageWidth1 pagePadded">
                        <h2 className="faqTitle light textCenter">Have questions?</h2>
                        <ul className="faqContents topSpacingBlock">
                            {faqs.filter((faq) => filterStr.test(faq.elligibility)).map((faq, index) => (
                                <FAQ key={index} title={faq.question}>
                                    {faq.answer}
                                </FAQ>
                            ))}
                        </ul>
                    </div>
                </section>
            )
        }
        return <div className="faqs-section--not-included"></div>
    }
};

export default connect(mapStateToProps)(FAQsSection);