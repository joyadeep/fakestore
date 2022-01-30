import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
const rootreducer=combineReducers({
    itemReducer,
    cartReducer
})
export default rootreducer;
