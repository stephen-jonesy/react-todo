import React from 'react'
import Todo from './Todo'

const Todos = ({todoArray, toggleComplete, togglePriority, removeTodo}) => {
    console.log(todoArray)
    return (
        <div className='todos-list'>
            {todoArray.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} togglePriority={togglePriority} removeTodo={removeTodo} />
            ))}

        </div>
    )
}

export default Todos
