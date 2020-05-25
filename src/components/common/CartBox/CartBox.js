/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/cartRedux';

import styles from './CartBox.module.scss';

const Component = ({
  id, className, title, image, price, value, removeFromCart,
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
            <textarea
              placeholder="Type here if u want something changed"
            />
          </TableCell>
          <TableCell className={styles.tableCell}>
            <Button
              color="secondary"
              variant="outlined"
              className={styles.delete}
              onClick={() => removeFromCart(id)}
            >
              <DeleteIcon />
            </Button>
          </TableCell>
          <TableCell align="center" className={styles.tableCell}>
            <p>
              {' '}
              {value}
            </p>
            $
            {price}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  value: PropTypes.number,
  id: PropTypes.string,
  removeFromCart: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

const Container = connect(null, mapDispatchToProps)(Component);
export {
  Container as CartBox,
  Component as CartBoxComponent,
};
