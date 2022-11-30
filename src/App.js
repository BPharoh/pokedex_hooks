import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './components/Home';
import About from './components/About';
import PokeList from './components/PokeList';
import Pokesingle from './components/Pokesingle';
import './App.css';


const App = () => {
  
    return (
      <div className='appContainer'>
          <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='pokelist' element={<PokeList />} />
            <Route path='pokelist/:pokesingle' element={<Pokesingle />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
         </div>
      
    );
  }

export default App;
