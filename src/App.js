import React from 'react';
import './css/styles.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import SGFactor from './routes/SGFactor';
import Lawtlin from './routes/Lawtlin';
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={About}/>
      <Route path="/sgfactor" component={SGFactor} />
      <Route path="/lawtlin" component={Lawtlin} />
    </HashRouter>
  );
}

export default App;