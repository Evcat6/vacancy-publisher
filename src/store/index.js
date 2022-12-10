import { createStore, combineReducers, applyMiddleware } from 'redux'
import { jobsReducer } from './jobsReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    jobs: jobsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));