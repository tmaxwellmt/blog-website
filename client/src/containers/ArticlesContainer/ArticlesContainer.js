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
        console.log(response)
        this.setState({ articles: response.data })
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
          <form onSubmit={this.submitArticle}>
          </form>
        </div>
      </div>
    );
  }
}

export default ArticlesContainer;
