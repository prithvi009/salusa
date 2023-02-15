
import './App.css';
import React from 'react';
import Navbar from './components/scenes/navbar/Navbar';
import Home from './components/scenes/home/Home';
import About from './components/scenes/about/About';
import { useEffect, useState } from 'react';


//bg-[url(https://preview.colorlib.com/theme/medico/img/banner_bg.png.webp)] bg-no-repeat

function App() {

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);

      }else{
        setIsTopOfPage(false);
      }
    })
    return () => {
      window.removeEventListener("scroll", ()=>{})
    }
  }, []);


  return (
    <div className='bg-[url(https://preview.colorlib.com/theme/medico/img/banner_bg.png.webp)] bg-no-repeat'>
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <Home />
      <About/>
    </div>
  );
}

export default App;
