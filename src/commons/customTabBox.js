import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const styles = {
  titleTextStyle:{
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.6',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#6d6d6d',

  },
  amountTextStyle:{
    fontFamily: 'Montserrat',
    fontSize: '34px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.39',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#34343d',
  },
};

function CustomTabBox(props) {
  const {
    classes,
    titleText,
    amountText
  } = props;
  return (
    <Box component="div" >
    <Box component="div"className={classes.titleTextStyle} >
      {titleText}
    </Box>
    <Box component="div" className={classes.amountTextStyle} m={1} mt={2}>
      {amountText}
    </Box>
  </Box>);
}

CustomTabBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTabBox);