import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import pageSettingReducers from '../reducers/pageSettings';
import variablesReducer from '../reducers/variables';
import subscriptionsReducer from '../reducers/subscriptions';
// import panelsReducer from '../reducers/panels';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            pageSettings: pageSettingReducers,
            variables: variablesReducer
        }),
        // composeEnhancers(applyMiddleware(thunk))
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

// Store Creation
