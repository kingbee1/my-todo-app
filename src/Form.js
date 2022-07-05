import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos}) => {

    const inputChange = e => {
        setInputText(e.target.value)
        
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
            <button onClick={inputSubmit}>Add</button>
        </div>
      
    </div>
  )
}

export default Form
