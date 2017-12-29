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
import DeleteDialog from './utils/DeleteDialog';

class PostActions extends Component {

    state = {
        deleted: false,
        deleteDialogOpen: false
    };

    toggleDeleteDialog = () => {this.setState({ deleteDialogOpen: !this.state.deleteDialogOpen })};

    handleDelete = event => {
        event.preventDefault();
        this.toggleDeleteDialog();
    };

    deletePost = () => { 
        this.props.delete(this.props.post);
        this.setState({deleted:true});
    };

    handlePostVote = (post, option) => { this.props.vote(post.id, option) };

    render() {
        const { deleted } = this.state;
        const { post } = this.props;

        if(deleted)
            return <Redirect to={'/'} />;

        return (
            <div>
                <CardActions>
                    <IconButton tooltip='Edit' containerElement={<Link to={`/post/edit/${post.id}`} />}> <Edit /> </IconButton>
                    <IconButton tooltip='Delete' onClick={(event) => this.handleDelete(event)}> <Delete /> </IconButton>
                    <IconButton tooltip='Vote Up' onClick={() => this.handlePostVote(post, VOTE_UP) }> <ActionThumbUp /> </IconButton>
                    <IconButton tooltip='Vote Down' onClick={() => this.handlePostVote(post, VOTE_DOWN) }> <ActionThumbDown /> </IconButton>
                </CardActions>
                <DeleteDialog
                    dialogOpen={this.state.deleteDialogOpen}
                    dialogClose={this.toggleDeleteDialog}
                    yesButton={this.deletePost}
                />
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
