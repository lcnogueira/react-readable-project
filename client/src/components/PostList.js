import React from 'react';
import Post from './Post';
import List, { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const PostList = (props) => {

    const { posts, subheader } = props;
    
    return (
        <List>
            <Subheader style={{textAlign: 'center', fontSize: '2em'}}>{subheader}</Subheader>
            {posts && posts.length > 0 && posts.map( (post) => (
                <ListItem key={post.id}>
                    <Post post={post}/>
                </ListItem>
            ))}
        </List>            
    );
};

export default PostList;
