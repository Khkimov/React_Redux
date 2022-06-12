import { combineReducers } from "redux";
import { productReducer, selectedProductReduser } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReduser,
})

export default reducers;
