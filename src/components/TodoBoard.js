import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({todoList}) => {

    return (
        <div>
            <h1>To do List</h1>
            {todoList.map((todoItem, index)=> <TodoItem todoItem={todoItem} key={index} />)}
        </div>
    )
}

export default TodoBoard