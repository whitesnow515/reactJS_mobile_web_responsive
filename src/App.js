import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Wrapper } from './components/Wrapper';
import Header from './components/Header';
import Landingpage from './pages/landingpage/Landingpage'
import Landingpagere from './pages/landingpage/Landingpagere';

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="w-screen bg-[#F4F5F7] h-full absolute">
          <div className="max-w-[1600px] mx-auto rounded-2xl bg-white h-screen shadow-xl  overflow-x-hidden overflow-y-hidden">
              <Routes>
                <Route path="/buy" exact element= {<Landingpage />}/>
                <Route path="/sell" exact element= {<Landingpage />}/>
                <Route path="/rent" exact element= {<Landingpage />}/>
                <Route path="/" exact element= {<Landingpage />}/>
                <Route path="/re" exact element= {<Landingpagere />}/>
              </Routes>
          </div>
        </div>
        
        
      </Wrapper>
    </BrowserRouter>
  )
}