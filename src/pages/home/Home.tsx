import React, {useState} from 'react'
import styles from "./Home.module.css"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import TaskForm from '../../components/TaskForm/TaskForm'
import TaskList from '../../components/TaskList/TaskList'

import { ITask } from '../../interface/Task'



const Home = () => {

  const [taskList, setTaskList] = useState<ITask[]>([])
  return (
    <div>
        <Header />
    <main className={styles.main}>
    <div>
      <h2>O que você vai fazer?//</h2>
      <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
    </div>
    <div>
      <h2>Suas tarefas</h2>
      <TaskList taskList={taskList}/>
    </div>
    </main>
    

        <Footer />
    </div>
  )
}

export default Home