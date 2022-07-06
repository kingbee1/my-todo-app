import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, changer}) => {
  return (
    <div className='list-container'>
        <div className="div todos">
            {changer.map(todoo =>{
                return (
                    <Todo todos={todos} setTodos={setTodos} todoo={todoo} text={todoo.text} id={todoo.id} />
                )
            })}
        </div>
    </div>
  )
}

export default TodoList
