import React, { Component } from 'react';
import { TextField, Dialog, FlatButton } from 'material-ui';
import uuid from 'uuid';

class CommentFormModal extends Component {
  state = {
    author: this.props.comment ? this.props.comment.author : '',
    authorRequiredError: '',
    body: this.props.comment ? this.props.comment.body : '',
    bodyRequiredError: '',
  };

  cleanForm = { author: '', body: '' };

  hasErrors = () => {
    return this.state.body.length === 0 || this.state.author.length === 0
      ? true
      : false;
  };

  commentSubmit = event => {
    event.preventDefault();
    const { comment, post, operation, dialogClose } = this.props;
    let newComment = {};
    if (this.hasErrors()) {
      this.setState({
        authorRequiredError: this.state.author ? '' : 'This field is required',
        bodyRequiredError: this.state.body.length
          ? ''
          : 'This field is required',
      });
    } else {
      if (comment) {
        newComment = {
          ...comment,
          timestamp: Date.now(),
          body: this.state.body,
          author: this.state.author,
        };
      } else {
        newComment = {
          id: uuid()
            .split('-')
            .join(''),
          timestamp: Date.now(),
          body: this.state.body,
          author: this.state.author,
          parentId: post.id,
        };
      }
      operation(newComment);
      this.setState({ ...this.cleanForm });
      dialogClose();
    }
  };

  handleChange = (event, value) => {
    this.setState({
      [event.target.id]: value,
      authorRequiredError: '',
      bodyRequiredError: '',
    });
  };

  render() {
    const { comment, dialogOpen, dialogClose } = this.props;

    const actions = [
      <FlatButton
        label="Save"
        primary
        keyboardFocused
        onClick={this.commentSubmit}
      />,
      <FlatButton label="Cancel" primary onClick={dialogClose} />,
    ];

    return (
      <div id="commentForm">
        <Dialog
          title={comment ? 'Update Comment' : 'New Comment'}
          open={dialogOpen}
          onRequestClose={dialogClose}
          actions={actions}
        >
          <form>
            <TextField
              id="body"
              value={this.state.body}
              errorText={this.state.bodyRequiredError}
              onChange={this.handleChange}
              floatingLabelText="Comment *"
              multiLine
              rows={2}
              rowsMax={4}
              fullWidth
            />
            <br />
            <TextField
              id="author"
              value={this.state.author}
              errorText={this.state.authorRequiredError}
              onChange={this.handleChange}
              floatingLabelText="Author *"
              fullWidth
            />
            <br />
          </form>
        </Dialog>
      </div>
    );
  }
}

export default CommentFormModal;
