/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';
import { CartBox } from '../CartBox/CartBox';
import { getCart } from '../../../redux/cartRedux';

import styles from './Cart.module.scss';

const Component = ({ className, cart }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button
        className={styles.cartButton}
        onClick={(e) => handleClick(e)}
      >
        <ShoppingBasketIcon size="large" />
        <div className={styles.cartContent}>
          {cart.length}
        </div>
      </Button>
      {open ? (
        <div className={styles.cartOpen}>
          <div className={styles.cartBackground}>
            <div className={styles.cartItems}>
              {cart.length ? (cart.map((prod) => (<CartBox key={prod.id} {...prod} />)))
                : (
                  <div className={styles.cartEmpty}>
                    <p>Your cart is empty</p>
                  </div>
                )}
            </div>
            {cart.length ? (
              <div>
                <Button color="primary" variant="contained" href="/orderSummary">Show my order</Button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
