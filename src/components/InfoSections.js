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
    return `container container--${styleName} info-sections info-sections--${styleName}`
}

const InfoSections = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    if (props.variables.infoSections) {
        return pS.windowWidth < pS.breaks.control.tablet ? (
            <section className={`otherBenefitsCon ${classesMaker(`control`)} offerings-variable--${props.variables.offerings} scroll-tracking--infoSections`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'infoSections'
                    })
                }}
            >
                <section className="exploreCon">
                    <div className="fullPgImgSprite lazyBgImg exploreImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Explore records</h3>
                    <p className="text3xlrg">Discover your family story in billions of records—the largest collection online.</p>
                </section>
                <section className="growCon bgDark bgTexture1 bgColor4">
                    <div className="fullPgImgSprite lazyBgImg growImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Grow your family tree</h3>
                    <p className="text3xlrg">We find new information about your family and help you discover more.</p>
                </section>
                <section className="goCon">
                    <div className="fullPgImgSprite lazyBgImg goImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Go anywhere</h3>
                    <p className="text3xlrg">Take family history along with free mobile apps.</p>
                </section>
                <section className="getCon bgDark bgTexture1 bgColor3">
                    <div className="fullPgImgSprite lazyBgImg getImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Get help</h3>
                    <p className="text3xlrg">Collaborate with the largest family history community—and even find new relatives.</p>
                </section>
            </section>
        ) : (
            <div className={`${classesMaker(`control`)} offerings-variable--${props.variables.offerings} scroll-tracking--infoSections`}
                onClick={() => {
                    adobeTargetTrackEvent({
                        eventType: 'clickSection',
                        section: 'infoSections'
                    })
                }}
            >
                <section className="ftSubPageSection recordsCon">
                    <div className="page bgDark">
                        <div className="ancGrid ancGridEqual ftSubPageGrid">
                            <div className="ancCol w50 ftSubPageBkgCol">
                                <div className="recordsImg"></div>
                            </div>
                            <div className="ancCol w50 ftSubPageContentCol">
                                <div className="recordsContentWrap">
                                    <h2 className="ftSubSectionTitle recordsTitle">The world's most comprehensive record collection.</h2>
                                    <p className="ftSubSectionIntro recordsIntro">An Ancestry membership gives you access to an unparalleled collection of more than 15 billion U.S. records. You’ll have amazing resources at your fingertips including census records, wills, ships' logs, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftSubPageSection familyTreeCon">
                    <div className="page bgDark">
                        <div className="ancGrid ancGridEqual ftSubPageGrid">
                            <div className="ancCol w40 ftSubPageContentCol">
                                <h2 className="ftSubSectionTitle familyTreeTitle">Your family tree will grow and grow.</h2>
                                <p className="ftSubSectionIntro familyTreeIntro">Ancestry makes charting your family history easier and faster than you ever imagined. With an intuitive interface and intelligent Hints, you’ll have guidance every step of the way.</p>
                            </div>
                            <div className="ancCol w60 ftSubPageBkgCol">
                                <div className="familyTreeImg fadeInAnim"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftSubPageSection timelinesCon">
                    <div className="page">
                        <div className="ancGrid ancGridEqual ftSubPageGrid">
                            <div className="ancCol w50 ftSubPageBkgCol">
                                <div className="timelinesImg"></div>
                            </div>
                            <div className="ancCol w50 ftSubPageContentCol">
                                <div className="timelinesContentWrap">
                                    <h2 className="ftSubSectionTitle timelinesTitle">Meet the people behind the facts.</h2>
                                    <p className="ftSubSectionIntro timelinesIntro">Go beyond just dates and names to learn about the lives your ancestors lived. Our timelines turn biographical information into a rich narrative, complete with details about the historical events that may have shaped their lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    return <div></div>
});

export default InfoSections;