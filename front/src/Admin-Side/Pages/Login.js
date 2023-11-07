import '../Styles/login.css'
import Logo from '../Assets/LOGO.png'

const LoginForm = ()=>{


    return(
       
   <body className='login-form-body'>
   
           
            <form>
 
                <h3>Login Here</h3>

                
        
                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>
        
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>
        
                <button>Log In</button>
               
            </form>
    </body>
        
    )
}

export default LoginForm