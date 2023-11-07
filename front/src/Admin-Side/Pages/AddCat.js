import React from 'react'
import Logo from '../Assets/LOGO.png'
import '../Styles/AddCat.css'
import Button from '../../Client-Side/Components/MainButton'
function AddCat(prop) {
  return (
    <>
           
    <form className='add-cat-form'>
    {/* <div className='logo'><img src={Logo}/></div> */}
    <div className='add-input-form-container'>
        <h3>Add a Category Here</h3>

        
       

        
        <label for="Category-name">Category Name</label>
        <input type="text" placeholder="Appetizers" id="Category-name"/>

        <label for="Category-image">Category Image</label>
        <input type="file" id="Category-image"/>
        <button className="add-cat-btn" type='submit'>add</button>
   
        </div>
    </form>
</>
  )
}

export default AddCat
