import React, { useState } from 'react'
import styles from './TodoList.module.scss'

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')

  const deleteTodo = (id) => {
    const newTodo = [...todo].filter((item) => item.id !== id)
    setTodo(newTodo)
  }
  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setTodo(newTodo)
  }
  const editTodo = (id, title) => {
    setValue(title)
    setEdit(id)
  }
  const saveTodo = (id) => {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  return (
    <div className={styles.root}>
      {todo.map((item, index) => (
        <div className={styles.inroot} key={item.id}>
          {edit === item.id ? (
            <div className="">
              <input
                className={styles.chtitle}
                type="text"
                name=""
                id=""
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder="Введите новое название"
              />
            </div>
          ) : (
            <div className={!item.status ? styles.done : styles.title}>
              {index + 1}. {item.title}
            </div>
          )}
          {edit === item.id ? (
            <div className="">
              <button className={styles.save} onClick={() => saveTodo(item.id)}>
                Сохранить
              </button>
            </div>
          ) : (
            <div className="">
              <button
                className={styles.delete}
                onClick={() => deleteTodo(item.id)}
              >
                Удалить
              </button>
              <button
                disabled={item.status ? false : true}
                className={styles.completed}
                onClick={() => statusTodo(item.id, item.title)}
              >
                Выполнено!
              </button>
              <button
                className={styles.change}
                onClick={() => editTodo(item.id)}
              >
                Редактировать
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoList
