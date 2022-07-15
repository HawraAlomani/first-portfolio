import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
 
 return (
    <>

    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <MainSection />
    <AboutSection />
    </>
  )
}

export default Home