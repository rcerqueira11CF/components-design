import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";

const styles = {
  root: {
    color: "#6b6b6b",
    border: "solid 1px #6b6b6b",
    backgroundColor: "#ffffff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "eaeaea"
    },
    "&:disabled": {
      backgroundColor: "#ffffff",
      color: "#6b6b6b",
      opacity: 0.6
    },
    "&:active, &:focus": {
      boxShadow: "none"
    },
    "&.MuiFab-sizeSmall": {
      height: 35,
      width: 36
    }
  }
};

function DefaultCircleBtn(props) {
  const { classes, onClick, disabled, iconBtn } = props;
  return (
    <Fab
      size="small"
      color="default"
      aria-label="add"
      className={classes.root}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconBtn}
    </Fab>
  );
}

DefaultCircleBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DefaultCircleBtn);
