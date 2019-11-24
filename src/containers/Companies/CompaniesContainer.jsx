import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../redux';
import { Companies } from '../../components';

const CompaniesContainer = ({ getCompanies }) => {
  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  return <Companies />;
};

// const mapStateToProps = ({ companies }) => companies;

const mapDispatchToProps = dispatch => {
  return {
    getCompanies: () => dispatch(fetchCompanies()),
  };
};

CompaniesContainer.propTypes = {
  getCompanies: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(CompaniesContainer);
