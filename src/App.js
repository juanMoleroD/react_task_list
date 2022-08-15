import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {title: "Call Mom", priority: "high"},
    {title: "Buy Groceries", priority: "low"},
    {title: "Walk the dogs", priority: "high"}
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("low")

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let copyOfTasks = [...tasks];
    copyOfTasks.push({title: newTask, priority: newPriority});
    setTasks(copyOfTasks)
    setNewTask("")
  }

  const handleInput = (event) => {
    setNewTask(event.target.value);
  }

  let taskNodes = tasks.map((task, index) => {
    return <li key={index} 
    className={task.priority == "high" ? 
      "high-priority" : "low-priority" }
    >{task.title}</li>;
  })

  const handleHighPriorityInput = (event) => {
    setNewPriority(event.target.value)
    console.log()
  }


  return (
    <main className="App">
        <h1>Tasks</h1>
        <form>
          <label>Add new Task: </label>
          <input type="text" value={newTask} onChange={handleInput}/>
          <input type="radio" name="priority" value="high" onChange={handleHighPriorityInput}/>
          <label htmlFor='priority'>High</label>
          <input type="radio" name="priority" value="low" onChange={handleHighPriorityInput} defaultChecked/>
          <label htmlFor="priority" >Low</label>
          <input type="submit" onClick={handleFormSubmit}/>
        </form>
      <hr></hr>
      <section>
        <h1>Tasks: </h1>
        <ul>
          {taskNodes}
        </ul>
      </section>
      
    </main>
  );
}

export default App;
