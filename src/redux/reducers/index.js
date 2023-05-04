import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

const   reducers = combineReducers({
    allproducts: productReducer,
    product: selectProductReducer,
})

export default reducers;