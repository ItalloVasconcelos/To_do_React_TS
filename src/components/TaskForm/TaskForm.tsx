import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import { ITask } from '../../interface/Task'

import styles from "./TaskForm.module.css"

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();


      const id = Math.floor(Math.random() * 1000)

      const newTask: ITask = {id, title, difficulty};

      setTaskList!([...taskList, newTask])
      setTitle("")
      setDifficulty(0)

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return <form onSubmit={addTaskHandler} className={styles.form}>
    <div className={styles.input_container}>
        <label htmlFor='Title'>Título: </label>
        <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title}/>
    </div>
    <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade: </label>
        <input type="text" name="difficulty" placeholder="Dificuldade da Tarefa" onChange={handleChange} value={difficulty}/>
    </div>
    <input type="submit" value={btnText}/>
  </form>
}

export default TaskForm