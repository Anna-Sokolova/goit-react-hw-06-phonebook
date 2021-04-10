import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ valueFilter, onChangeFilter }) => (
  <>
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        value={valueFilter}
        onChange={onChangeFilter}
      />
    </label>
  </>
);

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
