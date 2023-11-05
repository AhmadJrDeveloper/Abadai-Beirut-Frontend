import React from 'react'
import '../Styles/AddCat.css'
function EditCat() {
  return (
    <>
           
    <form>
    {/* <div className='logo'><img src={Logo}/></div> */}
        <h3>Edit Category Here</h3>

        

        <label for="Category-name">New Category Name</label>
        <input type="text" placeholder="Appetizers" id="Category-name"/>

        <label for="Category-image">New Category Image</label>
        <input type="file" id="Category-image"/>
        <button className="add-cat-btn" type='submit'>Edit</button>
   
       
    </form>
</>
  )
}

export default EditCat
