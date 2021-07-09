import React from 'react';
import './css/styles.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Lawtlin from './routes/Lawtlin';
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={About}/>
      <Route path="/lawtlin" component={Lawtlin} />
    </HashRouter>
  );
}

export default App;