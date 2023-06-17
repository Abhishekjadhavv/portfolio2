// ------ All css imported here ---
import './App.css';
import Nevbar from './Components/Nevbar';

// ------ All pages imported here ---
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home';



function App() {
  const toggleSiderBar = ()=>{
    document.querySelector(".Sidebar").classList.toggle("active")
  }

  return (
   <>
     <Nevbar toggleSiderBar={toggleSiderBar}/>
     <Sidebar/>
     <Home/>
   </>
  );
}

export default App;
