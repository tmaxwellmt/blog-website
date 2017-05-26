import React, { Component } from 'react';
import $ from 'jquery';
import {SingleArticleView} from '../../components';

class SingleArticleContainer extends Component {
  state = {
    article: undefined
  }
  loadArticle = this.loadArticle.bind(this)
  componentDidMount = () => this.loadArticle()

// create a () that gets single blog posts from DB
loadArticle(){
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: "GET"
    }).done((response) => {
      console.log(response, "new comment")
      this.setState({article: response})
    })
  }


// render a component that displays our data
  render() {
    console.log("finding nemo ", this.state.article);
    return (
      <div className="article-container">
        { this.state.article
          ? <SingleArticleView
          article={this.state.article}/>
          : <h5>loading...</h5> }
      </div>
    );
  }
}

export default SingleArticleContainer;
