import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import ContactPage from './components/ContactSection/index';
function App() {
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/contact" element={<ContactPage/>} />
     </Routes>
     </Router>
  );
}

export default App;
