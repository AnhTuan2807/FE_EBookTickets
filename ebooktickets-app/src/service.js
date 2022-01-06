import {createStore, combineReducers, applyMiddleware} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer} from './reducers/ProductReducers';

const reducer = combineReducers({
    productList: productListReducer,
})

const initialState = {}


const service = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))

export default service