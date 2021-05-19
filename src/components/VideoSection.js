import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/utilities';
import { adobeTargetTrackEvent } from '../actions/tracking';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} video-section video-section--${styleName}`
}

const HowAncestryWorksVideo = () => <iframe width="600" height="338" src="https://www.youtube.com/embed/cFdFkzt45Xw?enablejsapi=1&amp;autoplay=0&amp;rel=0" frameBorder="0" allowFullScreen="" samesite="Strict"></iframe>


export class VideoSection extends React.Component {
    howItWorksVideoModal = () => {
        openModal('.modal--how-ancestry-works-video', {
            destroyOnClose: true,
            open: true,
            showLoading: true,
            width: 600
        })
        adobeTargetTrackEvent({
            eventType: 'clickButton',
            button: 'videoModal'
        })
    }
    videoWrapperTracker = () => {
        adobeTargetTrackEvent({
            eventType: 'clickButton',
            button: 'playVideo'
        })
    }
    render() {
        const pS = this.props.pageSettings;
        if (!!this.props.variables.videoSection) {
            return pS.windowWidth <= pS.breaks.sparklydragon.desktop ? (
                <div className={`video-section-outer-wrapper offerings-variable--${this.props.variables.offerings} scroll-tracking--videoSection`}
                    onClick={() => {
                        adobeTargetTrackEvent({
                            eventType: 'clickSection',
                            section: 'videoSection'
                        })
                    }}
                >
                    <section className={`video-section-container ${classesMaker(`sparkly-dragon`)}`}>
                        <p className="title">How does Ancestry® work?</p>
                        <p className="subtitle">Find out in this 52-second video.</p>
                        {/modal/.test(this.props.variables.videoSection) &&
                            <div>
                                <button type="button" className="watch-now-btn-new" onClick={this.howItWorksVideoModal}>
                                    <img className="youtube-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/youtube.png" />
                                    <span className="bold">Watch now</span>
                                </button>
                                <div className="modal modal--how-ancestry-works-video">
                                    <HowAncestryWorksVideo />
                                </div>
                            </div>
                        }
                        <div className={`relationship-map relationship-map--${this.props.variables.videoSection} lazyBgImg`}>
                            {/embedded/.test(this.props.variables.videoSection) && 
                                <HowAncestryWorksVideo />
                            }
                        </div>
                    </section>
                </div>
            ) : (
                <div className={`video-section-outer-wrapper video-section-outer-wrapper--${this.props.variables.videoSection} offerings-variable--${this.props.variables.offerings} scroll-tracking--videoSection`}
                    onClick={() => {
                        adobeTargetTrackEvent({
                            eventType: 'clickSection',
                            section: 'videoSection'
                        })
                    }}
                >
                    <section className={`how-does-ancestry-work flex-container ${classesMaker(`sparkly-dragon`)}`}>
                        <div className="hdaw-flex-item">
                            <img className="ancestry-leaf lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/illustration-leaf.svg" />
                        </div>
                        <div className="hdaw-flex-item hdaw-content">
                            <p className="title">How does Ancestry® work?</p>
                            <p className="subtitle">Find out in this 54-second video.</p>
                            {/modal/.test(this.props.variables.videoSection) && 
                                <div>
                                    <button type="button" id="watch-now-new" className="watch-now-btn-new" onClick={this.howItWorksVideoModal}>
                                        <img className="youtube-img-new lazyImg" src="https://www.ancestrycdn.com/ui-static/i/loading/1/loading.png" data-src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/youtube.png" />
                                        <span className="bold">Watch now</span>
                                    </button>
                                    <div className="modal modal--how-ancestry-works-video">
                                        <HowAncestryWorksVideo />
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={`hdaw-flex-item relationship-map relationship-map--${this.props.variables.videoSection} lazyBgImg`}>
                            {/embedded/.test(this.props.variables.videoSection) && 
                                <HowAncestryWorksVideo />
                            }
                        </div>
                    </section>
                </div>
            )
        }
        return <div className="video-section--not-included"></div>
    }
};

export default connect(mapStateToProps)(VideoSection);