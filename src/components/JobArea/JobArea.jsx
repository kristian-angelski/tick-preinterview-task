import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { fetchEmployees, fetchProjects } from '../../redux';

const styles = {
  Paper: {
    padding: 10,
    margin: 10,
    maxHeight: 600,
    overflowY: 'auto',
  },
};

const JobArea = () => {
  const { employees } = useSelector(state => state.employees);
  const dispatch = useDispatch();

  const allAreas = employees.map(employee => employee.jobArea);
  const filteredAreas = [...new Set(allAreas)];

  useEffect(() => {
    dispatch(fetchEmployees());
    // dispatch(fetchProjects());
  }, [dispatch]);

  const handleClick = event => {
    console.log(event.target);
  }

  console.log(filteredAreas);

  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h5" align="left">
            Employees
          </Typography>
          <List>
            {filteredAreas &&
              filteredAreas instanceof Array &&
              filteredAreas.map(area => {
                return (
                  <ListItem
                    onClick={event => handleClick(event)}
                    button
                    key={uuid.v4()}
                  >
                    <ListItemText primary={`${area}`} />
                  </ListItem>
                );
              })}
          </List>
        </Paper>
      </Grid>
      <Grid item sm={10}>
        <Paper style={styles.Paper}>
          {false ? (
            <Typography variant="body1">
              {/* {JSON.stringify(selectedEmp)}
              {JSON.stringify(relatedProjects)} */}
            </Typography>
          ) : (
            <Typography align="center" variant="h5">
              Hello, select an area from the left
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default JobArea;
