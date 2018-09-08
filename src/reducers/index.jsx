import {combineReducers} from 'redux';
import pages from './page_reducer';

const rootReducer = combineReducers({
    pages
})

export default rootReducer;