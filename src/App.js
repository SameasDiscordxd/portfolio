import {Routes, Route} from 'react-router-dom'
import './App.css';
import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className = 'App'>
      <Navbar/>
      <Routes>
        <Route path = '/' element ={<Home/>} />
        <Route path = '/About' element ={<About/>} />
        <Route path = '/Contact' element ={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
