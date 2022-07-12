import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ITask } from "../../interface/Task";

import styles from "./TaskForm.module.css";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number, description: string,): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
      setDescription(task.description)
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty, description);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty, description };

      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
      setDescription("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } if(e.target.name === "difficulty") {
      setDifficulty(parseInt(e.target.value));
    } if(e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade: </label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da Tarefa"
          onChange={handleChange}
          value={difficulty}
        />
        <label htmlFor="description">Descrição: </label>
        <input
          type="textarea"
          name="description"
          placeholder="Descrição da tarefa"
          onChange={handleChange}
          value={description}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
