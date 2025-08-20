import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import MouseCursor from './Components/MouseCursor'
const App = () => {
  return (
    <div>
     {/* <MouseCursor /> */}
     <Navbar />
     <Home/>
     {/* <Portfolio/> */}
    
    </div>
  )
}

export default App