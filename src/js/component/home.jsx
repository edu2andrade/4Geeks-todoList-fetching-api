import React, { useState, useEffect } from "react";

import Input from "./input.jsx";
import Todo from "./todo.jsx";

import { getTodoList } from "../services/index.js";
import { putRequest } from "../services/index.js";

const Home = () => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect( async () => {

		setIsLoading(true);
		const data = await getTodoList();
		setTodoList(data);
		setIsLoading(false);

	}, []);

	const handleAddTodo = async (inputValue) => {
    if (inputValue === '' ) {
			return alert('Write something');
		};
			
		const newTodoList = [...todoList, {label: inputValue, done: false}];

		setIsLoading(true);
		await putRequest(newTodoList);
		setIsLoading(false);

		const data = await getTodoList();
		setTodoList(data);
  }

	const handleRemoveTodo = async (index) => {
		const newTodoList = [...todoList]
		newTodoList.splice(index, 1)

		setIsLoading(true);
		await putRequest(newTodoList);
		setIsLoading(false);

		const data = await getTodoList();
		setTodoList(data);
	}

	const handleCompleteTodo = async (index) => {
		const newTodoList = todoList.map((todo, mapIndex) => {
      if(index === mapIndex) {
        return {
          ...todo,
          done: !todo.done,
        };
      };
      return todo;
    });

		setIsLoading(true);
		await putRequest(newTodoList);
		setIsLoading(false);

		const data = await getTodoList();
		setTodoList(data);
	}

	return (
		<div className="mainContainer">
			<div className="appContainer">
				<h1>todos</h1>
				<Input todoList={todoList} handleAddTodo={handleAddTodo} />
				{
					isLoading
					? <div>is Loading...</div>
					: <div className="todosContainer">
					{todoList.map((todo, index) => {
						return (
							<Todo 
								key={index} 
								todo={todo}
								index={index}
								handleRemoveTodo={handleRemoveTodo}
								handleCompleteTodo={handleCompleteTodo}
							/>
						)
					})}
				</div> 
				}
				<div className="completedContainer">
					{todoList.map((todo, index) => (
						todo.done === true && <p key={index}> {todo.label} is completed</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
