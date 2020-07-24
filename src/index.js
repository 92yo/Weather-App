import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import { saveState } from './helpers/localStorage'

import App from './App';

store.subscribe(() => {
    saveState(store.getState().favoritesData)
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
