
import Message from '../src/Admin-Side/Components/Message'
// pages
import Inbox from '../src/Admin-Side/Pages/Inbox'
import SideBar from '../src/Admin-Side/Components/SideBar'
import AddCat from './Admin-Side/Pages/AddCat.js';

function App() {
  return (
    <div className="App">

      <SideBar/>
      
     < AddCat/>

    </div>
  );
}

export default App;
