import React from 'react';
import {Link} from 'react-router';
import CommentList from '../CommentList/CommentList'

const SingleArticleView = (props) => {
  return (
    <div>
      <div>
        <div className='blog-panel'>
          <h3 className='blog-title'>{ props.article.title }</h3>
            <ul className='blog-text'>
              <li>{ props.article.author }</li>
              <li>{ props.article.category }</li>
              <img src={ props.article.img }/>
              <li>{ props.article.content }</li>
            </ul>
            <Link className="btn btn-warning" to={`/editPost/${props.article.id}`}>Edit</Link>
        </div>
        <CommentList comments={props.article.comments}/>
      </div>

    </div>
  )

}


export default SingleArticleView;
