import React from 'react';
import {postCommentForm, form, formHeader, postCommentBtn} from "./styles.css"

const PostCommentForm = (props) => {
  return (
    <div className={postCommentForm}>
      <form className={form} onSubmit={(event) => props.handleSubmit(event)}>
      <h1 className={formHeader}>Blog Posts</h1>
        <div className="form-group">
          <label className="label">Title:</label>
          <input type="text" placeholder="Title" value={props.title}
            onChange={(event) => props.onChange("title", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Comment:</label>
          <input type="text" placeholder="Comment" value={props.content}
            onChange={(event) => props.onChange("content", event.target.value)}/>
        </div>
          <button disabled={!props.valid} type="submit" className={postCommentBtn}>Post</button>
      </form>
    </div>
  )
}
export default PostCommentForm;
