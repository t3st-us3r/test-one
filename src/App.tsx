import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
