import React from 'react'
import { mainFlex, flexFirst, flexSecond, flexContent, headerText,
  myBtn, h1, h3, btnRow, image} from './styles.css'
import { Link } from 'react-router';
import PortImage from './webSample.png';

const Home = (props) => {
  return (
    <div>
      <div className={headerText}>
        <div>
          <h1 className={h1}>My Blog</h1>
        </div>
        <div>
          <h3 className={h3}>A Complete Guide to Stuff and Things</h3>
        </div>
      </div>
      <div className={mainFlex}>
        <div className={flexFirst}>
          <div className={flexContent}>
            <img className={image} src={PortImage} alt="testImg" />
          </div>
        </div>
        <div className={flexSecond}>
          <div className={flexContent}>
            <div className={btnRow}>
              <Link className={myBtn} to={'/signup'}>Signup</Link>
              <Link className={myBtn} to={'/login'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
