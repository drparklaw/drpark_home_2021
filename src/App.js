import React from 'react';
import './css/styles.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Lawtlin from './routes/Lawtlin';
import NewCases from './routes/NewCases';
import SGFactor from './routes/SGFactor';
import Navigation from './components/Navigation';


function App() {
  return (
    // <HashRouter>
    //   <Navigation />
    //   <Route path="/" exact={true} component={About}/>
    //   <Route path="/new_cases" component={NewCases}/>
    //   <Route path="/sgfactor" component={SGFactor}/>
    // </HashRouter>
    <About />
  );
}

export default App;