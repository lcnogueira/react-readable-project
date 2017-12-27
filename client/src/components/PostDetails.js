import React, { Component } from 'react';
import { fetchCommentsByPost, fetchPostById } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import SocialMood from 'material-ui/svg-icons/social/mood';
import SocialMoodBad from 'material-ui/svg-icons/social/mood-bad';
import CommentList from './CommentList';
import { formatDate, sortBy } from '../utils/helper';
import Title from './utils/Title';
import { BackFloatingButton } from './utils/FloatingButtons';

class PostDetails extends Component {

    componentDidMount() {
        const { postId } = this.props.match.params;
        this.props.fetchCommentsByPost(postId);
        this.props.fetchPostById(postId);
    }

    render() {

        const { post, comments } = this.props;
        const { category } = this.props.match.params;

        return (
            <div>
                <BackFloatingButton link={`/${category}`}/>
                <Title title='Post Details' />
                {post && (
                    <Card style={{ padding: 10, margin: 10 }}>
                        <CardTitle
                            title={post.title}
                            subtitle={'Sent: ' + formatDate(post.timestamp) + ' - Author: ' + post.author + ' - Comments: ' + post.commentCount}
                        />
                        <CardText> {post.body} </CardText>
                        <CardText> Vote Score: {post.voteScore} </CardText>
                        <CardActions>
                            <IconButton tooltip='Edit' containerElement={<Link to={`/post/edit/${post.id}`} />}> <Edit /> </IconButton>
                            <IconButton tooltip='Delete'> <Delete /> </IconButton>
                            <IconButton tooltip='Vote Up'> <SocialMood /> </IconButton>
                            <IconButton tooltip='Vote Down'> <SocialMoodBad /> </IconButton>
                        </CardActions>
                    </Card>
                )}
                {post && comments && (
                    <div>
                        {/* <Card style={{ padding: 5, margin: 5 }}>
                            comment form here...
                        </Card> */}
                        <Card style={{ padding: 15, margin: 15 }}>
                            <CardHeader title={`${post.commentCount} comments`} />
                            <CommentList comments={comments} />
                        </Card>
                    </div>
                )}
            </div>
        )
    }
};

function mapStateToProps(state) {
    const { comments, posts, commentsOrder } = state;

    return {
        post: posts.current,
        comments: sortBy(comments.allComments && comments.allComments, commentsOrder)
    }
};


function mapDispatchToProps(dispatch) {
    return {
        fetchCommentsByPost: (postId) => dispatch(fetchCommentsByPost(postId)),
        fetchPostById: (postId) => dispatch(fetchPostById(postId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);