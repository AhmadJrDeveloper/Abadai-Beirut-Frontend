import '../Styles/bestsellers.css'
import Button from './MainButton'

const Recommended = ()=>{


    return(
        <div className="Home-recommended">
            <p className="Home-Cart-Title">Our BestSellers</p>
            <div className="Home-All-Carts">
            <div className="Home-Cart">
                <img src="https://www.w3schools.com/html/img_chania.jpg"/>
                <p className="Home-Product-Name">Shawarma</p>
                <p className="Home-Product-Description">
                    very delicious product
                </p>
                <Button/>
            </div>
            </div>

        </div>
            
    )
}

export default Recommended