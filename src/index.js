import store from "./store";
console.log("initial State is:", store.getState())

const unSubscribe = store.subscribe(() =>
  console.log('store after dispatch', store.getState())
)

store.dispatch({
  type: "todos/todoAdded",
  payload: 'read these book that jadi suggested'
})

store.dispatch({
  type: "todos/todoAdded",
  payload: 'see the jadi\'s network course '
})

store.dispatch({
  type: "todos/todoAdded",
  payload: 'watch the don\'t loo up movie'
})

store.dispatch({
  type: 'todos/todoToggled',
  payload: 3
})

store.dispatch({
  type: 'todos/todoToggled',
  payload: 1
})

store.dispatch({
  type: 'filter/statusFilterChanged',
  payload: {
    color: 'red',
    changeType: 'added'
  }
})

store.dispatch({
  type: 'filter/statusFilterChanged',
  payload: 'Active'
})

unSubscribe();
store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Try creating a store'
})