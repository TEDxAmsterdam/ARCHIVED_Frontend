import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './containers/Application';
import Home from './containers/Home';
import Ideas from './containers/Ideas';
import {IDEAS} from './constants/Routes';

export default (
  <div>
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path={IDEAS} component={Ideas}/>
    </Route>
  </div>
);
