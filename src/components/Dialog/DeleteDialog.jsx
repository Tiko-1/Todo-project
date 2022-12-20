import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteDialog(props) {
	const { data, onClose, handleRemoveClick } = props;

	return (
		<Dialog
			open={true}
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">Deleting item</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{`are you sure you want to delete ${data.value}`}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				{/*  onClick={handleClose} */}
				<Button autoFocus onClick={handleRemoveClick}>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DeleteDialog;
