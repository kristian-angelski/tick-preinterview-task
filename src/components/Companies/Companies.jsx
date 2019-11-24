import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import {
  fetchCompanies,
  fetchAddresses,
  fetchProjects,
} from '../../redux';

const styles = {
  Paper: {
    padding: 10,
    margin: 10,
    maxHeight: 600,
    overflowY: 'auto',
  },
};

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

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

  const tooltipTitle = name => {
    return (
      <>
        <Typography color="inherit">{name}</Typography>
        <em>{`Would you like to find out more about ${name}?`}</em>
      </>
    );
  };

  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h5">Companies</Typography>
          <>
            <List>
              {companies &&
                companies instanceof Array &&
                companies.map(({ id, name }) => {
                  return (
                    <HtmlTooltip key={id} title={tooltipTitle(name)}>
                      <ListItem
                        button
                        onClick={() => handleCompanySelected(id)}
                      >
                        <ListItemText primary={name} />
                      </ListItem>
                    </HtmlTooltip>
                  );
                })}
            </List>
          </>
        </Paper>
      </Grid>
      <Grid item sm={10}>
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
                  </Paper>
                </Grid>
              </Grid>
            ) : (
              <Typography align="center" variant="h5">
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
