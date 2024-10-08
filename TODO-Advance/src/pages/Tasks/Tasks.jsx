import React from "react";
import { Link } from "react-router-dom";

import AppNav from "../../component/AppNav/AppNav";
import TaskItem from "../TaskItem/TaskItem";
import { useTodo } from "../../Context/TodoContext";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const { tasks, finishedTasks } = useTodo();

  const tasksNum = tasks.length - finishedTasks.length;
  return (
    <>
      <AppNav />
      <div className={styles.tasksContainer}>
        <div className={styles.tasks}>
          {tasksNum !== 0 && (
            <h1 className={styles.tasksNum}>
              You have <span>{tasksNum}</span> Tasks
            </h1>
          )}
          {tasksNum === 0 && (
            <>
              <h1 className={styles.tasksNum}>Start to Add Task</h1>
              <button className={`btn ${styles.startBtn}`}>
                <Link to="/form">Add Task</Link>
              </button>
            </>
          )}
          <div className={styles.tasksList}>
            {tasks.length !== 0 &&
              tasks.map((task) => <TaskItem task={task} key={task.id} />)}
          </div>
        </div>
      </div>
    </>
  );
}
