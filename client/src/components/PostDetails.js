import React, { Component } from 'react';
import { fetchCommentsByPost, fetchPostById } from '../actions/index';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import CommentList from './CommentList';
import { formatDate, sortBy } from '../utils/helper';
import Title from './utils/Title';
import { BackFloatingButton } from './utils/FloatingButtons';
import PostActions from './PostActions';

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
                        <PostActions post={post}/>
                    </Card>
                )}
                {post && comments && (
                    <div>
                        <Card style={{ padding: 15, margin: 15 }}>
                            <CardHeader title={`${post.commentCount} comment(s)`} />
                            <CommentList comments={comments} />
                        </Card>
                    </div>
                )}
            </div>
        )
    }
};

const mapStateToProps = ({posts, comments, commentsOrder}) => ({
    post: posts && posts[0],
    comments: sortBy(comments && comments.slice(), commentsOrder)
});         

const mapDispatchToProps = dispatch => ({
    fetchCommentsByPost(postId){
        dispatch(fetchCommentsByPost(postId));
    },
    fetchPostById(postId){
        dispatch(fetchPostById(postId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);