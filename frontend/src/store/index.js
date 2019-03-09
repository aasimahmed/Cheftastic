import { createStore } from "redux";
import rootReducer from "./reducers/reducers"
import { initialState } from "./reducers/reducers";

console.log(initialState)

const store = createStore(rootReducer, initialState);

export default store;

