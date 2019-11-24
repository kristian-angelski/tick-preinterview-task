import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Companies, Employees, JobArea } from './components';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/companies" exact component={Companies} />
      <Route path="/employees" exact component={Employees} />
      <Route path="/area" exact component={JobArea} />
    </Switch>
  );
};

export default Routes;
