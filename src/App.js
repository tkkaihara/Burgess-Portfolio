import React from 'react';
import './css/App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import AppDesigns from './components/AppDesigns';
import Logos from './components/Logos';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Route path='/' exact>
          <Jumbotron />
          <About />
          <Contact />
        </Route>
        <Route path='/logos'>
          <Logos />
        </Route>
        <Route path='/app_designs'>
          <AppDesigns />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
