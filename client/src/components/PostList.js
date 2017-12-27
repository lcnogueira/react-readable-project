import React from 'react';
import Post from './Post';
import List, { ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import Title from './utils/Title';
import PostOrderControl from './PostOrderControl';

const floatButtonStyle = {
    position: 'fixed',
    right: 25,
    bottom: 25,
};

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
            <FloatingActionButton style={floatButtonStyle} containerElement={<Link to={`/post/new`} />}>
                <ContentAdd />
            </FloatingActionButton>         
        </div>
        
    );
};

export default PostList;
