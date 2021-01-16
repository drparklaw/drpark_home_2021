import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import SGFactor from './routes/SGFactor';
import Navigation from './components/Navigation';
//import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={About}/>
      <Route path="/sgfactor" component={SGFactor} />
    </HashRouter>
  );
}

export default App;