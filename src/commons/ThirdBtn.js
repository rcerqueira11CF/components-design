import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

const styles = {
  root: {
    display: 'flex',
    padding: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 250,
    height: 35,
    borderRadius: 20,
    border: ' solid 0.5px #6d6d6d',
    color: '#6d6d6d',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 0.61,
    letterSpacing: 'normal',
    backgroundColor: '#ffffff',
    textTransform: 'none',
    "&:hover":{
       backgroundColor: '#eaeaea',
    }
  },
  leftIcon:{
    marginLeft: 23,
    marginRight: 27,
  }
};

function ThirdBtn(props) {
  const {
    classes,
    label,
    handleClick,
    disabled
  } = props;
  return (
  <Button
    className={classes.root}
    onClick={handleClick}
    disabled={disabled}
    {...props}>
    <FilterListRoundedIcon className={classes.leftIcon} fontSize='large' shape-rendering="geometricPrecision" />
    {label}
  </Button>);
}

ThirdBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThirdBtn);