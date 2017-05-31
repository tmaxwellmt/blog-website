import React from 'react';
import { Link } from 'react-router';
import {listFlex, articlePanel, articleTitle, myBtn, myBtns,
        image, category, content, author} from './styles.css';

const ArticleList = (props) => {
  return (

    <div className= {listFlex}>
    { props.articles.map((item, index) => {
      return (
        <div key={index} className= {articlePanel}>
          <div>
            <h3 className= {articleTitle}>{item.title}</h3>
            <img className={image} src={item.img} />
            <ol>
              <div className={category}><li>{item.category}</li></div>
              <div className={content}><li>{item.content}</li></div>
              <div className={author}><li>{item.author}</li></div>
            </ol>
            <ul className={myBtns}>
              <Link  className= {myBtn} to={`/edit/${item._id}`}>Edit</Link>
              <Link  className= {myBtn} to={`/article/${item._id}`}>View Post</Link>
              <Link  className= {myBtn} to={`/article/${item._id}`}>Delete Post</Link>
            </ul>
          </div>
        </div>
        )
      })
    }
    </div>
  )
}

export default ArticleList;
