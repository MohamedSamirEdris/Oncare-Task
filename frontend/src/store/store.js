import { createStore } from "redux";
import { authReducer } from "../reducer/reducer.js";

const store = createStore(authReducer);

export default store;
