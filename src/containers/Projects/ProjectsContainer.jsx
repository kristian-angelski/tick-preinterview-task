import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProjects } from '../../redux';

const ProjectsContainer = ({ getProjects }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div>
      <h2>ProjectsContainer</h2>
    </div>
  );
};

// const mapStateToProps = ({ projects }) => projects;

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};

ProjectsContainer.propTypes = {
  getProjects: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(ProjectsContainer);
