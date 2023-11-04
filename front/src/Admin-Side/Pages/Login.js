import '../Styles/login.css'
import Logo from '../Assets/LOGO.png'
const LoginForm = ()=>{


    return(
       
   <>
   
           
            <form>
            <div><img src={Logo}/></div>
                <h3>Login Here</h3>

                
        
                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>
        
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>
        
                <button>Log In</button>
               
            </form>
    </>
        
    )
}

export default LoginForm