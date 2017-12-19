import React from 'react';
import { List, Container } from 'semantic-ui-react';
import Post from './Post';

const PostList = (props) => {

    const { posts } = props;
    return (
        <Container>
            <List size="huge" verticalAlign="middle">
                {posts && posts.map((post) => (
                    <List.Item key={post.id} >
                        <Post post={post}/>
                    </List.Item>
                ))}
            </List>
        </Container>
    );
};

export default PostList;
