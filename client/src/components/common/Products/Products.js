/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { ProductBox } from '../ProductBox/ProductBox';

import { getAll } from '../../../redux/productRedux';

import styles from './Products.module.scss';

const Component = ({ className, products }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.wrapper}>
      {products.map((product) => (<ProductBox key={product.id} {...product} />))}
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
