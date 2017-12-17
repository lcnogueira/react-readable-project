import React from 'react';
import { List, Container } from 'semantic-ui-react';
import { formatDate } from '../utils/helper';

const PostList = (props) => {

    const { posts } = props;
    return (
        <Container>
            <List size="huge" verticalAlign="middle" inverted={true}>
                {posts && posts.map((post) => (
                    <List.Item key={post.id} >
                        <List>
                            <List.Item icon='talk' content={post.title} />
                            <List.Item icon='checked calendar' content={formatDate(post.timestamp)} />
                            <List.Item icon='user outline' content={post.author} />
                            <List.Item icon= {post.voteScore>=0?'thumbs up':'thumbs down'} content={post.voteScore} />
                            <List.Item icon='commenting outline' content={post.commentCount>0 ? post.commentCount : '0'} />
                        </List>
                    </List.Item>
                ))}
            </List>
        </Container>
    );
};

export default PostList;
