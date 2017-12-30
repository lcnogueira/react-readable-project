import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { VOTE_UP, VOTE_DOWN } from '../utils/voteTypes';
import { formatDate, sortBy } from '../utils/helper';
import { voteComment } from '../actions';
import { connect } from 'react-redux';

class Comment extends Component {

    handleCommentVote = (post, option) => { this.props.vote(post.id, option) };

    render(){
        const { comment } = this.props;

        return (
            <Card style={{padding: 5, margin: 5}}>
                <CardTitle
                    subtitle={'Sent: ' + formatDate(comment.timestamp) + ' - Author: ' + comment.author}
                />
                <CardText style={{fontSize: '1.2em'}}>
                    {comment.body}
                </CardText>
                <CardText>
                    Vote Score: {comment.voteScore}
                </CardText>
                <CardActions>
                    <IconButton tooltip='Edit'> <Edit /> </IconButton>
                    <IconButton tooltip='Delete'> <Delete /> </IconButton>
                    <IconButton tooltip='Vote Up' onClick={() => this.handleCommentVote(comment, VOTE_UP)}> <ActionThumbUp /> </IconButton>
                    <IconButton tooltip='Vote Down' onClick={() => this.handleCommentVote(comment, VOTE_DOWN)}> <ActionThumbDown /> </IconButton>
                </CardActions>
            </Card>
        );
    };
};

const mapStateToProps = ({comments, commentsOrder}) => ({
    comments: sortBy(comments && comments.slice(), commentsOrder)
});

const mapDispatchToProps = dispatch => ({
    vote(comment, option) { dispatch(voteComment(comment, option)); },
});

export default connect(mapStateToProps,mapDispatchToProps)(Comment);