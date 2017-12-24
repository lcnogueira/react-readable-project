import React from 'react';
import { RaisedButton, Dialog, FlatButton } from 'material-ui';

export const SubmitButton = (props) => {

    const { dialogErrorOpen, dialogErrorClose, dialogSuccessOpen, dialogSuccessClose, submit, afterSuccess } = props;

    const onSuccess = () => {
        dialogSuccessClose();
        afterSuccess();
    }

    const errorActions = [
        <FlatButton
            label='Ok'
            primary
            keyboardFocused
            onClick={dialogErrorClose}
        />
    ];

    const successActions = [
        <FlatButton
            label='Ok'
            primary
            keyboardFocused
            onClick={onSuccess}
        />
    ];

    return (
        <div>
            <RaisedButton label="Submit" primary fullWidth style={{ marginBottom: 10 }} onClick={submit} />
            <Dialog
                title='Error'
                open={dialogErrorOpen}
                onRequestClose={dialogErrorClose}
                actions={errorActions}
            >
                Please fill out all the fields.
            </Dialog>
            <Dialog
                title='Succes'
                open={dialogSuccessOpen}
                onRequestClose={dialogSuccessClose}
                actions={successActions}
            >
                The new post was added!
            </Dialog>
        </div>
    )

};

export const CancelButton = (props) => {
        
    const { dialogOpen, dialogClose, buttonSubmit, yesButton } = props;

    const cancelActions = [
        <FlatButton
            label='Yes'
            primary
            keyboardFocused
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
            <RaisedButton label="Cancel" secondary fullWidth style={{ marginBottom: 10 }} onClick={buttonSubmit} />
            <Dialog
                title='Cancel'
                open={dialogOpen}
                onRequestClose={dialogClose}
                actions={cancelActions}
            >
                Are you sure you want to cancel it?
            </Dialog>
        </div>
    )
}
