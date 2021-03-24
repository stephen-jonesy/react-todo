import './App.css';
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import useOutsideClick2 from "./components/useOutsideClick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [todoArray, setTodoArray] = useState( [
    {id: 1, text: 'Shopping', isComplete: false, priority: 'Low', num: 2},
    {id: 2, text: 'Learn React', isComplete: true, priority: 'High', num: 1},
    {id: 3, text: 'Running', isComplete: false, priority: 'Medium', num: 3},
  ])
  const [count, setCount] = useState(todoArray.length +1);
  const [isActive, setIsActive] = useState(false);
  const toggleSortList = () => setIsActive(!isActive);


  const ref = useRef();

  useOutsideClick2(ref, () => {
    if (isActive) setIsActive(!isActive);
  });

  const addTodo = (todo) => {
    setCount(count +1)
    const name = {id: count, text: todo.text, isComplete: false, priority: todo.priority}
    setTodoArray([...todoArray, name])

  }

  const toggleComplete = (id) => {
    setTodoArray(
      todoArray.map((todo) =>
        todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo
      )
    )
  }

  const togglePriority = (id, newPriority) => {
    setTodoArray(
      todoArray.map((todo) =>
        todo.id === id ? {...todo, priority: newPriority} : todo
      )
    )

  }

  const removeTodo = (id) => {
    setTodoArray(
      todoArray.filter((todo) => todo.id !== id )
    )
  }

  const sortByPriority = () => {
    const sorted = [...todoArray].sort((a, b) => {
      const sorter = {
        "Not set": 0,
        "Low": 1,
        "Medium": 2,
        "High": 3,
      }
      return sorter[a.priority] - sorter[b.priority]
    });
    setTodoArray(sorted);
  }

  const sortByComplete = () => {
    const sorted = [...todoArray].sort((a, b) => {
      return a.isComplete - b.isComplete
    });
    setTodoArray(sorted);

  }
  
  return (
    <div className="App">
      <Header addTodo={addTodo} />
      <div className="sort-container">
        <button className="sort-btn" onClick={toggleSortList} ref={ref} >Sort <FontAwesomeIcon icon={faSortDown} className="arrow-icon" />
          <div className={` ${isActive ? "sort-list-active" : "sort-list"}`} >
            <button className="sort-list-btn" onClick={sortByPriority}>Priority</button>
            <button className="sort-list-btn" onClick={sortByComplete}>Completed</button>
          </div>
        </button>
      </div>
      <Todos todoArray={todoArray} sortByPriority={sortByPriority} sortByComplete={sortByComplete} toggleComplete={toggleComplete} togglePriority={togglePriority} removeTodo={removeTodo} />

    </div>
  );
}

export default App;
