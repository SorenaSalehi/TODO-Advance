import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

export default function AppNav() {
  return (
    <nav className={styles.AppNav}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="/public/logo.png"></img>
          
        </NavLink>
      </div>
      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/form">Add Task</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Finished</NavLink>
        </li>
      </ul>
    </nav>
  );
}
