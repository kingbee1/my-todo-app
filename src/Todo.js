import React from 'react'
import { Delete, Done } from '@material-ui/icons'



const Todo = ({text, todoo, todos, setTodos}) => {

    const deleteItem = () => {
        setTodos(todos.filter(element => element.id !== todoo.id))
    }

    const completeItem = () => {
        setTodos(todos.map(item => {
            if(item.id === todoo.id) {
                return {
                    ...item,
                    completed:!item.completed
                }
            }
            return item
        }))
    }
  
  
    return (
    <div className='todo-container'>
        <div className={todoo.completed ? 'completed' : 'not-yet'}> {text}</div>
            <Done onClick={completeItem} className='icon' />
            <Delete onClick={deleteItem} className='icon' />
        
    </div>
  )
}

export default Todo
