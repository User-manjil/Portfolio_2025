import React from 'react'
import './Portfolio.css'
import Portfolio_item from './Portfolio_item'
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>#Selected Work</h1>
      <div className="portfolio_list">
       
          <Portfolio_item number='10' />
          <Portfolio_item number='20' />
          <Portfolio_item number='30' />
   
        
      </div>
    </div>
  )
}

export default Portfolio
