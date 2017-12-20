import React from 'react';

const CommentList = (props) => {

    const { comments, postId } = props;
    return (
        <div>
            <ol>
                {comments && comments.filter((comment) => comment.parentId === postId).map((comment) => (
                    <li key={comment.id}>
                        {comment.body}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default CommentList;

