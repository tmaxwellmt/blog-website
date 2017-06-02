import React from 'react';
import {postForm, form, formHeader, postBtn} from './styles.css';

const EditArticleForm = (props) => {
  return (
    <div className={postForm}>
      <form className={form} onSubmit={props.handleSubmit}>
        <h1 className={formHeader}>Edit A Post</h1>
        <div className="form-group">
          <label className="label">Title: </label>
          <input type="text" value={props.name} placeholder="Title"
            onChange={(event) => props.updateField("title", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Image: </label>
          <input type= "text" value={props.img} placeholder="Enter URL"
            onChange={(event) => props.updateField("img", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Category: </label>
          <input type= "text" value={props.category} placeholder="Category"
            onChange={(event) => props.updateField("category", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Content: </label>
          <input type= "text" value={props.content} placeholder="Content"
            onChange={(event) => props.updateField("content", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Author: </label>
          <input type= "text" value={props.author} placeholder="Author"
            onChange={(event) => props.updateField("author", event.target.value)}/>
        </div>
        <div className="edit-form-btns">
          <button onClick={(event) => props.handleSubmit(event)} className={postBtn}>Update Article +</button>
          <button onClick={(event) => props.deleteById(event)} className="btn btn-default">Delete Article -</button>
        </div>
      </form>
    </div>
  )
}
export default EditArticleForm;
