import React from 'react';
import './App.css';
import Home from './components/home'
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './components/about';
import MakesAndBakes from './components/makesandbakes';
import Photo from './components/photo';
import Graphics from './components/graphics';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/photo" element={<Photo />}></Route>
          <Route path="/graphics" element={<Graphics />}></Route>
          <Route path="/makes-and-bakes" element={<MakesAndBakes />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
