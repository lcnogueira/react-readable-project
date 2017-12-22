import React from 'react';
import List, { ListItem } from 'material-ui/List';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { formatDate } from '../utils/helper';
import { IconButton } from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import SocialMood from 'material-ui/svg-icons/social/mood';
import SocialMoodBad from 'material-ui/svg-icons/social/mood-bad';

const CommentList = (props) => {

    const {comments} = props;

    return (
        <List>
            {comments && comments.length > 0 && comments.map( comment => (
                <div key={comment.id}>
                    <ListItem>
                        <Card style={{padding: 5, margin: 5}}>
                            <CardTitle
                                title={comment.body}
                                subtitle={'Sent: ' + formatDate(comment.timestamp) + ' - Author: ' + comment.author}
                            />
                            <CardText>
                                Vote Score: {comment.voteScore}
                            </CardText>
                            <CardActions>
                                <IconButton tooltip='Edit'> <Edit /> </IconButton>
                                <IconButton tooltip='Delete'> <Delete /> </IconButton>
                                <IconButton tooltip='Vote Up'> <SocialMood /> </IconButton>
                                <IconButton tooltip='Vote Down'> <SocialMoodBad /> </IconButton>
                            </CardActions>
                        </Card>
                    </ListItem>
                </div>
            ))}
        </List>
    );
};

export default CommentList;

