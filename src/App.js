import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Landing, Services, Pricing, Ourworks, Error } from './Components';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/prices" component={Pricing} />
        <Route exact path="/ourworks" component={Ourworks} />
        <Route exact path="*" component={Error} />
      </Switch>
    </HashRouter>
  );
}

export default App;
