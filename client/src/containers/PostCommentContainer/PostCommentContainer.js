import React, { Component } from 'react';
import {PostCommentForm} from '../../components';
import $ from "jquery";
import {browserHistory} from "react-router";


class PostCommentContainer extends Component {
  state = {
    title: undefined,
    comment: undefined,
    newComment: undefined,
    valid: false
  }
  updateField(name, value){
    const newState = {};
    newState[name]=value;
    this.setState(newState);
  }

  onChange = this.onChange.bind(this);
  onChange(name, value){
    this.updateField(name, value);
    this.validate();

  }
  validate(){
    this.setState({
      valid: (this.state.title !== undefined ) && (this.state.comment !== undefined )
    })



  }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit(event) {
    event.preventDefault()
    console.log(
      this.state.title,
      this.state.comment,
      "New comment"
    )
  const comment={title: this.state.title,
      comment: this.state.comment,
            }


  $.ajax({
    url: `/api/articles/comment/${_id}`,
    method: "POST",
    data: comment
  }).done((response) =>
    browserHistory.push('articles/comment'))
  }

  render() {
    return (
      <div>
        <PostCommentForm
        handleSubmit={ this.handleSubmit }
        onChange={ this.onChange }
        valid={ this.state.valid }
          />
      </div>
    )
  }
}
export default PostCommentContainer;
