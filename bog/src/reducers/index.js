
/**
 * Created by kamesh on 2/6/17.
 */

/**
 * Created by kamesh on 2/6/17.
 */
import booksreducer from './reducer_books'
import activeBook from './active_book'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    books:booksreducer,
    activebook:activeBook
});
export default rootReducer;
