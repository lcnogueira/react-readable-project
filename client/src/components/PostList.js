import React from 'react';
import Post from './Post';

const PostList = (props) => {

    const { posts } = props;
    return (
        <div>
            <ol style={{listStyle: 'none'}}>
                {posts && posts.map((post) => (
                    <li key={post.id} >
                        <Post post={post}/>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default PostList;
