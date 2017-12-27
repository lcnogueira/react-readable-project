import React from 'react';
import Post from './Post';
import List, { ListItem } from 'material-ui/List';
import Title from './utils/Title';
import PostOrderControl from './PostOrderControl';
import { AddPostFLoatingButton } from './utils/FloatingButtons';

const PostList = (props) => {

    const { posts, title } = props;
    
    return (
        <div>
            <List>
                <Title title={title}>
                    <PostOrderControl />
                </Title>
                {posts && posts.length > 0 && posts.map( (post) => (
                    <ListItem key={post.id}>
                        <Post post={post}/>
                    </ListItem>
                ))}
            </List>
            <AddPostFLoatingButton link={`/post/new`}/>
        </div>
        
    );
};

export default PostList;
