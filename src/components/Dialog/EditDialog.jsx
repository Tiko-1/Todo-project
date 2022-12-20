import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';

function EditDialog(props) {
	const { onClose, data, handleSaveClick } = props;
	const [editValue, setEditValue] = useState(data.value);
	const onSave = (ev) => {
		handleSaveClick(ev, data, editValue);
		onClose();
	};
	const onChange = (ev) => {
		setEditValue(ev.target.value);
	};
	return (
		<Dialog
			open={true}
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">Edit</DialogTitle>
			<DialogContent>
				<TextField
					variant="outlined"
					value={editValue}
					onChange={(ev) => {
						onChange(ev);
					}}
				></TextField>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				{/*  onClick={handleClose} */}
				<Button autoFocus onClick={onSave}>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
export default EditDialog;
