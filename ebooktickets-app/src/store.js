import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./reducers/ProductReducers";
import userReducer from "./reducers/UserReducer";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from "./reducers/OrderReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    'user': userReducer,

    orderCreate:orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
})

const initialState ={}

const middleware = [thunk]

const store = createStore( reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store