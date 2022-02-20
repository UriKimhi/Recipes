import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home';
import { NavBar } from './Components/Navbar'; 
import { Popular } from './Components/Popular';
import './Design.css';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Home/>
      <Popular/>
      
      
    </div>
  );
}

export default App;
