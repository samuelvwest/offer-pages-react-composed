import React from 'react';
import { connect } from 'react-redux';
import { AncestryIcon, Circle, IllustrationLeaf } from './SVGs';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} examples-section examples-section--${styleName}`
}


export class ExamplesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storyExpanded: 'none'
        }
    }
    changeStoryExpanded = (newSetting) => {
        this.setState({ storyExpanded: newSetting })
    }
    render() {
        if (this.props.variables.examplesSection) {
            return (
                <div className={`ancGrid ancGridEqual exampleWrapper examples-outer-wrap-desk ${classesMaker(`sparkly-dragon`)}`}>
                    <hr className="hr-line-mtb10 mlr-0"></hr>
                    {this.props.pageSettings.windowWidth < this.props.pageSettings.breaks.sparklydragon.desktop ? 
                        <section className="con example-content pg-4">
                            <header className="conHeader">
                                <h2 className="conTitle examples-head">Examples of what you could find:</h2>
                            </header>
                            <div className="conBody examples-full-wrap">
                                <div className="ancCol">
                                    <div className="topSpacing mb-6">
                                        <div className="borderLeft">
                                            <div className="borderInner">
                                                <img className="census" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/us-story-small.png" />
                                                <div className="userCardContent">
                                                    <h6 className="userCardTitle topSpacing">My grandpa was a moonshine-making prisoner.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sectionMargin">
                                            <hr className="hr-line-mtb10" />
                                            <div className="userCardContent">
                                                <div className="usercontainer">
                                                    <div className="userTitleWrapper">
                                                        <h6 className="userCardTitle">Heidi C.</h6>
                                                        <p className="userCardSubTitle member">Found in U.S. records</p>
                                                    </div>
                                                    <div className="userCardPile">
                                                        <span className="userCardImg userCardPortrait user-card-img-new" title="Person 1 Name, birth-death">
                                                            <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/heidi.png" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btnToggle topSpacing">
                                                <button type="button"
                                                    className={`ancBtn see-story-btn full-width ${/heidi/.test(this.state.storyExpanded) ? `noDisplay` : ``}`} 
                                                    onClick={() => {this.changeStoryExpanded('heidi')}}
                                                >
                                                    See story
                                                </button>
                                            </div>
                                            <div className={`story-wrap-mbl memberExpand topSpacing ${!/heidi/.test(this.state.storyExpanded) ? `noDisplay` : ``}`}>
                                                <img className="full-width" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/green-line-mbl.svg" />
                                                <div className="expandHeaderClose">
                                                    <header className="conHeader topSpacing">
                                                        <h2 className="conTitle example-stories-title">
                                                            Heidi’s Story
                                                            <span className="closeIcon closeIconMbl" onClick={() => {this.changeStoryExpanded('none')}}></span>
                                                        </h2>
                                                    </header>
                                                </div>
                                                <div className="conBody">
                                                    <div className="flex-container">
                                                        <div className="example1-story-img example-leaf-container">
                                                            <div className="leaf-container">
                                                                <img className="circle-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.7/images/story1-img1.svg" /> 
                                                                <IllustrationLeaf classNames="example-circle-leaf" />
                                                            </div>
                                                        </div>
                                                        <div className="example1-story-desc-wrap">
                                                            <p className="bold">One of Heidi’s first leaf hints revealed her great-grandfather was in prison.</p>
                                                            <p className="example1-story-subdesc">This was definitely an intriguing way to start her family history journey with Ancestry—and she was <span className="sub">hooked. But who exactly was this Konstantyn Sobocinski she found in the 1930 census? And how did he end up in the slammer?</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="example-text-split">hooked. But who exactly was this Konstantyn Sobocinski she found in the 1930 census? And how did he end up in the slammer?</div>
                                                    <div>
                                                        <div className="userCardContent example-user-content">
                                                            <h6 className="userCardTitle">1930 U.S. Census Record</h6>
                                                            <p className="userCardSubTitle member">Found in U.S. records</p>
                                                            <div className="story2-mbl-img-wrap-new rel-pos">
                                                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.56/images/us-story-img1.png" className="spacing-bottom-small story2-mbl-img-new" />
                                                            </div>
                                                            <div className="mobile-example-title">The 1930 census had him at the Warrensville Correction Farm.</div>
                                                        </div>
                                                    </div>
                                                    <div className="child2 show320">
                                                        <img className="mt-2 img-fluid-width mob-example-img rounded-sm" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/image85.png" />
                                                    </div>
                                                    <div className="story-examples-two-panel">
                                                        <div className="child1">
                                                            <div className="bold mt-2">Her mother added some color to the story. And it was certainly colorful.</div>
                                                            <p>There was family lore that Konstantyn was caught making bootleg moonshine in a bathtub, then <span className="show490">poured it out and ran away as the police came to get him. With those long-forgotten details uncovered, Heidi had an epiphany: the adventurous spirit she had always felt was truly in her bloodline.</span></p>
                                                        </div>
                                                        <div className="child2 hide320">
                                                            <img className="mt-2 img-fluid-width mob-example-img rounded-sm" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/image85.png" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 no-top-margin hide490">poured it out and ran away as the police came to get him. With those long-forgotten details uncovered, Heidi had an epiphany: the adventurous spirit she had always felt was truly in her bloodline.</div>
                                                    <div className="story-examples-two-panel section2">
                                                        <div className="child2">
                                                            <img className="mt-2 img-fluid-width mob-example-img hide320 show480" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story1-crocs-img.png" />
                                                        </div>
                                                        <div className="child1">
                                                            <div className="bold mt-2">Inspired by her discovery, Heidi decided to follow her wild side.</div>
                                                            <p>She quit her office desk job, and headed for the swamps of Florida. Today Heidi dodges alligators and snakes as she leads eco tours a million miles away from the life she used to lead. Her biggest regret now? Not getting to share a drink of moonshine with her great-grandfather.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing flex-container">
                                                    <button className="ancBtn close-story-btn-mbl usdis-story-close-mbl" type="button" onClick={() => {this.changeStoryExpanded('none')}}>Close</button> 
                                                    <img className="mt-2 img-fluid-width mob-example-img story1-crocs-img show320" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story1-crocs-img.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topSpacing memberExpand blueContainer">
                                        <div className="borderLeft blue">
                                            <div className="borderInner">
                                                <img className="census" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/world-exp-small.png" />
                                                <div className="userCardContent">
                                                    <h6 className="userCardTitle topSpacing">My 2nd great-grandfather was an oil-paint-peddling home decorator.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sectionMargin">
                                            <hr className="hr-line-mtb10" />
                                            <div className="userCardContent">
                                                <div className="usercontainer">
                                                    <div className="userTitleWrapper">
                                                        <h6 className="userCardTitle">Ben C.(<AncestryIcon /> Employee)</h6>
                                                        <p className="userCardSubTitle member-blue">Found in international records</p>
                                                    </div>
                                                    <div className="userCardPile">
                                                        <span className="userCardImg userCardPortrait user-card-img-new">
                                                            <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/ben-c.png" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btnToggle topSpacing">
                                                <button className={`ancBtn blue see-story-btn ${/ben/.test(this.state.storyExpanded) ? `noDisplay` : ``}`} type="button" onClick={() => {this.changeStoryExpanded('ben')}}>See story</button>
                                            </div>
                                            <div className={`story-wrap-mbl memberExpand topSpacing ${!/ben/.test(this.state.storyExpanded) ? `noDisplay` : ``}`}>
                                                <img className="full-width" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/blue-line-mbl.svg" />
                                                <div className="expandHeaderClose">
                                                    <header className="conHeader topSpacing">
                                                        <h2 className="conTitle example-stories-title">Ben’s Story<span className="closeIcon closeIconMbl" onClick={() => {this.changeStoryExpanded('none')}}></span></h2>
                                                    </header>
                                                </div>
                                                <div className="conBody">
                                                    <div className="flex-container flex-center story2-main-container">
                                                        <div>
                                                            <p>After discovering that both his great-grandparents were deaf from U.S. records, Ben began searching international records to see what else he could find.</p>
                                                            <img className="story2-notes2-img hide320 show480" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes2.png" />
                                                        </div>
                                                        <img className="story2-notes1-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes1.png" />
                                                    </div>
                                                    <div className="story2-main-sign-img">
                                                        <img className="story2-notes2-img show320" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes2.png" />
                                                    </div>
                                                    <p className="hide320 show480 show768">In the 1891 England Census, he learned that his 2nd great-grandfather, Frederick Charles Hobbs, worked as a colorman, or purveyor of oil paints.</p>
                                                    <div className="userCardContent example-user-content">
                                                        <h6 className="userCardTitle">1891 U.K. Census Record</h6>
                                                        <p className="userCardSubTitle member-blue">Found in international records</p>
                                                        <div className="story2-mbl-img-wrap-new rel-pos">
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/320-480-exp2a.png" className="story2-mbl-img-new" />
                                                        </div>
                                                        <div className="mobile-example-title">The 1891 U.K. Census Record showing his grandpa as a “Oil + Colorman”.</div>
                                                    </div>
                                                    <div className="flex-container flex-center">
                                                        <p>As an art and design practitioner himself, Ben began looking at other records for Frederick. He found out that Frederick changed his occupation from colorman to house decorator from the 1901 England Census.</p>
                                                        <img className="story2-pen-sign-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-pen-sign.png" />
                                                    </div>
                                                    <div className="userCardContent example-user-content">
                                                        <h6 className="userCardTitle">1901 U.K. Census Record</h6>
                                                        <p className="userCardSubTitle member-blue">Found in international records</p>
                                                        <div className="story2-mbl-img-wrap-new rel-pos">
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/320-480-exp2b.png" className="story2-mbl-img-new" />
                                                        </div>
                                                        <div className="mobile-example-title">The 1891 U.K. Census Record showing his grandpa as a “Oil + Colorman”.</div>
                                                    </div>
                                                    <div className="flex-container mt-2">
                                                        <p>Using the 1901 England Census and other death records, Ben was also able to find information that connected him to his 3rd and 4th generation grandparents in just a few hours.</p>
                                                        <div>
                                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-house-group.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing" id="closeBtnContainer">
                                                    <button className="ancBtn blue close-story-btn-mbl" type="button" onClick={() => {this.changeStoryExpanded('none')}}>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        : <section className="con example-content">
                            <header className="conHeader">
                                <h2 className="conTitle examples-head">Examples of what you could find:</h2>
                            </header>
                            <div className="conBody">
                                <div className="ancGrid">
                                    <div className="ancCol w33">
                                        <div className="topSpacing">
                                            <div className="borderLeft rel-pos example-pos">
                                                <div className="borderInner example-hero-wrap">
                                                    <img className="census example-hero-img rounded-2" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/us-story-small.png" />
                                                    <div className="userCardContent">
                                                        <h6 className="userCardTitle topSpacing">My grandpa was a moonshine-making prisoner.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sectionMargin">
                                                <hr className="hr-line-mtb10" />
                                                <div className="userCardContent">
                                                    <div className="usercontainer">
                                                        <div className="userTitleWrapper">
                                                            <h6 className="userCardTitle">Heidi C.</h6>
                                                            <p className="userCardSubTitle usercard-subtitle-new">
                                                                <span className="user-subtitle-dot">
                                                                    <Circle fillColor="#6BA410" />
                                                                </span>
                                                                Found in U.S. records
                                                            </p>
                                                        </div>
                                                        <div className="userCardPile">
                                                            <span className="userCardImg userCardPortrait user-card-img-new" title="Person 1 Name, birth-death">
                                                                <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/heidi.png" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing">
                                                    <button type="button" 
                                                        className={`ancBtn see-story-btn full-width ${/heidi/.test(this.state.storyExpanded) ? `noDisplay` : ``}`} 
                                                        onClick={() => {this.changeStoryExpanded('heidi')}}
                                                    >
                                                        See story
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ancCol w33">
                                        <div className="topSpacing memberExpand blueContainer">
                                            <div className="borderLeft worldex rel-pos example-pos">
                                                <div className="borderInner example-hero-wrap">
                                                    <img className="census example-hero-img rounded-2" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/world-exp-small.png" />
                                                    <div className="userCardContent">
                                                        <h6 className="userCardTitle topSpacing">My 2nd great-grandfather was an oil-paint-peddling home decorator.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sectionMargin">
                                                <hr className="hr-line-mtb10" />
                                                <div className="userCardContent">
                                                    <div className="usercontainer">
                                                        <div className="userTitleWrapper">
                                                            <h6 className="userCardTitle">Ben C.(<AncestryIcon /> Employee)
                                                            </h6>
                                                            <p className="userCardSubTitle usercard-subtitle-new">
                                                                <span className="user-subtitle-dot">
                                                                    <Circle fillColor="#0079A3" />
                                                                </span>
                                                                Found in international records
                                                            </p>
                                                        </div>
                                                        <div className="userCardPile">
                                                            <span className="userCardImg userCardPortrait user-card-img-new">
                                                                <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.12/images/ben-c.png" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing">
                                                    <button type="button" 
                                                        className={`ancBtn blue see-story-btn full-width ${/ben/.test(this.state.storyExpanded) ? `noDisplay` : ``}`} 
                                                        onClick={() => {this.changeStoryExpanded('ben')}}
                                                    >
                                                        See story
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ancCol w33">
                                        <div className="topSpacing memberExpand blueContainer">
                                            <div className="borderLeft allacc rel-pos example-pos">
                                                <div className="borderInner example-hero-wrap">
                                                    <img className="example-hero-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/example3-hero-img.png" />
                                                    <div className="userCardContent">
                                                        <h6 className="userCardTitle topSpacing">Discovering the African American heroes in my family tree.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sectionMargin">
                                                <hr className="hr-line-mtb10" />
                                                <div className="userCardContent">
                                                    <div className="usercontainer">
                                                        <div className="userTitleWrapper">
                                                            <h6 className="userCardTitle">Michelle M.</h6>
                                                            <p className="userCardSubTitle usercard-subtitle-new">
                                                                <span className="user-subtitle-dot">
                                                                    <Circle fillColor="#61527E" />
                                                                </span>
                                                                <span>Found on Fold3.com and <span className="story3-examples-caption">Newspapers.com</span></span>
                                                            </p>
                                                        </div>
                                                        <div className="userCardPile">
                                                            <span className="userCardImg userCardPortrait user-card-img-new">
                                                                <img alt="" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/michelle.png" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnToggle topSpacing">
                                                    <button type="button" 
                                                        className={`ancBtn allaccess-btn-bgcolor see-story-btn full-width ${/michelle/.test(this.state.storyExpanded) ? `noDisplay` : ``}`}
                                                        onClick={() => {this.changeStoryExpanded('michelle')}}
                                                    >
                                                        See story
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`story-wrap memberExpand mt-2 usdis-story-wrap-desk ${!/heidi/.test(this.state.storyExpanded) ? `noDisplay` : ``}`}>
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/green-line-desk.svg" className="full-width" />
                                <div className="expandHeaderClose rel-pos">
                                    <header className="conHeader topSpacing rel-pos">
                                        <h2 className="conTitle example-stories-title">Heidi’s Story</h2>
                                    </header>
                                    <button className="closeBtn link alertCloseBtn" type="button" aria-label="Close alert" onClick={() => {this.changeStoryExpanded('none')}}></button>
                                </div>
                                <div className="conBody">
                                    <div className="flex-container">
                                        <div className="example1-story-img">
                                            <div className="person-leaf-wrapper">
                                                <img className="circle-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.7/images/story1-img1.svg" /> 
                                                <IllustrationLeaf classNames="example-circle-leaf" />
                                            </div>
                                        </div>
                                        <div className="example1-story-desc-wrap">
                                            <p className="bold">One of Heidi’s first leaf hints revealed her great-grandfather was in prison.</p>
                                            <p className="example1-story-subdesc">This was definitely an intriguing way to start her family history journey with Ancestry—and she was hooked. But who exactly was this Konstantyn Sobocinski she found in the 1930 census? And how did he end up in the slammer?</p>
                                            <div className="userCardContent example-user-content">
                                                <h6 className="userCardTitle">1930 U.S. Census Record</h6>
                                                <p className="userCardSubTitle member">Found in U.S. records</p>
                                            </div>
                                            <div className="story1-sign-768-wrap rel-pos">
                                                <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/story-sign-768.png" />
                                            </div>
                                            <div className="mobile-example-title">The 1930 census had him at the Warrensville Correction Farm.</div>
                                        </div>
                                    </div>
                                    <div className="flex-container mt-6 story1-bot-sec-wrap">
                                        <div className="example1-story-img1 pr-6 rel-pos">
                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story1-img2-desk.png" />
                                        </div>
                                        <div className="example1-story-desc-wrap">
                                            <p className="bold">Her mother added some color to the story. And it was certainly colorful.</p>
                                            <p className="example1-story-subdesc">There was family lore that Konstantyn was caught making bootleg moonshine in a bathtub, then poured it out and ran away as the police came to get him. With those long-forgotten details uncovered, Heidi had an epiphany: the adventurous spirit she had always felt was truly in her bloodline.</p>
                                            <p className="bold">Inspired by her discovery, Heidi decided to follow her wild side.</p>
                                            <p className="example1-story-subdesc">She quit her office desk job, and headed for the swamps of Florida. Today Heidi dodges alligators and snakes as she leads eco tours a million miles away from the life she used to lead. Her biggest regret now? Not getting to share a drink of moonshine with her great-grandfather.</p>
                                        </div>
                                    </div>
                                    <div className="btnToggle topSpacing textCenter storyCloseBtnContainer center-btn">
                                        <button className="ancBtn stories-close-btn" type="button" onClick={() => {this.changeStoryExpanded('none')}}>Close</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`story-wrap memberExpand mt-2 ${!/ben/.test(this.state.storyExpanded) ? `noDisplay` : ``}`}>
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/blue-line-desk.svg" className="full-width" />
                                <div className="expandHeaderClose rel-pos">
                                    <header className="conHeader topSpacing rel-pos">
                                        <h2 className="conTitle example-stories-title">Ben’s Story</h2>
                                    </header>
                                    <button className="closeBtn link alertCloseBtn" type="button" aria-label="Close alert" onClick={() => {this.changeStoryExpanded('none')}}></button>
                                </div>
                                <div className="conBody">
                                    <div className="flex-container">
                                        <div className="example2-story-sec1-img rel-pos">
                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-notes1.svg" className="story2-notes-img" />
                                        </div>
                                        <div className="example2-story-sec1">
                                            <p>After making multiple discoveries with U.S. records alone—including the discovery that both of his great-grandparents were deaf—Ben began searching international records.</p>
                                            <p>In the 1891 England Census, he learned that his 2nd great-grandfather, Frederick Charles Hobbs, worked as a colorman, or purveyor of oil paints.</p>
                                            <div className="userCardContent example-user-content">
                                                <h6 className="userCardTitle">1891 U.K. Census Record</h6>
                                                <p className="userCardSubTitle member-blue">Found in international records</p>
                                            </div>
                                            <div className="story1-sign-768-wrap rel-pos">
                                                <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/story2-sign-768.png" />
                                            </div>
                                            <div className="mobile-example-title">The 1891 U.K. Census Record showing his grandpa as a “Oil + Colorman”.</div>
                                            <p>As an art and design practitioner himself, Ben began looking at other records for Frederick. He found out that Frederick changed his occupation from colorman to house decorator from the 1901 England Census.</p>
                                            <div className="userCardContent example-user-content">
                                                <h6 className="userCardTitle">1901 U.K. Census Record</h6>
                                                <p className="userCardSubTitle member-blue">Found in international records</p>
                                            </div>
                                            <div className="story1-sign-768-wrap rel-pos">
                                                <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.30/images/story2-sign-1-768.png" />
                                            </div>
                                            <div className="mobile-example-title">The 1901 U.K. Census Record showing his grandpa as a “House Decorator”.</div>
                                            <div className="example2-story-testimonial-container">
                                                <div>
                                                    <p>Using the 1901 England Census and other death records, Ben was also able to find information that connected him to his 3rd and 4th generation grandparents in just a few hours.</p>
                                                </div>
                                                <div className="example2-story-sec2-img">
                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story2-pen-sign.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btnToggle topSpacing textCenter storyCloseBtnContainer center-btn">
                                        <button className="ancBtn stories-close-btn blue" type="button" onClick={() => {this.changeStoryExpanded('none')}}>Close</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`story-wrap memberExpand mt-2 ${!/michelle/.test(this.state.storyExpanded) ? `noDisplay` : ``}`}>
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/violet-line-desk.svg" className="full-width" />
                                <div className="expandHeaderClose rel-pos">
                                    <header className="conHeader topSpacing rel-pos">
                                        <h2 className="conTitle example-stories-title">Michelle’s Story</h2>
                                    </header>
                                    <button className="closeBtn link alertCloseBtn" type="button" aria-label="Close alert" onClick={() => {this.changeStoryExpanded('none')}}></button>
                                </div>
                                <div className="conBody">
                                    <div className="flex-container flex-center mb-4 story3-person-container">
                                        <div className="example3-story-sec1">
                                            <p>I was a sophomore in college when a friend of mine made a discovery about my family history that was so powerful it led me to a lifelong passion for my family history.</p>
                                            <p>My great-grandfather was born into slavery.</p>
                                            <p className="example3-para">The document that really got me intrigued, that I credit with bringing my family history to life for me, is this 1920 census record.</p>
                                        </div>
                                        <div className="example3-story-sec1-img">
                                            <div>
                                                <figure>
                                                    <img className="story3-person" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/story3-person-desk.png" />
                                                    <figcaption className="figcaption">Rev. Peter Vaughters, my great-grandfather</figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="story3-census-container">
                                        <div className="userCardContent example-user-content">
                                            <h6 className="userCardTitle">1920 U.S. Census Record</h6>
                                            <p className="userCardSubTitle member">Found in U.S. records</p>
                                        </div>
                                        <div className="story1-sign-768-wrap rel-pos">
                                            <img className="story3-sign-768-1 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.29/images/story3-sign-768-1.png" />
                                        </div>
                                        <div className="mobile-example-title">This 1920 census record brought my family history to life. According to the 1920 census, Peter Vaughters would have been born in 1852.</div>
                                    </div>
                                    <div className="flex-container flex-center topMargin">
                                        <div className="example3-story-sec2">
                                            <p>This record brought my family history to life. I remember we gathered together as a family to pour over the details in it. My sisters and I sprawled out on the floor of the living room while my mother and grandmother sat close by.</p>
                                            <p>We tried to look at everything. Who could read and write? Who owned land and what did everyone do for a living? According to this document my grandmother’s father Peter Vaughters would have been born in 1852. Remembering the Civil War wasn’t over until 1865, I pressed forward. “Mommom, was your dad born a slave?”, I asked. She sunk into her seat a little bit, and softly said yes.</p>
                                        </div>
                                        <div className="example3-story-sec2-img">
                                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.15/images/story3-person2-group.png" />
                                            <div className="story3-person-desc">Me and my Grandmother Estella, or “Mommom,” as we called her.</div>
                                        </div>
                                    </div>
                                    <div className="article-container">
                                        <div className="left-wrapper">
                                            <div className="userCardContent example-user-content">
                                                <h6 className="userCardTitle">1951 Newspaper Article</h6>
                                                <div className="story3-newspaper-wrapper">
                                                    <p className="userCardSubTitle member-purple">Found on</p>
                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/newpapers.svg" className="top-spacing-none" />
                                                </div>
                                            </div>
                                            <div className="story1-sign-768-wrap rel-pos">
                                                <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.38/images/768+-np-AA.png" />
                                                <div className="mobile-example-title">This news story about Samuel Rothwell—the son of Issac Rothwell—mentions that his father served in the Civil War.</div>
                                            </div>
                                        </div>
                                        <div className="right-wrapper mt-6">
                                            <p>With her confirmation that her dad was born into slavery, I had a whirlwind of new questions. Who owned him? How did he survive? What was his life like?</p>
                                            <p>But being born a slave turned out to be just one of many of the surprises in Peter’s life. A few of the most extraordinary things I discovered about him were:</p>
                                            <ul className="para-list mt-2">
                                                <li>He started a school. And my grandmother attended it. Discovering that was a mind-blowing moment.</li>
                                                <li>He ended up owning 90 acres of land in Georgia.</li>
                                                <li>He was a widower who married 3 times–and had 21 children.</li>
                                            </ul>
                                            <p>The 1920 census record was the tip that started our journey towards finding all of my grandmother’s siblings on paper.</p>
                                            <p>I also have another perspective of the war from my father’s side of my family tree. It started with a shaky leaf hint from Ancestry on my family tree that indicated I might have a Civil War vet in the family. The hint was a Civil War muster roll. I eventually found a <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/newpapers.svg" className="top-spacing-none img-as-text align-middle" /> article from 1951 that mentioned that my 3rd great grandfather—Isaac Rothwell—was a Civil War veteran. He served in the same regiment as his two brothers, Alfred and Samuel Rothwell.</p>
                                            <p>On <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/fold.svg" className="top-spacing-none img-as-text" />, I was able to locate Isaac’s pension file—something that was necessary for me to have in order to request files at the National Archives.</p>
                                            <p>Their character, strength and faith have been passed down to our current generations and we are grateful for it.</p>
                                            <div className="userCardContent example-user-content">
                                                <h6 className="userCardTitle">Civil War Soldiers • Union • Colored Troops 2nd-7th Infantry</h6>
                                                <div className="story3-persions">
                                                    <p className="userCardSubTitle member-purple">Found on</p>
                                                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.13/images/fold.svg" className="top-spacing-none" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="story1-sign-768-wrap rel-pos">
                                                    <img className="story1-sign-768 rel-pos" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.54/images/story3-form.png" />
                                                </div>
                                                <div className="mobile-example-title">Compiled military service records of volunteer Union soldiers who served with the United States Colored Troops, 2nd through 7th Colored Infantry, 1861-65.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btnToggle topSpacing textCenter storyCloseBtnContainer center-btn">
                                        <button className="ancBtn stories-close-btn allaccess-btn-bgcolor" type="button" onClick={() => {this.changeStoryExpanded('none')}}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                </div>
            )
        }
        return <div></div>
    }
};

export default connect(mapStateToProps)(ExamplesSection);