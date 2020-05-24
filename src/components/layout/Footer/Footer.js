import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.foot}>
      <div className={styles.location}>
        <ul>
          <li>
            <h1>You can find us here</h1>
          </li>
          <li>
            <p>New shop</p>
            <p>Best avenue 65</p>
            <p>20-996</p>
            <p>Lublin, Poland</p>
          </li>
        </ul>
      </div>
      <div className={styles.media}>
        <p>Check our social media</p>
        <a href="https://instagram.com">
          <InstagramIcon>Instagram</InstagramIcon>
        </a>
        <a href="https://facebook.com">
          <FacebookIcon>Facebook</FacebookIcon>
        </a>
        <a href="https://youtube.com">
          <YouTubeIcon>YouTube</YouTubeIcon>
        </a>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
