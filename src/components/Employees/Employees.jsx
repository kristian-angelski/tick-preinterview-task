import React, { useState, useEffect } from 'react';
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

const Employees = () => {
  const [selectedEmp, setSelectedEmp] = useState({});
  const [relatedProjects, setRelatedProjects] = useState([{}]);
  const [haveSelected, setHaveSelected] = useState(false);

  const { employees } = useSelector(state => state.employees);
  const { projects } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleSelection = id => {
    const empSelected =
      employees &&
      employees.find(employee => employee && employee.id === id);

    setSelectedEmp(empSelected);

    const related =
      projects &&
      projects.filter(
        project =>
          project && project.companyId === selectedEmp.companyId,
      );
    setRelatedProjects(related);
    setHaveSelected(true);
  };

  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h5" align="left">
            Employees
          </Typography>
          <List>
            {employees &&
              employees instanceof Array &&
              employees.map(({ id, firstName, lastName }) => {
                return (
                  <ListItem
                    button
                    key={id}
                    onClick={() => handleSelection(id)}
                  >
                    <ListItemText
                      primary={`${firstName} ${lastName}`}
                    />
                  </ListItem>
                );
              })}
          </List>
        </Paper>
      </Grid>
      <Grid item sm={10}>
        <Paper style={styles.Paper}>
          {haveSelected && selectedEmp && relatedProjects ? (
            <Typography variant="body1">
              {JSON.stringify(selectedEmp)}
              {JSON.stringify(relatedProjects)}
            </Typography>
          ) : (
            <Typography align="center" variant="h5">
              Hello, select an employee from the left
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Employees;
