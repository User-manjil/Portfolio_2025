import React from 'react'
import './Portfolio_item.css'
const Portfolio_item = (props) => {
    const number = props.number;
  return (
    <div className='portfolio_item'>
      <h1>Project {number}</h1>
      <div className="image_here"><img src="" alt="" /></div>
      <div className="image_description">
        this is a description of the project

      </div>
    </div>
  )
}

export default Portfolio_item
