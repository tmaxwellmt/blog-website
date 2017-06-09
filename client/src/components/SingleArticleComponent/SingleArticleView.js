import React from 'react';
import {Link} from 'react-router';
import {PostCommentContainer} from '../../containers';
import {articlePanel, articleTitle, myBtn, myBtns,
        image, category, content, author} from './styles.css';

const SingleArticleView = (props) => {

  return (
    <div>
      <div>
        <div className={articlePanel}>
          <h2 className={articleTitle}>{ props.article.title }</h2>
          <img className={image} alt="" src={ props.article.img }/>
            <ol>
              <div className={category}><li>{ props.article.category }</li></div>
              <div className={content}><li>{ props.article.content }</li></div>
              <div className={author}><li>{ props.article.author }</li></div>
            </ol>
            <ul className={myBtns}>
              <Link className={myBtn} to={`/edit/${props.article._id}`}>Edit</Link>
              <Link className={myBtn} to={`/article/${props.article._id}`}>Delete Post</Link>
            </ul>
            <div>
              <PostCommentContainer id={props.article._id} />
            </div>
        </div>
      </div>

    </div>
  )

}


export default SingleArticleView;
