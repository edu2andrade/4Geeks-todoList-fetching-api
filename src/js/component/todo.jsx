import React from "react";

const Todo = ({ todo, handleRemoveTodo, handleCompleteTodo, index }) => {

  return (
    <div className="todoWrapper">
      <p style={todo.done ? {textDecoration: 'line-through'} : null}>{todo.label}</p>
      <div className="btnWrapper">
        <button className="btn removeBtn" onClick={() => handleRemoveTodo(index)}>Remove</button>
        <button className="btn removeBtn" onClick={() => handleCompleteTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

export default Todo;