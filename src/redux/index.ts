import { combineReducers, createStore, Reducer } from "redux";
import { productReducer } from "./reducer";
import { ProductState } from "./state";

const reducer = () => combineReducers({
    product: productReducer as Reducer<ProductState | undefined>
})

export const store = () => createStore(reducer);

