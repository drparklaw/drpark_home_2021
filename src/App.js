import React from 'react';
import './css/styles.css';

import { HashRouter, Route } from 'react-router-dom';

import About from './routes/About';
import LegalDictionary from './routes/LegalDictionary';
import BarPassPredictor from './routes/BarPassPredictor';

import Navigation from './components/Navigation';
import ScoreGenerator from './component/ScoreGenerator';

function App() {
  return (
    <HashRouter>

      <Navigation />

      <Route
        path="/"
        exact={true}
        component={About}
      />

      {/* <Route
        path="/legal_dictionary"
        component={LegalDictionary}
      /> */}

      <Route
        path="/legal_dictionary"
        component={LegalDictionary}
      />

      <Route
        path="/barpass_predictor"
        component={BarPassPredictor}
      />


      <Route
        path="/score_generator"
        component={ScoreGenerator}
      />

        
    </HashRouter>
  );
}

export default App;