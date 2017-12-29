import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { formatDate } from '../utils/helper';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

class Comment extends Component {

    render(){
        const { comment } = this.props;

        return (
            <Card style={{padding: 5, margin: 5}}>
                <CardTitle
                    subtitle={'Sent: ' + formatDate(comment.timestamp) + ' - Author: ' + comment.author}
                />
                <CardText>
                    {comment.body}
                </CardText>
                <CardText>
                    Vote Score: {comment.voteScore}
                </CardText>
                <CardActions>
                    <IconButton tooltip='Edit'> <Edit /> </IconButton>
                    <IconButton tooltip='Delete'> <Delete /> </IconButton>
                    <IconButton tooltip='Vote Up'> <ActionThumbUp /> </IconButton>
                    <IconButton tooltip='Vote Down'> <ActionThumbDown /> </IconButton>
                </CardActions>
            </Card>
        );
    };
};

export default Comment;