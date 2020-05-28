/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { ProductBox } from '../ProductBox/ProductBox';
import { getAll, fetchProducts } from '../../../redux/productRedux';

import styles from './Products.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { className, products } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.wrapper}>
          {products.map((product) => (<ProductBox key={product.id} {...product} />))}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
