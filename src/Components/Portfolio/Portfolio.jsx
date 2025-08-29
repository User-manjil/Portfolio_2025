import React from 'react'
import './Portfolio.css'
import Portfolio_item from './Portfolio_item'
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>#Selected Work</h1>
      <div className="portfolio_list">

        <Portfolio_item imageUrl='https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        imageAlt='Project 2' title='Web Game' subtitle='Description for Project 2' />
        <Portfolio_item 
        imageUrl='https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         imageAlt='Project 3' title='E learning Website'
          subtitle='Description for Project 3' />
        <Portfolio_item 
        imageUrl='https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         imageAlt='Eccommerce Website'
          title='E-commerce Website' subtitle='Description for Project 1' />

      </div>
    </div>
  )
}

export default Portfolio
