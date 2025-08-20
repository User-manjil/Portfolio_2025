import React, { useEffect, useRef } from 'react'
import './MouseCursor.css'

const MouseCursor = () => {
  const mouseCursorRef = useRef(null)
  const dotBoxRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.pageX
      const y = e.pageY
      if (mouseCursorRef.current) {
        mouseCursorRef.current.style.left = x - 20 + 'px'
        mouseCursorRef.current.style.top = y - 20 + 'px'
      }
      if (dotBoxRef.current) {
        dotBoxRef.current.style.left = x - 20 + 'px'
        dotBoxRef.current.style.top = y - 20 + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className='MouseCursor' ref={mouseCursorRef}><div className="dot_box" ref={dotBoxRef}></div></div>
      
    </>
  )
}

export default MouseCursor
