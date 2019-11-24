import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = ({ location: { pathname } }) => {
  return (
    <Paper>
      <Tabs
        value={pathname}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value="/" component={Link} to="/" />
        <Tab
          label="Companies"
          value="/companies"
          component={Link}
          to="/companies"
        />
        <Tab
          label="Employees"
          value="/employees"
          component={Link}
          to="/employees"
        />
        <Tab
          label="Employee Job Area"
          value="/area"
          component={Link}
          to="/area"
        />
      </Tabs>
    </Paper>
  );
};

Footer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Footer);
