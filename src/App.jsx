import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './components/todo/TodoItem.jsx';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState([]);

	// An Example of Item
	//{value:'TodoItem1',id:777,completed:false}

	const onItemClick = (ev, item) => {
		if (!item.completed) {
			ev.target.style.textDecoration = 'line-through';
		} else {
			ev.target.style.textDecoration = 'none';
		}
		setItems(
			items.map((stateItem) => {
				if (stateItem.id !== item.id) {
					return stateItem;
				}
				return {
					...item,
					completed: !item.completed,
				};
			})
		);
	};

	const handleAddBtn = (ev) => {
		const newItem = { value: inputValue, id: uuidv4(), completed: false };
		setItems([...items, newItem]);
		setInputValue('');
	};

	const handleDeleteBtn = (ev, id) => {
		ev.stopPropagation();
		setItems(
			items.filter((item) => {
				return item.id !== id;
			})
		);
	};

	const handleSaveClick = (item, newValue) => {
		setItems(
			items.map((stateItem) => {
				if (stateItem.id !== item.id) {
					return stateItem;
				}
				return {
					...item,
					value: newValue,
				};
			})
		);
	};
	return (
		<div className="App">
			<div className="todoForm">
				<TextField
					label="Todo"
					value={inputValue}
					variant="outlined"
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
				<Button variant="contained" onClick={handleAddBtn}>
					Add
				</Button>
			</div>
			<div className="listItems">
				<ul>
					{items.map((item) => {
						return (
							<TodoItem
								value={item.value}
								item={item}
								key={item.id}
								completed={item.completed}
								onDelete={handleDeleteBtn}
								handleSaveClick={handleSaveClick}
								onClick={onItemClick}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
