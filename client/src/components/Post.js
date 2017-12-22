import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import SocialMood from 'material-ui/svg-icons/social/mood';
import SocialMoodBad from 'material-ui/svg-icons/social/mood-bad';
import AvLibraryBooks from 'material-ui/svg-icons/av/library-books';
import { Link } from 'react-router-dom';

const Post = (props) => {

        const { post } = props;

        return (
            <Card style={{ padding: 5, margin: 5}}>
                <CardTitle 
                    title={<Link to={`/${post.category}/${post.id}`}>{post.title}</Link>} 
                    subtitle={'Author: ' + post.author + ' - Comments: ' + post.commentCount} 
                />
                <CardText> Vote Score: {post.voteScore} </CardText>
                <CardActions>
                    <IconButton tooltip='Edit'> <Edit /> </IconButton>
                    <IconButton tooltip='Delete'> <Delete /> </IconButton>
                    <IconButton tooltip='Vote Up'> <SocialMood /> </IconButton>
                    <IconButton tooltip='Vote Down'> <SocialMoodBad /> </IconButton>
                    <IconButton tooltip='Post Details' containerElement={<Link to={`/${post.category}/${post.id}`}/>}>
                        <AvLibraryBooks />
                    </IconButton>
                </CardActions>

            </Card>
        );

}

export default Post;