import React, { Component } from 'react';
import { CardActions, IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import { Link } from 'react-router-dom';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import { VOTE_UP, VOTE_DOWN } from '../utils/voteTypes';
import { votePost } from '../actions';
import { connect } from 'react-redux';
import { sortBy } from '../utils/helper';

class PostActions extends Component{

    handlePostVote = (post, option) => {this.props.vote(post.id, option)};

    render(){

        const { post } = this.props;

        return (
            <CardActions>
                <IconButton tooltip='Edit' containerElement={<Link to={`/post/edit/${post.id}`} />}> <Edit /> </IconButton>
                <IconButton tooltip='Delete'> <Delete /> </IconButton>
                <IconButton tooltip='Vote Up' onClick={() => {this.handlePostVote(post, VOTE_UP)}}> <ActionThumbUp /> </IconButton>
                <IconButton tooltip='Vote Down' onClick={() => {this.handlePostVote(post, VOTE_DOWN)}}> <ActionThumbDown /> </IconButton>
            </CardActions>
        );
    };
}

const mapStateToProps = ({ posts, postsOrder }) => ({ posts: sortBy(posts && posts.slice(), postsOrder) });

function mapDispatchToProps(dispatch) {
    return {
        vote: (post, option) => dispatch(votePost(post, option))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostActions);
