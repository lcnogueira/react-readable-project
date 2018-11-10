import React from 'react';
import List, { ListItem } from 'material-ui/List';
import Post from './Post';
import Title from './Title';
import PostOrderControl from './PostOrderControl';
import { AddPostFLoatingButton } from './FloatingButtons';

const PostList = ({ posts, title }) => (
  <div>
    <List>
      <Title title={title}>
        <PostOrderControl />
      </Title>
      {posts &&
        posts.map(post => (
          <ListItem key={post.id}>
            <Post post={post} />
          </ListItem>
        ))}
    </List>
    <AddPostFLoatingButton link={`/post/new`} />
  </div>
);

export default PostList;
