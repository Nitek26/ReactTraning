import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState.js'
import { viewReducer, moviesReducer } from './reducers';


const rootReducer = combineReducers({
    viewReducer,
    moviesReducer
});


export const configureStore = () => createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

