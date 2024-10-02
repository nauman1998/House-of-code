import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Comapny from './components/Comapny';
import Clients from './components/Clients';
import Features from './components/Features';
import Services from './components/Services';
import Call_action from './components/Call_action';

import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import ScrollTop from './components/ScrollTop';













function App() {
  return (
    <>
     <Router>
    
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes> */}
        <Home/>
    <Comapny/>
    <Clients/>
    <Features/>
    <Services/>
    <Call_action/>
  <Portfolio></Portfolio>
  <Stats></Stats>
    {/* <Testimonials/> */}
    <Team/>
    <Contact/>
    <Footer/>
        <ScrollTop />
      
    </Router>
   
    
    
    </>
  );
}

export default App;
