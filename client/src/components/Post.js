import React from 'react';
import { Card, CardTitle, CardText, Divider } from 'material-ui';
import { Link } from 'react-router-dom';
import PostActions from './PostActions';

const Post = ({ post }) => (
  <Card style={{ padding: 5, margin: 5 }}>
    <Link
      to={`/${post.category}/${post.id}`}
      style={{ textDecoration: 'none', color: '#000000de' }}
    >
      <CardTitle
        title={post.title}
        subtitle={
          'Author: ' + post.author + ' - Comments: ' + post.commentCount
        }
      />
      <CardText> Vote Score: {post.voteScore} </CardText>
    </Link>
    <Divider />
    <PostActions post={post} />
  </Card>
);

export default Post;
