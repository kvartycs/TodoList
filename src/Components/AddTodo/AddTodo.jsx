import React, { useState } from 'react'
import styles from './AddTodo.module.scss'
import { v4 as uuidv4 } from 'uuid'

const AddTodo = ({ setTodo, todo }) => {
  const [value, setValue] = useState('')
  const addTodo = () => {
    setTodo([...todo, { id: uuidv4(), title: value, status: true }])
    setValue('')
  }
  return (
    <div className={styles.root}>
      <input
        className={styles.inp}
        value={value}
        type="text"
        name=""
        id=""
        placeholder="Введите задачу"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.btn} onClick={addTodo}>
        Добавить
      </button>
    </div>
  )
}

export default AddTodo
