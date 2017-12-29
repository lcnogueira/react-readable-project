import React from 'react';
import List, { ListItem } from 'material-ui/List';
import Comment from './Comment';

const CommentList = ({ comments }) => (
    <List>
        {comments && comments.length > 0 && comments.map(comment => (
            <div key={comment.id}>
                <ListItem>
                    <Comment comment={comment} />
                </ListItem>
            </div>
        ))}
    </List>
);

export default CommentList;

