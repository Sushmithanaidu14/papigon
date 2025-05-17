
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Roadmap from './Roadmap';
import Industries from './Industries';

function App() {
  return (
    <BrowserRouter>
    <Header/>
   <Routes>
   <Route path="/Roadmap" element={<Roadmap/>}/>
   <Route path="/Industries" element={<Industries/>}/>
   

   </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
