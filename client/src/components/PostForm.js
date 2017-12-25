import React, { Component } from 'react';
import { Card, TextField, SelectField, MenuItem } from 'material-ui';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helper';
import { SubmitButton, CancelButton } from './utils/PostButtons';
import { Redirect } from 'react-router-dom';
import { addPost, updatePost } from '../actions';
import uuid from 'uuid';
import Title from './utils/Title';

class PostForm extends Component{

    state = {
        author: this.props.post ? this.props.post.author : '',
        title: this.props.post ? this.props.post.title : '',
        body: this.props.post ? this.props.post.body : '',
        category: this.props.post ? this.props.post.category : '',
        dialogErrorOpen: false,
        dialogSuccessOpen: false,
        dialogCancelOpen: false,
        finished: false,
    }

    finished = () => {this.setState({finished: true})};

    toggleCancelDialog = () => {this.setState({dialogCancelOpen: !this.state.dialogCancelOpen})};

    toggleSuccessDialog = () => {this.setState({dialogSuccessOpen: !this.state.dialogSuccessOpen})};

    toggleErrorDialog = () => {this.setState({dialogErrorOpen: !this.state.dialogErrorOpen})};

    handleChange = (event,value) => { this.setState({[event.target.id]: value});};

    selectCategory = (event,index,value) => { this.setState({category:value}); };

    postSubmit = (event) => {
        event.preventDefault();
        const { add, post, update } = this.props;
        let newPost = {};

        if(this.hasErrors()){
            this.toggleErrorDialog();
        }else{
            if(post){
                newPost = {
                    ...post,
                    timestamp: Date.now(),
                    author: this.state.author,
                    body: this.state.body,
                    title: this.state.title,
                    category: this.state.category,
                };
                update(newPost);
            }else{
                newPost = {
                    id: uuid().split('-').join(''),
                    timestamp: Date.now(),
                    title: this.state.title,
                    body: this.state.body,
                    author: this.state.author,
                    category: this.state.category
                }
                add(newPost);
            };
            this.toggleSuccessDialog();
        };

        
    };

    hasErrors = () => {
        const {title, body, author, category } = this.state;
        return (title.length===0 || body.length===0 || author.length===0 || category.length===0) ? true: false;
    }

    cancelSubmit = (event) => {
        event.preventDefault();
        this.toggleCancelDialog();
    }

    render(){
        const { finished } = this.state;

        if(finished)
            return <Redirect to={'/'} />;

        const { categories } = this.props;

        return (
            <div>
                <Title title={this.props.post ? 'Update post' : 'New post'}/>
                <Card style={{ padding: 10, margin: 'auto', maxWidth: '70%' }}>
                    <form> 
                        <TextField
                            id='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            floatingLabelText="Tittle *" 
                            fullWidth
                        /><br />
                        <TextField
                            id='body'
                            value={this.state.body}
                            onChange={this.handleChange}
                            floatingLabelText="Body *"
                            multiLine
                            rows={2}
                            rowsMax={4}
                            fullWidth
                        /><br />
                        <TextField 
                            id='author'
                            value={this.state.author}
                            onChange={this.handleChange}
                            floatingLabelText="Author *" 
                            fullWidth
                        /><br />
                        {categories && categories.length > 0 && (
                           <SelectField floatingLabelText="Category *" value={this.state.category} onChange={this.selectCategory}>
                                {categories.map((category) => (
                                    <MenuItem key={category.path} value={category.name} primaryText={capitalize(category.name)} />
                                ))}
                            </SelectField>
                        )}
                        <SubmitButton 
                            dialogErrorOpen={this.state.dialogErrorOpen} 
                            dialogErrorClose={this.toggleErrorDialog} 
                            dialogSuccessOpen={this.state.dialogSuccessOpen}
                            dialogSuccessClose={this.toggleSuccessDialog}
                            afterSuccess={this.finished}
                            submit={this.postSubmit} />
                        <CancelButton 
                            dialogOpen={this.state.dialogCancelOpen}
                            dialogClose={this.toggleCancelDialog}
                            buttonSubmit={this.cancelSubmit}
                            yesButton={this.finished}
                        />
                    </form>
                </Card>
            </div>
        )
    }


}

function mapStateToProps(state, ownProps) {
    const { categories, posts } = state;
    const { postId } = ownProps.match.params;
  
    return {
        //If the request is comming from the postList, uses current. Else, it uses posts.allPosts.
      post: posts.allPosts ? posts.allPosts.find( (post) => post.id === postId ) : posts.current,
      categories: categories.allCategories
    };
};

function mapDispatchToProps(dispatch){
    return {
        update: (post) => dispatch(updatePost(post)),
        add: (post) => dispatch(addPost(post)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);