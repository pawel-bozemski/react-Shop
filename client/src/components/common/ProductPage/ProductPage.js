/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-shadow */
/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { getAll, fetchProducts } from '../../../redux/productRedux';
import { addToCart } from '../../../redux/cartRedux';
import styles from './ProductPage.module.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }


  onChange = ({ target }) => {
    this.setState({ ...this.state, value: parseInt(target.value) });
  };

  render() {
    const {
      className, products, addToCart, match,
    } = this.props;
    const { value } = this.state;
    return (
      <div className={clsx(className, styles.root)}>
        {products.filter((product) => product._id === match.params.id).map((product) => (
          <Card className={styles.card}>
            <div>
              <img src={product.image} alt="alternative" className={styles.image} />
            </div>
            <CardContent className={styles.content}>
              <div className={styles.title}>
                {product.title}
              </div>
              <div className={styles.text}>
                {product.content}
              </div>
              <input type="number" min="1" max="10" value={value} onChange={this.onChange} />
              <div className={styles.price}>
                $
                {product.price}
              </div>
            </CardContent>
            <CardContent className={styles.buttonWrap}>
              <Button
                className={styles.button}
                color="primary"
                variant="contained"
                onClick={() => addToCart({
                  product, value,
                })}
              >
                Add to cart
              </Button>
            </CardContent>
          </Card>
        ))}
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
  addToCart: ({
    id, title, price, image, value,
  }) => dispatch(addToCart({
    id, title, price, image, value,
  })),
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};
