import React from 'react';

const PostList = (props) => {

    const { posts } = props;
    return (
        <div id="postlist">
            <h2>Posts</h2>
            <ol>
                {posts && posts.map((post) => (
                    <li key={post.id}>
                        <div id="post">
                            <div id="post-title">{post.title}</div>
                            <div id="post-date">Date: {post.timestamp}</div>
                            <div id="post-author">Author: {post.author}</div>
                            <div id="post-votescore">Vote score: {post.voteScore}</div>
                            <div id="post-comments">Comments: {post.commentCount}</div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default PostList;
