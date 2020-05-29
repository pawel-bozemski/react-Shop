/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';
import { CartBox } from '../../common/CartBox/CartBox';
import { getCart, loadCartRequest, saveCartRequest } from '../../../redux/cartRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.props.loadCart();
  }

  componentDidUpdate() {
    this.props.saveCart(this.props.cart);
  }

  handleClick() {
    const { isOpen } = this.state;
    return isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true });
  }

  render() {
    const { className, cart } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={clsx(className, styles.root)}>
        <Button
          className={styles.cartButton}
          onClick={(e) => this.handleClick(e)}
        >
          <ShoppingBasketIcon size="large" />
          <div className={styles.cartContent}>
            {cart.length}
          </div>
        </Button>
        {isOpen ? (
          <div className={styles.cartOpen}>
            <div className={styles.cartBackground}>
              <div className={styles.cartItems}>
                {cart.length ? (cart.map((prod) => (<CartBox key={prod._id} {...prod} />)))
                  : (
                    <div className={styles.cartEmpty}>
                      <p>Your cart is empty</p>
                    </div>
                  )}
              </div>
              {cart.length ? (
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    href="/orderSummary"
                  >
                    Show my order
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
  saveCart: PropTypes.func,
  loadCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCart: () => dispatch(loadCartRequest()),
  saveCart: (cart) => dispatch(saveCartRequest(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
