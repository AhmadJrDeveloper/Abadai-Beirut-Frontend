import React from 'react'
import { BsList } from "react-icons/bs";
import '../Styles/HeaderAdmin.css';
const HeaderAdmin= ({ children })=> {
  return (
    <div className='header-admin-component'>
      <BsList className='header-admin-icon'/>
      <p>Dashboard<span>/</span><span>{children}</span>/</p>
      <hr className='header-admin-separator'/>
    </div>
  )
}

export default HeaderAdmin
