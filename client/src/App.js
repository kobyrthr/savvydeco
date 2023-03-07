import {Profiler, React,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import ProductPage from './Pages/ProductPage'



function App() {

  return (<>
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element ={<ProductPage/>}/>
        <Route exact path='/profile' element ={<Profile/>}/>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
