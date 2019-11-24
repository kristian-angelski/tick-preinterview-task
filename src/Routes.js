import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components';
import {
  CompaniesContainer,
  AddressesContainer,
  EmployeesContainer,
  ProjectsContainer,
} from './containers';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/company" exact component={CompaniesContainer} />
        <Route path="/company/:id" component={AddressesContainer} />
        <Route
          path="/employee"
          exact
          component={EmployeesContainer}
        />
        {/* <Route path="/employee/:id"  component={} /> */}
        <Route path="/projects" exact component={ProjectsContainer} />
      </Switch>
    </Router>
  );
};

export default Routes;
