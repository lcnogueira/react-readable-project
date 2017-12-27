import React from 'react';
import { Card, CardActions, CardTitle, CardText, IconButton, Divider } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import AvLibraryBooks from 'material-ui/svg-icons/av/library-books';
import { Link } from 'react-router-dom';

const Post = (props) => {

    const { post } = props;

    return (
        <Card style={{ padding: 5, margin: 5 }} >
            <Link to={`/${post.category}/${post.id}`} style={{textDecoration: 'none', color: '#000000de'}}>
                <CardTitle
                    title={post.title}
                    subtitle={'Author: ' + post.author + ' - Comments: ' + post.commentCount} 
                />
                <CardText> Vote Score: {post.voteScore} </CardText>
            </Link>
            <Divider/>
            <CardActions>
                <IconButton tooltip='Edit' containerElement={<Link to={`/post/edit/${post.id}`} />}> <Edit /> </IconButton>
                <IconButton tooltip='Delete'> <Delete /> </IconButton>
                <IconButton tooltip='Vote Up'> <ActionThumbUp /> </IconButton>
                <IconButton tooltip='Vote Down'> <ActionThumbDown /> </IconButton>
                <IconButton tooltip='Post Details' containerElement={<Link to={`/${post.category}/${post.id}`} />}>
                    <AvLibraryBooks />
                </IconButton>
            </CardActions>
        </Card>
    );

}

export default Post;