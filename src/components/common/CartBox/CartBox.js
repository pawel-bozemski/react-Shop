import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartBox.module.scss';

const Component = ({
  className, title, image, price,
}) => (
  <div className={clsx(className, styles.root)}>
    <Container>
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
              >
                <DeleteIcon />
              </Button>
            </TableCell>
            <TableCell align="center" className={styles.tableCell}>
              $
              {price}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartBox,
  // Container as CartBox,
  Component as CartBoxComponent,
};
