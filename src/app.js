import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import 'normalize.css/normalize.css';
import './styles/styles.scss';
import OfferPage from './components/OfferPage';

export const store = configureStore();

const jsx = (
    <Provider store={store}>
        <OfferPage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));