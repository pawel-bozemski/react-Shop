import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styles from './Header.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Button color="inherit" className={styles.title} href="/">
          <h1>New Shop</h1>
        </Button>
        <div className={styles.menu}>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/contact" color="inherit">Contact</Button>
          <div className={styles.cart}>
            <Button>
              <ShoppingBasketIcon size="large" />
              <div className={styles.cartContent}>
                0
              </div>
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
