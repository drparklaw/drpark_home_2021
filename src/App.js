import React from 'react';
import './css/styles.css';

import { HashRouter, Route } from 'react-router-dom';

import About from './routes/About';
import LegalDictionary from './routes/LegalDictionary';

import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>

      <Navigation />

      <Route
        path="/"
        exact={true}
        component={About}
      />

      <Route
        path="/legal_dictionary"
        component={LegalDictionary}
      />

    </HashRouter>
  );
}

export default App;