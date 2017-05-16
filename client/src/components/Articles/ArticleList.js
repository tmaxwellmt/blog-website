import React from 'react';

const ArticleList = (props) => {
  return (
    <div className="List-flex">
    { props.articles.map(item => {
      return (
        <div className="article-panel">
          <h3 className="article-title">{item.title}</h3>
          <ol>
            <li>{item.category}</li>
            <li>{item.content}</li>
            <li>{item.author}</li>
            <li>{item.img}</li>
          </ol>
        </div>
        )
      })
    }
    </div>
  )
}

export default ArticleList;
