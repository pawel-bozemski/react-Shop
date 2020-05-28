import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Typography variant="h6" gutterBottom>
      Contact form
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="email"
          name="email"
          label="Email adress"
          fullWidth
          autoComplete="email address"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="Phone"
          name="Phone"
          label="Phone number"
          fullWidth
          autoComplete="phone number"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="Subject"
          name="Subject"
          label="What is subject of contact?"
          fullWidth
          autoComplete="Subject"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="Contact"
          name="Contact"
          label="Describe your problem"
          fullWidth
          autoComplete="Subject"
          rows={5}
          multiline
        />
      </Grid>
    </Grid>
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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
