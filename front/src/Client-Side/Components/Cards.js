
// import dncwlkfvjwlk
import '../Styles/Carts.css'
import Button from './MainButton'

const Cart = ({ children })=>{


    return(
        <div className="Home-Cart">
            <img src="https://www.w3schools.com/html/img_chania.jpg"/>
            <p className="Home-Product-Name">Shawarma</p>
            <p className="Home-Product-Description">
                very delicious product
            </p>
            <span>{children}</span>

        </div>
            
    )
}

export default Cart