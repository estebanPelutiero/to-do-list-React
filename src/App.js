import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./app.css";


function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
        <div>
          <ToDoList
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
