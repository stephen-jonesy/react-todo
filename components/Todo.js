import React, { useState, useRef } from 'react';
import useOutsideClick from "./useOutsideClick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Todo = ({todo, toggleComplete, togglePriority, removeTodo}) => {
    const [isActive, setIsActive] = useState(false);
    const togglePriorityList = () => setIsActive(!isActive);
    const [priority, setPriority] = useState('Not set');

    const ref = useRef();

    const onClick = (e) => {
        e.preventDefault()
        togglePriority(todo.id, priority)

    }

    useOutsideClick(ref, () => {
        if (isActive) setIsActive(!isActive);
    });

    return (
        <div className='todo'>
            <button className="completed-btn-container" onClick={() => toggleComplete(todo.id)}>
                <div className={todo.isComplete ? "check-box-active": "check-box"} ><FontAwesomeIcon icon={faCheck} size="xs"/></div>
            </button>
            <div className="title-btn-container">
                <div className="todo-text">{todo.text}</div>
            </div>
            <div className="priority-btn-container">
                <button className="priority-btn" onClick={togglePriorityList} style={todo.priority === 'High' ? { backgroundColor:'#A61C3C'}: todo.priority === 'Medium' ? { backgroundColor:'#F4AC45'} : todo.priority === 'Low' ? { backgroundColor:'#92BFB1'} : {backgroundColor:'gray'}} ref={ref}>
                    {todo.priority}
                    <nav className={`menu ${isActive ? "active" : "inactive"}`}>
                        <form onSubmit={onClick}>
                            <div className="priority-selector">
                                <button className="priority-btn-option" onClick={(e) => {setPriority(e.target.value)}} value="Not set" style={{ backgroundColor:'gray'}}>Not Set</button>
                                <button className="priority-btn-option" onClick={(e) => {setPriority(e.target.value)}} value="Low" style={{ backgroundColor:'#92BFB1'}}>Low</button>
                                <button className="priority-btn-option" onClick={(e) => {setPriority(e.target.value)}} value="Medium" style={{ backgroundColor:'#F4AC45'}}>Medium</button>
                                <button className="priority-btn-option" onClick={(e) => {setPriority(e.target.value)}} value="High" style={{ backgroundColor:'#A61C3C'}}>High</button>
                            </div>
                        </form>
                    </nav>
                </button>
            </div>
            <button className="remove-btn-container">
                <div className="remove-btn" onClick={() => removeTodo(todo.id)}><FontAwesomeIcon icon={faTimes} size="xs"/></div>
            </button>
        </div>
    )
}

export default Todo
