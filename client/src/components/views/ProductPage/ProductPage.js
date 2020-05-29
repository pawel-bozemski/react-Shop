/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-shadow */
/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAll, fetchProducts } from '../../../redux/productRedux';
import { ProductPageBox } from '../../common/ProductPageBox/ProductPageBox';
import styles from './ProductPage.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const {
      className, products, match,
    } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        {products.filter((product) => product._id === match.params.id).map((product) => (
          <ProductPageBox key={product.id} {...product} />))}
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  addToCart: PropTypes.func,
  products: PropTypes.array,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    content: PropTypes.string,
    _id: PropTypes.string,
  }),
  fetchProducts: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};
