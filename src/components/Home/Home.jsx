import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Paper, Typography } from '@material-ui/core';
import {
  fetchCompanies,
  fetchAddresses,
  fetchEmployees,
  fetchProjects,
} from '../../redux';

const styles = {
  Paper: {
    padding: 10,
    margin: 10,
  },
};

const Home = ({
  getAddresses,
  getCompanies,
  getEmployees,
  getProjects,
}) => {
  useEffect(() => {
    getAddresses();
    getCompanies();
    getEmployees();
    getProjects();
  }, [getAddresses, getCompanies, getEmployees, getProjects]);

  return (
    <Grid container>
      <Grid item sm style={styles.Grid}>
        <Paper style={styles.Paper}>
          <Typography variant="h1">Welcome!</Typography>
          <Typography variant="h6">
            Please select an option from the menu below.
          </Typography>
        </Paper>
      </Grid>
      {/* <Grid item sm>
        <Paper style={styles.Paper}>Right Pane</Paper>
      </Grid> */}
    </Grid>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getAddresses: () => dispatch(fetchAddresses()),
    getCompanies: () => dispatch(fetchCompanies()),
    getEmployees: () => dispatch(fetchEmployees()),
    getProjects: () => dispatch(fetchProjects()),
  };
};

Home.propTypes = {
  getAddresses: PropTypes.func.isRequired,
  getCompanies: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
