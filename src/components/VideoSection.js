import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} video-section video-section--${styleName}`
}

const VideoSection = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    return (
        <section className={`how-does-ancestry-work flex-container hide480 mlr-8 ${classesMaker(`sparkly-dragon`)}`}>
            <div className="hdaw-flex-item">
                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/illustration-leaf.svg" className="ancestry-leaf" />
            </div>
            <div className="hdaw-flex-item hdaw-content">
                <p className="title">How does Ancestry® work?</p>
                <p className="subtitle">Find out in this 54-second video.</p>
                <button type="button" id="watch-now-new" className="watch-now-btn-new">
                    <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.25/images/youtube.png" className="youtube-img-new" />
                    <span className="bold">Watch now</span>
                </button>
            </div>
            <div className="hdaw-flex-item">
                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.5/images/how-ancestry.png" className="how-tree-ancestry-img" />
            </div>
        </section>
    )
});

export default VideoSection;