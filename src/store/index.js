import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../store/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store