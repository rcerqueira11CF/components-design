import React from 'react'
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CustomTabBox from './CustomTabBox';
import Divider from './DivDivider';

const styles = {
  root: {
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
};

function CustomBar(props) {
  const {
    classes,
  } = props;
  return (
    <Paper className={classes.root}>
      <CustomTabBox
        titleText = 'Diciembre'
        amountText = '$4.009.271'
      />

      <Divider />
      <CustomTabBox
        titleText = 'Enero'
        amountText = '$6.783.210'
      />
      <Divider />
      <CustomTabBox
        titleText = 'Febrero'
        amountText = '$5.892.000'
      />
     </Paper>
  );
}

CustomBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomBar);