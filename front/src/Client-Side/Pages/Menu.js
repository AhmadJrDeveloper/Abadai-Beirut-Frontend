
import Categories from "../Components/Categories";
import Button from '../Components/MainButton'
import React from 'react'
import ItemCarousel from '../Components/Products'
import '../Styles/Menu.css'
function Menu() {
  return (
    <div>
        <Categories/>
        <div className="menu-middle-search-item">
            <span className="menu-separator-span">
                <h3>Fararij</h3>
            </span>

            <form className="menu-middle-separator-search-form"> 
                <input type="text" placeholder="search" className="menu-search-input-client"/>
                <Button>Search</Button>
            </form>
        </div>
       
      <ItemCarousel/>
    </div>
  )
}

export default Menu

