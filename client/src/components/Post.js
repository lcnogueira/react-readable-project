import React, { Component } from 'react';
import { formatDate } from '../utils/helper';
import { List, Icon } from 'semantic-ui-react';

class Post extends Component {

    render(){
        const { post } = this.props;

        return (
            <List size='large'>
                <List.Item icon='talk' content={post.title}/>
                <List.Item 
                    icon='info circle' 
                    content={formatDate(post.timestamp) + ' - Author: ' + post.author + ' - Comments: ' + post.commentCount}
                />
                <List.Item>
                    <Icon link name='thumbs up'/>
                    {post.voteScore}
                    <Icon link name='thumbs down'/>
                </List.Item>
                <List.Item >
                    <Icon link name='edit' />
                    <Icon link name='trash'/>
                </List.Item>
            </List>
        );
    }

}

export default Post;