import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAddresses } from '../../redux';

const AddressesContainer = ({ getAddresses }) => {
  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  return (
    <div>
      <h2>AddressesContainer</h2>
    </div>
  );
};

// const mapStateToProps = ({ addresses }) => addresses;

const mapDispatchToProps = dispatch => {
  return {
    getAddresses: () => dispatch(fetchAddresses()),
  };
};

AddressesContainer.propTypes = {
  getAddresses: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(AddressesContainer);
