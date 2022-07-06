import { Add, AddBox } from '@material-ui/icons'
import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, option, setOption}) => {

    const inputChange = e => {
        setInputText(e.target.value) 
    }

    const selectChange = e => {
        setOption(e.target.value)
    }

    const inputSubmit = () => {

        if (inputText === '') {
            return
        } else {
            setTodos([...todos, {text:inputText, completed:false, id:Math.random() * 1000}])
            setInputText('')
        }
       
    }

  return (
    <div className='form-container'>

        <div className="input-button">
            <input type='text' value={inputText} onChange={inputChange} />
            {/* <button onClick={inputSubmit}>ADD</button> */}
            {/* <Add onClick={inputSubmit} className='add' /> */}
            <AddBox onClick={inputSubmit} className='add' />
        </div>
        

        <div className="select">
            <select name="todos" className='change' onChange={selectChange} >
            <option value="all">All</option>
            <option value="finished">Finished</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
      
    </div>
  )
}

export default Form
