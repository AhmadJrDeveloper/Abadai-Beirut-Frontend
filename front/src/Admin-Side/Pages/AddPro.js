import React from 'react'
import '../Styles/AddPro.css'
function AddPro() {
  return (
    <>
           
    <form className='add-pro-form'>
    {/* <div className='logo'><img src={Logo}/></div> */}
    <div className='add-input-form-container-pro'>
        <h3>Add a Product Here</h3>

        

        <label for="Product-name">Product Name</label>
        <input type="text" placeholder="Hummus" id="Product-name"/>


        <label for="Product-description">Product Description</label>
        <textarea id="Product-description"> </textarea> 

        <label for="Product-price">Product Price</label>
        <input type='number' placeholder='2$' id='Product-price'/>

        <label for="Category-image">Category Image</label>
        <input type="file" id="Category-image"/>

        <select id='Category'>
          <option value="Batata">Batata</option>
          <option value="Fararij">Fararij</option>
          <option value="salata">Salata</option>
        </select>
        <button className="add-pro-btn" type='submit'>add</button>
   
       </div>
    </form>
</>
  )
}

export default AddPro
