import React, { Component } from 'react';
import { formatDate } from '../utils/helper';
import { List, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCommentsByPost } from '../actions/index';

class Post extends Component {

    fetchComments = () => {
        const { post } = this.props;
        this.props.fetchCommentsByPost(post.id);
    }

    render() {
        const { post, comments } = this.props;

        return (
            <List size='large'>
                <List.Item icon='talk' content={post.title} />
                <List.Item
                    icon='info circle'
                    content={formatDate(post.timestamp) + ' - Author: ' + post.author + ' - Comments: ' + post.commentCount}
                />
                <List.Item>
                    <Icon link name='thumbs up' />
                    {post.voteScore}
                    <Icon link name='thumbs down' />
                </List.Item>
                <List.Item>
                    <Icon link name='comments' onClick={this.fetchComments} />
                    <Icon link name='edit' />
                    <Icon link name='trash' />
                </List.Item>
            </List>
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