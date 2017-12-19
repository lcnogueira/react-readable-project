import React from 'react';
import { List } from 'semantic-ui-react';

const CommentList = (props) => {

    const { comments, postId } = props;
    return (
        <List.Item>
            <List size="tiny" verticalAlign="middle">
                {comments && comments.filter((comment) => comment.parentId === postId).map((comment) => (
                    <List.Item key={comment.id}>
                        {comment.body}
                    </List.Item>
                ))}
            </List>
        </List.Item>
    );
};

export default CommentList;

