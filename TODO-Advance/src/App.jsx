import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Form from "./component/Form/Form";
import TaskList from "./pages/TaskList/TaskList";
import TaskItem from "./pages/TaskItem/TaskItem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<Form />} />
        <Route path="tasks" element={<TaskList />} />
        <Route path="item" element={<TaskItem />} />
      </Routes>
    </BrowserRouter>
  );
}
