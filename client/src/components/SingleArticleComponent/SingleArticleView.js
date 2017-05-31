import React from 'react';
import {Link} from 'react-router';
import {PostCommentContainer} from '../../containers';
var linkStyle = {

      trueColor: {
        backgroundColor: "red"
    },
    falseColor: {
      backgroundColor: "blue"
  }
  }
const hello = false;

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
              <button onClick={() => props.toggleColor()}>Toggle Color</button>
            </ul>
            <div>
              <PostCommentContainer id={props.article._id} />
            </div>
            <Link style={props.buttonColor ? linkStyle.trueColor : linkStyle.falseColor } className="btn btn-warning" to={`/editPost/${props.article.id}`}>Edit</Link>
        </div>
      </div>

    </div>
  )

}


export default SingleArticleView;
