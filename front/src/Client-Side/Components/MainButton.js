import React from 'react'
import '../Styles/MainButton.css'

export default function MainButton({ children }) {
  return (
    <div>
        <button className='MainButton'>{children}</button>
    </div>
  )
}

 