import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import SGFactor from './routes/SGFactor';
import Navigation from './components/Navigation';

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