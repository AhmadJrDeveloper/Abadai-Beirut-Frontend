import React from 'react'
import '../Styles/MainButton.css'

export default function MainButton({ children }) {
  return (
    <button type='submit' className='MainButton'>{children}</button>
  )
}

 