import { configureStore } from "@reduxjs/toolkit";
import { compose } from "@reduxjs/toolkit";
import appReducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = configureStore({
    reducer: appReducer,
    middleware: [thunk],
    enhancers: [composeEnhancer]
});


export default store;