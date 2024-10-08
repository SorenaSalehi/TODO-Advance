import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoProvider, useTodo } from "./Context/TodoContext";

import HomePage from "./pages/HomePage/HomePage";
import Form from "./component/Form/Form";
import Tasks from "./pages/Tasks/Tasks";
import TasksFinished from "./pages/TasksFinished/TasksFinished";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export default function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="form" element={<Form />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="finished" element={<TasksFinished />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        
      </BrowserRouter>
    </TodoProvider>
  );
}
