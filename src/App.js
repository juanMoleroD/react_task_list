import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    "Groceries", "Dog for a walk", "Call mom"
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("low")

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let copyOfTasks = [...tasks];
    copyOfTasks.push(newTask);
    setTasks(copyOfTasks)
    setNewTask("")
  }

  const handleInput = (event) => {
    setNewTask(event.target.value);
  }

  let taskNodes = tasks.map((task, index) => {
    return <li key={index}>{task}</li>;
  })

  const handleHighPriorityInput = (event) => {
    setNewPriority(event.target.priority.value)
  }



  return (
    <main className="App">
      <nav>
        <form>
          <label>Add new Task: </label>
          <input type="text" value={newTask} onChange={handleInput}/>
          <input type="radio" name="priority" value="high" onClick={handleHighPriorityInput}/>
          <label htmlFor='priority'>High</label>
          <input type="radio" name="priority" value="low"/>
          <label htmlFor="priority" >Low</label>
          <input type="submit" onClick={handleFormSubmit}/>
        </form>
      </nav>
      <br/>
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
