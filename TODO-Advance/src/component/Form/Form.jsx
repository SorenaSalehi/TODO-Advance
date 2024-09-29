import React from "react";
import AppNav from "../AppNav/Appnav";

export default function Form() {
  return (
    <div>
      <AppNav />

      <form>
        <h1>ARE YOU READY ? 🙂</h1>
        <strong>SO LETS GOOOOOOO</strong>
        <label>TASK</label>
        <input type="text" />
        <label>Description</label>
        <textarea></textarea>
        <label>DATE</label>
        <input type="date" />

        <button>SUBMIT</button>
      </form>
    </div>
  );
}
