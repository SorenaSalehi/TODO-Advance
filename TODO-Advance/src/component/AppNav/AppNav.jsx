import React from "react";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <ul>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Add Task</NavLink>
      </li>
      <li>
        <NavLink>Tasks list</NavLink>
      </li>
      <li>
        {" "}
        <NavLink>Tasks Finished</NavLink>
      </li>
    </ul>
  );
}
