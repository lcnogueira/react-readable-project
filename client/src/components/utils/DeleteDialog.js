import React from 'react';
import { Dialog, FlatButton } from 'material-ui';

const DeleteDialog = (props) => {

    const { yesButton, dialogOpen, dialogClose } = props;

    const deleteActions = [
        <FlatButton
            label='Yes'
            primary
            onClick={yesButton}
        />,
        <FlatButton
            label='No'
            primary
            keyboardFocused
            onClick={dialogClose}
        />
    ];

    return (
        <div>
            <Dialog
                title='Delete'
                open={dialogOpen}
                onRequestClose={dialogClose}
                actions={deleteActions}
            >
                Are you sure you want to delete this post?
            </Dialog>
        </div>
    )
};

export default DeleteDialog;