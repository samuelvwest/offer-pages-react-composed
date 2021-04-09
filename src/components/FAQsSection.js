import React from 'react';
import { connect } from 'react-redux';
import { LegalNewspapersBasic } from './LegalText';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} faqs-section faqs-section--${styleName}`
}

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
    }
    render() {
        return (
            <div className="faq-wrap rel-pos privacy-faq-wrap">
                <div className="faq-inner">
                    <div className="faq-ques-wrap rel-pos">
                        <p className={`faq-question${this.props.faqNum} ${this.state.expanded ? `bold` : ``}`}>{this.props.title}</p>
                        <button type="button" className={`faQuestion link iconAfter iconArrowDownAfter ${this.state.expanded ? `hide` : ``}`} onClick={this.toggleExpanded} aria-expanded={this.state.expanded} aria-controls={`faqAnswer${this.props.faqNum}`}>
                            <span className="anchor-color">Expand</span>
                        </button>
                    </div>
                    <div className={`faq-ans-wrap ${!this.state.expanded ? `hide` : ``}`}>
                        {this.props.children}    
                        <button type="button" className={`faQuestion collapse-ans link iconAfter iconArrowUpAfter`} onClick={this.toggleExpanded} aria-expanded={this.state.expanded} aria-controls={`faqAnswer${this.props.faqNum}`}>
                            <span className="anchor-color">Collapse</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export class FAQGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false
        }
    }
    toggleExpanded = () => {
        if (this.props.expanded) {
            this.props.changeShowAllToHide();
            this.setState({ expanded: false })
        } else {
            this.setState((prevState) => {
                return { 
                    expanded: !prevState.expanded 
                }
            })
        }
    }
    render() {
        const expanded = this.state.expanded || this.props.expanded;
        return (
            <div className="mb-2 rel-pos expand-wrapper">
                <div className={`faq-item-wrap expand-container rel-pos ${expanded ? `removeBorder` : ``}`} onClick={this.toggleExpanded}>
                    <p className="faq-question-head">{this.props.title}</p>
                    <button type="button" className={`link iconAfter ${expanded ? `iconArrowUpAfter` : `iconArrowDownAfter`}`} aria-expanded={this.state.expanded} aria-controls={`faqAnswerGroup${this.props.groupNum}`}></button>
                </div>
                <div className={!expanded ? `hide` : ``}>
                    {this.props.children}
                </div>
            </div>
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
    }
    changeShowAllToHide = () => {
        this.setState({ expandAll: false })
    }
    render() {
        if (this.props.variables.faqsSection) {
            return (
                <div className={`mb-4 ${classesMaker('sparkly-dragon')}`}>
                    <section className="faq-section">
                        <div className="expand-container faq-title-wrap pad-spacing-top-none spacing-bottom-md">
                            <h3 className="text4xlrg bold faq-title">Frequently Asked Questions</h3>
                            <button type="button" className={`link iconAfter textlrg btn-pointer expandall-btn ${this.state.expandAll ? `iconArrowUpAfter`: `iconArrowDownAfter`}`} onClick={this.toggleExpandedAll} aria-expanded="false">
                                <span className="mr-1 anchor-color">{this.state.expandAll ? `Hide` : `Show`} All</span>
                            </button>
                        </div>
                        <div className="faqCon">
                            <FAQGroup title="Privacy" expanded={this.state.expandAll} changeShowAllToHide={this.changeShowAllToHide}>
                                <FAQ faqNum="1" title="What do you do with my personal information?">
                                    <p>
                                        Personal information is information that can identify you, such as your name, email or street address, or it may be information that could reasonably be linked back to you, including your Genetic Information. At Ancestry, your privacy is a top priority. We use your personal information to provide, personalize, improve, update and expand our services. Please review our <a href="https://www.ancestry.com/cs/privacyphilosophy">privacy center</a>, or our <a href="https://www.ancestry.com/cs/legal/privacystatement">privacy statement</a> for more information.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="2" title="What personal information do I need to give you in order for you to find my ancestors?">
                                    <p>
                                        We can give you some potential information about family members—or Ancestry Hints®—but you will need to explore and verify these in order to learn more about their stories and discover new relatives. Since the number of family members you have to learn about each generation doubles, finding information for all of them isn't a one-and-done experience. Also, Ancestry adds an average of 2 million records to their collections every day—so there is always more to learn and discover.
                                    </p>
                                </FAQ>
                            </FAQGroup>
                            <FAQGroup title="Membership" expanded={this.state.expandAll} changeShowAllToHide={this.changeShowAllToHide}>
                                <FAQ faqNum="3" title="Why would I need a monthly membership—can’t you tell me everything about my family upfront?">
                                    <p>
                                        We can give you some potential information about family members—or Ancestry Hints®—but you will need to explore and verify these in order to learn more about their stories and discover new relatives. Since the number of family members you have to learn about each generation doubles, finding information for all of them isn't a one-and-done experience. Also, Ancestry adds an average of 2 million records to their collections every day—so there is always more to learn and discover.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="4" title="Which subscription is right for me?">
                                    <p>
                                        You have three membership options to choose from depending on your needs: U.S. Discovery gives you access all U.S. records on Ancestry; World Explorer gives you access all U.S. and international records on Ancestry; All Access gives you membership to Ancestry, Newspapers.com Basic‡, and Fold3.com (military records). 
                                    </p>
                                    <LegalNewspapersBasic />
                                </FAQ>
                                <FAQ faqNum="5" title="How long will it take to begin making discoveries?">
                                    <p>
                                        The more information you provide to Ancestry about your family, the faster Ancestry can typically help you make discoveries. Usually it only takes a few minutes to begin making discoveries. You keep making discoveries as you search records for more information about your family.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="6" title="Why is this so expensive? Can’t I find the same historical family information on Google?">
                                    <p>
                                        Through negotiations directly with governments, municipal, and private record holders, Ancestry has the largest online collection of family history records, including many records that cannot be found elsewhere.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="7" title="What happens if I cancel?">
                                    <p>
                                        If you cancel your membership, you won't be able to view most record images or transcriptions (including those already attached to your tree). You also won't be able to initiate new messages via the Message Center. However, there are some features that will still be available to you. For more information, check out <a href="https://support.ancestry.com/s/article/Accounts-after-Cancellation">Ancestry Accounts after Cancellation.</a>
                                    </p>
                                </FAQ>
                                <FAQ faqNum="8" title="Are DNA kits included with a subscription?">
                                    <p>
                                        DNA kits are not included with a subscription. Each must be purchased separately.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="9" title="I’m adopted—or don’t know who my parents are—does Ancestry have anything for me?">
                                    <p>
                                        Ancestry has many records collections that can help customers involved in adoptions make discoveries. For example, you can try searching for adoption records in the Birth, Marriage &nbsp; Death index or searching for orphanage records in the Census & Voter Lists index.
                                    </p>
                                </FAQ>
                            </FAQGroup>
                            <FAQGroup title="Records" expanded={this.state.expandAll} changeShowAllToHide={this.changeShowAllToHide}>
                                <FAQ faqNum="10" title="Where does Ancestry get its family history information?">
                                    <p>
                                        Ancestry gathers records directly from a variety of sources including governments, municipal, and private record holders. Many Ancestry members also upload and make their information publicly available—including photos, stories, and other documents.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="11" title="How many subscribers already use Ancestry? How many family trees have been built on Ancestry?">
                                    <p>
                                        Ancestry has more than three million subscribers across its core Ancestry websites. To date, our customers have built over 110 million family trees.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="12" title="How do I access historical records, and where do I save what I find?">
                                    <p>
                                        From any page on Ancestry, click the Search tab and select All Collections. To search a specific type of record, select that record type instead. To search with extra facts, click the Show more options link. To limit your search results to an exact name or date, select exact under a field. If you find a record you want to keep, simply click the Save button to attach it to your tree.
                                    </p>
                                </FAQ>
                                <FAQ faqNum="13" title="How often do you get new historical information—and how much?">
                                    <p>
                                        Ancestry adds an average of 2 million records per day (from around the world) to its record collections.
                                    </p>
                                </FAQ>
                            </FAQGroup>
                        </div>
                    </section>
                </div>
            )
        }
        return <div></div>
    }
};

export default connect(mapStateToProps)(FAQsSection);