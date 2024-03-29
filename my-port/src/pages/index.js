import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import { homeObjOne } from '../components/AboutSection/Data';
import RecentWork from '../components/RecentWorkSection';
import ExperianceSection from '../components/ExperianceSection';
import ResumeSection from '../components/ResumeSection';
import MusicComponent from '../components/MusicComponent';
import Footer from '../components/Footer';
function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
 
 return (
    <>

    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <MusicComponent style={{}}/>
    <MainSection />
    <AboutSection {...homeObjOne}/>
    <RecentWork/>
    <ExperianceSection/>
    <ResumeSection/>
    <Footer/>
    </>
  )
}

export default Home