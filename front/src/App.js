import Home from '../src/Client-Side/Pages/Home';

import AboutUs from '../src/Client-Side/Pages/About'
import Header from './Client-Side/Components/Header';
import Footer from './Client-Side/Components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <AboutUs/>
    <Footer/> 

    </div>
  );
}

export default App;


// install axious and import axious from axious
// const fetchproduct = async () => {
// var res = await axios.get(`${baseURL}/1`).then((Response) => {
// setPost(response.data);
// });
// }
