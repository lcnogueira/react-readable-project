import React, { Component } from 'react';
import { formatDate } from '../utils/helper';
import { connect } from 'react-redux';
import { fetchCommentsByPost } from '../actions/index';
import CommentList from './CommentList';

class Post extends Component {

    constructor(){
        super();
        this.state = {
            showComments: false
        }
    };

    fetchComments = () => {
        const { post } = this.props;
        this.props.fetchCommentsByPost(post.id);
        this.setState({showComments: !this.state.showComments});
    };

    render() {
        const { post, comments } = this.props;

        return (
            <ol style={{listStyle: 'none'}}>
                <li>{post.title}</li>
                <li>Date: {formatDate(post.timestamp) + ' - Author: ' + post.author + ' - Comments: ' + post.commentCount}</li>
                <li>Vote score: {post.voteScore} </li>
                <li style={{display: 'block-inline'}}>
                    <button onClick={this.fetchComments}>Comments</button>
                    <button>Deletar</button>
                </li>
                {this.state.showComments && comments && <CommentList comments={comments} postId={post.id}/>}
            </ol>
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