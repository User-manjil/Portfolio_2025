import React from 'react'
import './Portfolio_item.css'
const Portfolio_item = (props) => {
    const imageUrl = props.imageUrl;
    const imageAlt = props.imageAlt
    const title = props.title
    const subtitle = props.subtitle
  return (
    <div className='portfolio_item'>
     <div className="image_here"><img src={imageUrl} alt={imageAlt} /></div>
     <div className="text_description">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className='button_group'>
        <button >View Case study</button>
        <button>Live Demo</button>
      </div>
      </div> 
    
    </div>
  )
}

export default Portfolio_item
