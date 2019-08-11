import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import commonReducer from './commonReducer';
import {combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    auth:authReducer,
    product:productReducer,
    cart:cartReducer,
    common:commonReducer,
    firestore:firestoreReducer
})

export default rootReducer;