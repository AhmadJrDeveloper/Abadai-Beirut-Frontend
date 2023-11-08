import LOGO from '../Assets/LOGO.png'
// import the style
import '../Styles/SideBar.css'



const SideBar = () =>{


    return(
        <div className='SideBar'>
       <img className="SideBar-logo"src={LOGO}/>

       {/* check if clicked */}
      
       <div className='SideBar-options'>
        <a href="/admin/home"><button className='SideBar-menu-item'>
                Categories
        </button></a>

        <a href="/admin/products"><button className='SideBar-menu-item'>
                Products
        </button></a>

        <a href="/admin/inbox"><button className='SideBar-menu-item'>
                Inbox
        </button></a>
        </div>
        <a href="#"><button className='SideBar-logout SideBar-menu-item'>
                Logout
        </button></a>
       
       </div>   
    )
}

export default SideBar




