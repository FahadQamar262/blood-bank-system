import { combineReducers, applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/authReducer';

import AuthMiddleware from './middleware/authMiddleware'

export {
    AuthMiddleware
}


const middleware = applyMiddleware(thunk,logger());
export const rootReducer = combineReducers({
    AuthReducer
// more reducers go here
})

export let store = createStore(
    rootReducer,
    middleware
    //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );