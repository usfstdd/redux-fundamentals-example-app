import {
    createStore,
    applyMiddleware
} from "redux";
import rootReducer from "./reducer";
import {
    composeWithDevTools
} from "redux-devtools-extension";


import {
    print1,
    print2,
    print3
} from "./exampleAddons/middleware";
const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)

const store = createStore(rootReducer, undefined, composedEnhancer);
export default store;