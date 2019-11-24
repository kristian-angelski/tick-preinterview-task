import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Paper, Typography } from '@material-ui/core';
import {
  fetchCompanies,
  fetchAddresses,
  fetchProjects,
} from '../../redux';

const styles = {
  Typography: {
    paddingBottom: 20,
  },
  Paper: {
    padding: 10,
    margin: 10,
  },
};

const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState({});
  const [
    selectedCompanyAddress,
    setSelectedCompanyAddress,
  ] = useState({});
  const [
    selectedCompanyProjects,
    setSelectedCompanyProjects,
  ] = useState([{}]);
  const [haveSelected, setHaveSelected] = useState(false);
  const dispatch = useDispatch();
  const { companies } = useSelector(state => state.companies);
  const { addresses } = useSelector(state => state.addresses);
  const { projects } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(fetchAddresses());
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleCompanySelected = id => {
    const companyMatchedById =
      companies &&
      companies.find(company => company && company.id === id);
    const addressMatchedById =
      addresses &&
      addresses.find(address => address && address.companyId === id);
    const projectsMatchedById =
      projects &&
      projects.filter(project => project && project.companyId === id);

    setSelectedCompany(companyMatchedById);
    setSelectedCompanyAddress(addressMatchedById);
    setSelectedCompanyProjects(projectsMatchedById);
    setHaveSelected(true);
  };

  return (
    <Grid container>
      <Grid item sm style={styles.Grid}>
        <Paper style={styles.Paper}>
          <Typography style={styles.Typography} variant="h5">
            Companies
          </Typography>
          <>
            {companies &&
              companies.map(company => {
                const { id, name } = company;
                return (
                  <Typography
                    key={id}
                    variant="body1"
                    align="center"
                    onClick={() => handleCompanySelected(id)}
                  >
                    {name}
                  </Typography>
                );
              })}
          </>
        </Paper>
      </Grid>
      <Grid item sm={8}>
        <Paper style={styles.Paper}>
          <>
            {haveSelected &&
            selectedCompany &&
            selectedCompanyAddress &&
            selectedCompanyProjects ? (
              <Grid container>
                <Grid item sm>
                  <Paper style={styles.Paper}>
                    <Typography variant="h4">
                      {selectedCompany.name}
                    </Typography>
                    <Typography variant="h6">
                      {selectedCompany.business}
                    </Typography>
                    <Typography variant="caption">
                      {selectedCompany.slogan}
                    </Typography>
                    <Typography variant="body1">
                      {selectedCompanyAddress &&
                        `${selectedCompanyAddress.street}, ${selectedCompanyAddress.city} - ${selectedCompanyAddress.country}, ${selectedCompanyAddress.state}`}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item sm>
                  <Paper style={styles.Paper}>
                    <Typography variant="h4">Projects</Typography>
                    {selectedCompanyProjects &&
                      selectedCompanyProjects instanceof Array &&
                      selectedCompanyProjects.map(project => {
                        return (
                          <div key={project.id}>
                            <Typography variant="h6">
                              {project.name}
                            </Typography>
                            <Typography variant="body1">
                              {`Department: ${project.department}`}
                            </Typography>
                          </div>
                        );
                      })}
                    {/* employee here */}
                  </Paper>
                </Grid>
              </Grid>
            ) : (
              <Typography variant="h5">
                Hello, select a company from the left
              </Typography>
            )}
          </>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Companies;
