import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes,Route, NavLink } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Manifesto from './Components/Manifesto';
import RouteMap from './Components/RouteMap';
import Art from './Components/Art';
import Team from './Components/Team';
import Sanctuary from './Components/Sanctuary';
import FoundersMessage from './Components/FoundersMessage';
import TypewriterComponent from 'typewriter-effect';
import RouteMap2 from './RouteMap2';
import WebFont from 'webfontloader';
import RouteMap3 from './RouteMap3';



export const HeaderContext = React.createContext()
function App() {
   const[loading,setLoading] = useState(true)

  const [phoneClicked, setPhoneClicked] = useState(false)
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>KYN</title>
                <link rel="canonical" href="http://mysite.com/example" />
           
            </Helmet>
   
  <HeaderContext.Provider value={{phoneClicked,setPhoneClicked}}>
    
 <Router>
         <Header />
      <Routes>
       
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/vision' element={<Sanctuary />}></Route>
        <Route path='/manifesto' element={<Manifesto />}></Route>
        
        <Route path='/dreamMap' element={<RouteMap2 />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/art' element={<Art />} ></Route>

      </Routes>
   
    </Router>
     

   
    </HeaderContext.Provider> </>
  );
}


export default App;
