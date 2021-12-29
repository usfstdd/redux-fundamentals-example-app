import todosReducer from "./features/todos/todosSlice";
import filtersReduce from "./features/filters/filtersSlice";

import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReduce
})

export default rootReducer;