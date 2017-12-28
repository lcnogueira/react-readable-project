import React, { Component } from 'react';
import { CardActions, IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import { Link, Redirect } from 'react-router-dom';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { VOTE_UP, VOTE_DOWN } from '../utils/voteTypes';
import { votePost, deletePost } from '../actions';
import { connect } from 'react-redux';
import { sortBy } from '../utils/helper';

class PostActions extends Component {

    state = {
        deleted: false
    };

    handlePostVote = (post, option) => { this.props.vote(post.id, option) };

    handleDelete = post => { 
        this.props.delete(post);
        this.setState({deleted:true});
    };

    render() {
        const { deleted } = this.state;
        const { post } = this.props;

        if(deleted)
            return <Redirect to={'/'} />;

        return (
            <div>
                <CardActions>
                    <IconButton tooltip='Edit' containerElement={<Link to={`/post/edit/${post.id}`} />}> <Edit /> </IconButton>
                    <IconButton tooltip='Delete' onClick={() => { this.handleDelete(post) }}> <Delete /> </IconButton>
                    <IconButton tooltip='Vote Up' onClick={() => { this.handlePostVote(post, VOTE_UP) }}> <ActionThumbUp /> </IconButton>
                    <IconButton tooltip='Vote Down' onClick={() => { this.handlePostVote(post, VOTE_DOWN) }}> <ActionThumbDown /> </IconButton>
                </CardActions>
            </div>
        );
    };
}

const mapStateToProps = ({ posts, postsOrder }) => ({ posts: sortBy(posts && posts.slice(), postsOrder) });

const mapDispatchToProps = dispatch => ({
    vote(post, option) { dispatch(votePost(post, option)); },
    delete(post) { dispatch(deletePost(post)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostActions);
