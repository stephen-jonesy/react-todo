import React, { useState } from 'react';

const Header = ({addTodo}) => {
    const [text, setText] = useState('')
    const [priority, setPriority] = useState('Not set')

    const onClick = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add text')
            return
        }
        addTodo({text, priority})
        setText("")
        setPriority("Not set")

    }

    return (
        <div className="app-header">
            <div className="header-container">
                <a className="header-title" href="index.html"><h1>React Todos</h1></a>
                <form onSubmit={onClick}>
                    <input className="add-todo-text" type="text" value={text} placeholder="Add todo"  onChange={(e) => {setText(e.target.value)}}/>
                    <select type="submit" className="header-priority-selector" value={priority} onChange={(e) => {setPriority(e.target.value)}}>
                        <option value="Not set">Select Priority</option>
                        <option value="Not set">Not Set</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input className="form-submit-btn" type="submit" value="+" />
                </form>
            </div>
        </div>

    )
}

export default Header
