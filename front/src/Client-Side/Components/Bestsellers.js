import '../Styles/bestsellers.css'
import Cart from './Carts'
const Recommended = ()=>{


    return(
        <div className="Home-recommended">
            <p className="Home-Cart-Title">Our BestSellers</p>
            <div className="Home-All-Carts">
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
           
            </div>

        </div>
            
    )
}

export default Recommended