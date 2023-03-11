import React, { useState } from "react";

const Form = ({ todoList, handleAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    if (e.key === 'Enter' ) {
      handleAddTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className="formContainer">
        <input
          onKeyDown={handleChange}
          onChange={(e) => setInputValue(e.target.value)} 
          value={inputValue} 
          type="text" 
          placeholder="Add your tasks here" 
        />
        {todoList.length !== 0 && <p>You have {todoList.length} tasks to do.</p>}
    </div>
  )
}

export default Form;