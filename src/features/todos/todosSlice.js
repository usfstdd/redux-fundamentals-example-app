const initiaState = [{
    id: 0,
    text: 'whatch colte steel web programming course and get insights..',
    completed: true,
    color: 'red'
}, {
    id: 1,
    text: 'read MDN documentations of js to fully understand the concepts of JS and see how this language evolved and why?',
    completed: false,
    color: 'purple'
}, {
    id: 2,
    text: 'learn a framework like react',
    completed: false,
    color: 'blue'
}, ]


function nextTodoID(todos) {
    return todos.reduce((newItemID, item) => Math.max(newItemID, item.id) + 1, -1)
}

export default function todosReducer(state = initiaState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return [
                ...state,
                {
                    id: nextTodoID(state),
                    text: action.payload,
                    completed: false,

                }

            ]

        }
        case 'todos/todoToggled': {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;

            })

        }

        default:
            return state;
    }
}