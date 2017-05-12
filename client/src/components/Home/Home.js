import React from 'react'
import {largeButton} from './styles.css'
import {button} from '../../SharedStyles/styles.css'

const Home = (props) => {
  return (
    <div>
      <h1>Hello from Home Component</h1>
      <button className={largeButton} type='button'> Click Me!</button>
      <button className={button} type='button'> Click Me, Im smaller!</button>
    </div>
  )
}

export default Home
