import LOGO from '../Assets/LOGO.png'
// import the style
import '../Styles/SideBar.css'



const SideBar = () =>{


    return(
        <div className='SideBar'>
       <img className="SideBar-logo"src={LOGO}/>

       {/* check if clicked */}
      
       <div className='SideBar-options'>
        <a href="#"><button>
                Categories
        </button></a>

        <a href="#"><button>
                Products
        </button></a>

        <a href="#"><button >
                Inbox
        </button></a>
        </div>
        <a href="#"><button className='SideBar-logout'>
                Logout
        </button></a>
       
       </div>   
    )
}

export default SideBar




