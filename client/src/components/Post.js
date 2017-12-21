import React, { Component } from 'react';
import { formatDate } from '../utils/helper';
import { connect } from 'react-redux';
import { fetchCommentsByPost } from '../actions/index';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import SocialMood from 'material-ui/svg-icons/social/mood';
import SocialMoodBad from 'material-ui/svg-icons/social/mood-bad';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import CommentList from './CommentList';


class Post extends Component {

    constructor(){
        super();
        this.state = {
            showComments: false
        }
    }

    fetchComments = () => {
        const { post } = this.props;
        this.setState({showComments: !this.state.showComments});
        this.props.fetchCommentsByPost(post.id);

    };

    render() {
        const { post, comments } = this.props;

        return (
            <Card>
                <CardTitle 
                    title={post.title} 
                    subtitle={'Date: ' + formatDate(post.timestamp) + ' - Author: ' + post.author + ' - Comments: ' + post.commentCount} 
                />
                <CardText>
                    Vote Score: {post.voteScore}
                </CardText>
                <CardActions>
                    <IconButton tooltip='Edit'>
                        <Edit />
                    </IconButton>
                    <IconButton tooltip='Delete'>
                        <Delete />
                    </IconButton>
                    <IconButton tooltip='Vote Up'>
                        <SocialMood />
                    </IconButton>
                    <IconButton tooltip='Vote Down'>
                        <SocialMoodBad />
                    </IconButton>
                    <IconButton tooltip='Comments' onClick={this.fetchComments}>
                        <CommunicationComment />
                    </IconButton>
                </CardActions>
                <CardText>
                    {this.state.showComments && comments && <CommentList comments={comments} postId={post.id}/>}
                </CardText>

            </Card>
        );
    }

}

function mapStateToProps(state) {
    const { comments } = state;

    return {
        comments: comments.allComments,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCommentsByPost: (postId) => dispatch(fetchCommentsByPost(postId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);