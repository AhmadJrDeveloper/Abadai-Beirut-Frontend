import Home from '../src/Client-Side/Pages/Home';
import Menu from '../src/Client-Side/Pages/Menu';
import AboutUs from '../src/Client-Side/Pages/About'
import Header from './Client-Side/Components/Header';
import Footer from './Client-Side/Components/Footer';
import Inbox from '../src/Admin-Side/Pages/Inbox';
import Categoriesadmin from './Admin-Side/Pages/ViewCat';
import Login from '../src/Admin-Side/Pages/Login';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Client-Side/Pages/Contact';
import SideBar from '../src/Admin-Side/Components/SideBar';
import ViewProducts from './Admin-Side/Pages/ViewProducts';

import './index.css';

function App() {

  return (
   
    <>
  
    {/* <BrowserRouter>
    <Header/>

    <div className='pages'>
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />

       <Route
        path="/Menu"
        element={<Menu />}
        />

      <Route
        path="/About"
        element={<AboutUs />}
        />

      <Route
        path="/Contact"
        element={<Contact />}
        />

     
      </Routes>
    </div>
    <Footer/>

    </BrowserRouter> */}
   
   <BrowserRouter>
   <div className='adminSideBar'>
    <SideBar/>
    <Routes>
    <Route
          path="/admin"
          element={<Login />}
          />

      <Route
          path="/admin/home"
          element={<Categoriesadmin />}
          />

      <Route
          path="/admin/products"
          element={<ViewProducts />}
          />

          <Route
          path="/admin/inbox"
          element={<Inbox />}
          />

    </Routes>
   </div>
   </BrowserRouter>
 

  {/* <BrowserRouter>
    <div className='pages'>
    <Header/>
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />

       <Route
        path="/Menu"
        element={<Menu />}
        />

      <Route
        path="/About"
        element={<AboutUs />}
        />

      <Route
        path="/Contact"
        element={<Contact />}
        />

     
      </Routes>
      <Footer/>
    </div>
   <div className='adminSideBar'>
    <SideBar/>
    <Routes>
    <Route
          path="/admin"
          element={<Login />}
          />

      <Route
          path="/admin/home"
          element={<Categoriesadmin />}
          />

      <Route
          path="/admin/products"
          element={<Categoriesadmin />}
          />

          <Route
          path="/admin/inbox"
          element={<Inbox />}
          />

    </Routes>
   </div>
   </BrowserRouter> */}
   
    </>
  );
}

export default App;


// install axious and import axious from axious
// const fetchproduct = async () => {
// var res = await axios.get(`${baseURL}/1`).then((Response) => {
// setPost(response.data);
// });
// }
