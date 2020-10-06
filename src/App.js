import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/universalComponents/Header/Header'
import HomeContent from './components/HomeContent/HomeContent'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/universalComponents/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import ErrorPage from '../../components/errorPage/ErrorPage'



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        
        <Switch>
          <Route exact path="/">
            <HomeContent />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/Contact">
            <Contact />
          </Route> 

          <Route exact path="/Portfolio">
            <Portfolio />
          </Route> 

          <Route >
            <ErrorPage />
          </Route>

        </Switch> 
       <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
