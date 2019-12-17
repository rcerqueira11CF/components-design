import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';

const styles = {
  root: {
    color: '#0ecb68',
    border: 'solid 1px #0ecb68',
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    "&:hover":{
      backgroundColor: 'eaeaea'
    },
    "&:disabled":{
      backgroundColor: '#ffffff',
      color: '#0ecb68',
      opacity: 0.6,
    },
    "&:active, &:focus":{
      boxShadow: 'none',

    }
  },
};

function PrimaryCircleBtn(props) {
  const {
    classes,
    onClick,
    disabled,
    iconBtn
  } = props;
  return (
    <Fab
    size="small"
    color="default"
    aria-label="add"
    className={classes.root}
    onClick={onClick}
    disabled={disabled}
    {...props}>
    {iconBtn}
    </Fab>
  )
}

PrimaryCircleBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryCircleBtn);