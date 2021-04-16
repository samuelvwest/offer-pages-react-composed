import React from 'react';
import { connect } from 'react-redux';
import { AncestryLogo, GiftIcon } from './SVGs';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
}

const classesMaker = (styleName) => {
    return `container container--${styleName} other-products-section other-products-section--${styleName}`
}

const OtherProductsSection = connect(mapStateToProps)((props) => {
    const pS = props.pageSettings;
    const subs = pS.subscriptions;
    if (props.variables.otherProductsSection) {
        return (
            <div className={`other-products-wrapper offerings-variable--${props.variables.offerings}`}>
                <div className={`seperate-products mb-6 ${classesMaker(`sparkly-dragon`)}`}>
                    <h1 className="conTitle feature-title">Other Products</h1>
                    <div className="products-wrapper">
                        <a className="logo-dna-wrap-new" href="https://www.ancestry.com/dna/">
                            <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.40/images/logo-dna.png" className="logo-dna-new" />
                        </a>
                        <a className="logo-health-wrap-new" href="https://www.ancestry.com/cs/gift-selection">
                            <AncestryLogo classNames="logo-ancestry-full" />
                            <GiftIcon classNames="gift-icon" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return <div></div>
});

export default OtherProductsSection;