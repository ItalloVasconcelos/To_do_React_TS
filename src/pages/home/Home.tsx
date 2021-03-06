import  { useState } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";

import { ITask } from "../../interface/Task";
import Modal from "../../components/Modal/Modal";
import useLocalStorage from "../../hooks/localStorage/useLocalStorege";

const Home = () => {
  const [taskList, setTaskList] = useLocalStorage<ITask[]>("taskLst",[]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShow = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShow(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number, description: string, state: string) => {
    const updatedTask: ITask = {id, title, difficulty, description, state}
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
    setTaskList(updatedItems)
    hideOrShow(false)
  }
  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Qual suas tarefas de hoje?</h2>
          <TaskForm
            btnText="Adicionar tarefa!"
            taskList={taskList}
            setTaskList={setTaskList}
            
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
