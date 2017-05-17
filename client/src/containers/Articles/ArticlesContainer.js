import React, { Component } from 'react';
import {ArticleList} from '../../components/Articles/ArticleList';

class ArticlesContainer extends Component {

  state = {
    articles: undefined,
    newArticle: undefined
  }

//   componentDidMount = () => this.loadArticles()
//
// // create a () that gets blog posts from DB
//   loadArticles(){
//       $.ajax({
//         url: "/api/articles",
//         method: "GET"
//       }).done((response) => {
//         console.log(response)
//         this.setState({ articles: response.data })
//       })
//     }
//
//   deleteArticle(id) {
//     $.ajax({
//       url: '/api/articles/' + id,
//       method: 'DELETE'
//     }).done((data) => {
//       console.log("deleted Article");
//       this.setState({ articles: data.data })
//     })
//   }

// render a component that displays our data
  render() {
    return (
      <div className="container">
        <div className="new-post-form">
          <div className="article-list">
            {this.state.articles ? <ArticleList Articles={this.state.articles}/> : undefined }
          </div>
          <form onSubmit={this.submitArticle}>
          </form>
        </div>
      </div>
    );
  }
}

export default ArticlesContainer;
