import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: 250,
    height: 35,
    color: '6d6d6d',
    borderRadius: 5,
    border: 'solid 1px #00c85f',
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 0.73,
    letterSpacing: 'normal',
    textAlign: 'center',
    textTransform: 'none',
    backgroundColor: '#white',
    textDecoration: 'none',
    "&:hover:enabled":{
      backgroundColor: '#ccf4df',
      textDecoration: 'none',
    },
    "&:active":{
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    "&:disabled":{
      opacity: 0.4,
      textDecoration: 'none',
      pointerEvents: 'none',
    },
  },
};

function OptionFilterLink(props) {
  const {
    classes,
    label,
    handleClick,
    disabled
  } = props;
  return (
  <Link
    component="button"
    color="default"
    className={classes.root}
    onClick={handleClick}
    disabled={disabled}>
    {label}
  </Link>);
}

OptionFilterLink.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionFilterLink);