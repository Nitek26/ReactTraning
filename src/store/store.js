import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState.js'
import { viewReducer } from './reducers';


const rootReducer = combineReducers({
    viewReducer
});


export const configureStore = () => createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

