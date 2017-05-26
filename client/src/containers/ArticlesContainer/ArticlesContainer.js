import React, { Component } from 'react';
import $ from 'jquery';
import {ArticleList} from '../../components';

class ArticlesContainer extends Component {

  state = {
    articles: undefined,
    newArticle: undefined
  }

  componentDidMount = () => this.loadArticles()

// create a () that gets blog posts from DB
  loadArticles(){
      $.ajax({
        url: "/api/articles",
        method: "GET"
      }).done((response) => {
        let articles = response.data.reverse();
        console.log(response, "new comment")
        this.setState({ articles: articles })
      })
    }

// render a component that displays our data
  render() {
    return (
      <div className="container">
        <div className="new-post-form">
          <div className="article-list">
            {this.state.articles ? <ArticleList articles={this.state.articles}/> : <h5>loading...</h5> }
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesContainer;
