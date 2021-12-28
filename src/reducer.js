import todosReducer from "./features/todos/todosSlice";
import filtersReduce from "./features/filters/filtersSlice";

import {
    combineReducer
} from 'redux';

const rootReducer = combineReducer({
    todos: todosReducer,
    filters: filtersReduce
})

export default rootReducer;