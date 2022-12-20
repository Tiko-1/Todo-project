import React from 'react';
import './TodoItem.css';
import { useState } from 'react';
import EditDialog from '../Dialog/EditDialog';
import DeleteDialog from '../Dialog/DeleteDialog';

function TodoItem(props) {
	const [showEditDialog, setShowEditDialog] = useState(false);
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);

	const { value, onDelete, item, handleSaveClick, onClick, completed } = props;

	const handleEditBtnClick = (ev) => {
		ev.stopPropagation();
		setShowEditDialog(true);
	};

	const handleEditDialogClose = () => {
		setShowEditDialog(false);
	};

	//Handling Delete Dialog
	const handleDeleteDialogClose = (ev) => {
		setShowDeleteDialog(false);
	};
	const handleDeleteBtnClick = (ev) => {
		ev.stopPropagation();
		setShowDeleteDialog(true);
	};

	const handleRemoveClick = (ev) => {
		onDelete(ev, item.id);
	};
	//The End of Handling Delete Dialog

	return (
		<>
			<li
				onClick={(ev) => {
					onClick(ev, item);
				}}
				key={item.id}
				className="list_item"
			>
				<span>{value}</span>
				<div>
					<button onClick={handleDeleteBtnClick}>Delete</button>
					<button onClick={handleEditBtnClick}>Edit</button>
				</div>
			</li>
			{!!showEditDialog && (
				<EditDialog
					onClose={handleEditDialogClose}
					data={item}
					handleSaveClick={handleSaveClick}
				/>
			)}
			{!!showDeleteDialog && (
				<DeleteDialog
					onClose={handleDeleteDialogClose}
					data={item}
					handleRemoveClick={handleRemoveClick}
				/>
			)}
		</>
	);
}

export default TodoItem;
