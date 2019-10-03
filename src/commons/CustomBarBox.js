import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

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

function CustomBarBox(props) {
  const {
    classes,
    titleText,
    amountText,
    onClick,
    tooltip,
    placement
  } = props;
  return (
    <Tooltip title={ tooltip ? tooltip : "" } placement={placement ? placement : "top"}>
      <Box component="div" onClick={onClick}>
        <Box component="div" className={classes.titleTextStyle} >
          {titleText}
        </Box>
        <Box component="div" className={classes.amountTextStyle} m={1} mt={2}>
          {amountText}
        </Box>
      </Box>
    </Tooltip>
    );
}

CustomBarBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomBarBox);