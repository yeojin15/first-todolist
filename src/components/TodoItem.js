import React from 'react'

const TodoItem = ({todoItem}) => {
    return (
        <div className='todo-item'>
            <p>{todoItem}</p>
        </div>
    )
}

export default TodoItem