// import Home from '../src/Client-Side/Pages/Home';
// import Menu from '../src/Client-Side/Pages/Menu';
// import AboutUs from '../src/Client-Side/Pages/About'
import Header from './Client-Side/Components/Header';
// import Footer from './Client-Side/Components/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contact from './Client-Side/Pages/Contact';

function App() {
  return (
    <div className='App'>
      <Header/>
    </div>
    
    
    // <BrowserRouter>
    // <Header/>
    // <div className='pages'>
    //   <Routes>
    //     <Route
    //     path="/"
    //     element={<Home />}
    //     />

    //   {/* <Route
    //     path="/Menu"
    //     element={<Menu />}
    //     />

    //   <Route
    //     path="/About"
    //     element={<AboutUs />}
    //     /> */}

    //   <Route
    //     path="/Contact"
    //     element={<Contact />}
    //     />
    //   </Routes>
        
    // </div>
    
    // </BrowserRouter>

  );
}

export default App;


// install axious and import axious from axious
// const fetchproduct = async () => {
// var res = await axios.get(`${baseURL}/1`).then((Response) => {
// setPost(response.data);
// });
// }
