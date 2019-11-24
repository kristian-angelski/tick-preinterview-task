import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEmployees } from '../../redux';

const EmployeesContainer = ({ getEmployees }) => {
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <div>
      <h2>EmployeesContainer</h2>
    </div>
  );
};

// const mapStateToProps = ({ employees }) => employees;

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => dispatch(fetchEmployees()),
  };
};

EmployeesContainer.propTypes = {
  getEmployees: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(EmployeesContainer);
