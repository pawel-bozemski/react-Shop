import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderBox.module.scss';

const Component = ({
  className, image, notes, price, value, title,
}) => (
  <div className={clsx(className, styles.root)}>
    <Table className={styles.table} aria-label="cart table">
      <TableBody>
        <TableRow>
          <TableCell className={styles.tableCell}>
            <img src={image} alt="alternative" className={styles.image} />
          </TableCell>
          <TableCell className={styles.tableCell}>
            {title}
          </TableCell>
          <TableCell className={styles.tableCell}>
            {notes}
          </TableCell>
          <TableCell className={styles.tableCell}>
            Value:
            {value}
          </TableCell>
          <TableCell align="center" className={styles.tableCell}>
            Price: $
            {value * price}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
