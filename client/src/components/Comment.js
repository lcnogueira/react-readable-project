import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { VOTE_UP, VOTE_DOWN } from '../utils/voteTypes';
import { formatDate } from '../utils/helper';
import { voteComment, deleteComment, fetchPostById, updateComment } from '../actions';
import DeleteDialog from './DeleteDialog';
import CommentFormModal from './CommentFormModal';

class Comment extends Component {

    state = {
        deleteDialogOpen: false,
        commentModalOpen: false,
    };

    toggleCommentModal = () => { this.setState({ commentModalOpen: !this.state.commentModalOpen }) };

    toggleDeleteDialog = () => { this.setState({ deleteDialogOpen: !this.state.deleteDialogOpen }) };

    handleDelete = event => {
        event.preventDefault();
        this.toggleDeleteDialog();
    };

    deleteComment = () => {
        this.props.delete(this.props.comment);
        this.props.fetchPostById(this.props.comment.parentId);
    };

    handleCommentVote = (comment, option) => { this.props.vote(comment.id, option) };

    render() {
        const { comment } = this.props;

        return (
            <div>
                <Card style={{ padding: 5, margin: 5 }}>
                    <CardTitle
                        subtitle={'Sent: ' + formatDate(comment.timestamp) + ' - Author: ' + comment.author}
                    />
                    <CardText style={{ fontSize: '1.2em' }}>
                        {comment.body}
                    </CardText>
                    <CardText>
                        Vote Score: {comment.voteScore}
                    </CardText>
                    <CardActions>
                        <IconButton tooltip='Edit' onClick={this.toggleCommentModal}> <Edit /> </IconButton>
                        <IconButton tooltip='Delete' onClick={(event) => this.handleDelete(event)}> <Delete /> </IconButton>
                        <IconButton tooltip='Vote Up' onClick={() => this.handleCommentVote(comment, VOTE_UP)}> <ActionThumbUp /> </IconButton>
                        <IconButton tooltip='Vote Down' onClick={() => this.handleCommentVote(comment, VOTE_DOWN)}> <ActionThumbDown /> </IconButton>
                    </CardActions>
                </Card>
                <DeleteDialog
                    dialogOpen={this.state.deleteDialogOpen}
                    dialogClose={this.toggleDeleteDialog}
                    yesButton={this.deleteComment}
                />
                {this.state.commentModalOpen && (
                    <CommentFormModal
                        dialogOpen={this.state.commentModalOpen}
                        dialogClose={this.toggleCommentModal}
                        comment={comment}
                        operation={this.props.update}
                    />
                )}
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    vote(comment, option) { dispatch(voteComment(comment, option)); },
    delete(comment) { dispatch(deleteComment(comment)); },
    fetchPostById(postId) { dispatch(fetchPostById(postId)); },
    update(comment) { dispatch(updateComment(comment)); },
});

export default connect(null, mapDispatchToProps)(Comment);