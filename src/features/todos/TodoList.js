import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import Header from './header/Header'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <ul>
      <Header></Header>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
