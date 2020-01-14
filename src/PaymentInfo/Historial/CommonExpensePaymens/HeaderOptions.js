import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import SecondaryBtn from "../../../commons/subCommons/SecondaryBtn";

const styles = {
  root: {
    backgroundColor: "#fff"
  }
};

function HeaderOptions(props) {
  const { classes, paymentID, handleClose } = props;

  return (
    <div className={classes.root}>
      <span>
        <SecondaryBtn label={"Descargar pdf"} />
      </span>
      <span>
        <SecondaryBtn label={"Descargar excel"} />
      </span>
    </div>
  );
}

HeaderOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderOptions);
