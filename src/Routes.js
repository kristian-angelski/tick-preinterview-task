import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components';
import {
  CompaniesContainer,
  AddressesContainer,
  EmployeesContainer,
  ProjectsContainer,
} from './containers';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/companies" exact component={CompaniesContainer} />
      <Route path="/employees" exact component={EmployeesContainer} />
      <Route path="/addresses" exact component={AddressesContainer} />
      {/* <Route path="/employee/:id"  component={} /> */}
      <Route path="/projects" exact component={ProjectsContainer} />
    </Switch>
  );
};

export default Routes;
