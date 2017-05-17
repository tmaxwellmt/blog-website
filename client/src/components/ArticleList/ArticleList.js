import React from 'react';
import { Link } from 'react-router';

const ArticleList = (props) => {
  return (
    <div className="List-flex">
    { props.articles.map((item, index) => {
      return (
        <div key={index} className="article-panel">
          <h3 className="article-title">{item.title}</h3>
          <ol>
            <li>{item.category}</li>
            <li>{item.content}</li>
            <li>{item.author}</li>
            <li>{item.img}</li>
          </ol>
          <Link className="postButton" to={`/articles/edit/${item._id}`}>Edit</Link>
        </div>
        )
      })
    }
    </div>
  )
}

export default ArticleList;
