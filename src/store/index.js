import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer } from './authReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { jobsReducer } from './jobsReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));