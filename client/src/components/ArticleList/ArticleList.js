import React from 'react';
import { Link } from 'react-router';
import './styles.css';

const ArticleList = (props) => {
  return (
    <div className="list-flex">
    { props.articles.map((item, index) => {
      return (
        <div key={index} className="article-panel">
          <h3 className="article-title">{item.title}</h3>
          <ol className="blog-info">
            <li>{item.category}</li>
            <li>{item.content}</li>
            <li>{item.author}</li>
            <img src={item.img} />
          </ol>
          <div className="nav" >
            <Link className="post-btn" to={`/edit/${item._id}`}>Edit</Link>
            <Link className="view-btn" to={`/article/${item._id}`}>View Post</Link>
            <Link className="delete-btn" to={`/article/${item._id}`}>Delete Post</Link>
          </div>
        </div>
        )
      })
    }
    </div>
  )
}

export default ArticleList;
