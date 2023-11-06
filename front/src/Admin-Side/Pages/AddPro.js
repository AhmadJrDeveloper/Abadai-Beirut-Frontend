import React from 'react'

function AddPro() {
  return (
    <>
           
    <form className='add-cat-form'>
    {/* <div className='logo'><img src={Logo}/></div> */}
        <h3>Add a Product Here</h3>

        

        <label for="Product-name">Product Name</label>
        <input type="text" placeholder="Hummus" id="Product-name"/>

        <label for="Category-image">Category Image</label>
        <input type="file" id="Category-image"/>
        <button className="add-cat-btn" type='submit'>add</button>
   
       
    </form>
</>
  )
}

export default AddPro
