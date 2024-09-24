import React, { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    setShowForm(false); // Hide the form after adding a task
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>To-Do List</h1>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <ToDo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>

        {showForm && <ToDoForm addTodo={addTodo} toggleForm={toggleForm} />}

        <button className="add-task-button" onClick={toggleForm}>
          {showForm ? "Cancel" : "Add Task"}
        </button>

      </div>
    </div>
  );
}

export default App;