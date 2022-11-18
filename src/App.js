import React, { useState } from 'react'
import AddTodo from './Components/AddTodo/AddTodo'
import Header from './Components/Header/Header'
import TodoList from './Components/TodoList/TodoList'

function App() {
  const Todos = [
    {
      id: 1,
      title: 'Купить молоко',

      status: true,
    },
    {
      id: 2,
      title: 'Купить хлеб',
      description: 'Простоквашино',
      status: true,
    },
    {
      id: 3,
      title: 'Купить сыр',

      status: false,
    },
  ]
  const [todo, setTodo] = useState(Todos)
  console.log(todo)
  return (
    <div className="App">
      <Header></Header>
      <AddTodo setTodo={setTodo} todo={todo}></AddTodo>
      <TodoList todo={todo} setTodo={setTodo}></TodoList>
    </div>
  )
}

export default App
