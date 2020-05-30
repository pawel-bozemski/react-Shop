import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './OrderBox.module.scss';

const Component = ({
  className, image, notes, price, value, title,
}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.table} aria-label="cart table">
      <div className={styles.tableCell}>
        <img src={image} alt="alternative" className={styles.image} />
      </div>
      <div className={styles.tableCell}>
        {title}
      </div>
      <div className={styles.tableCell}>
        {notes}
      </div>
      <div className={styles.tableCell}>
        Value:
        {value}
      </div>
      <div className={styles.tableCell}>
        Price: $
        {value * price}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  notes: PropTypes.string,
  price: PropTypes.number,
  value: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderBox,
  // Container as OrderBox,
  Component as OrderBoxComponent,
};
