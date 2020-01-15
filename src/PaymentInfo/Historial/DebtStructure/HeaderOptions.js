import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import SecondaryBtn from "../../../commons/subCommons/SecondaryBtn";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomCheckBox from "../../../commons/subCommons/CustomCheckBox";

const styles = {
  root: {
    marginRight: "20px",
    marginLeft: "20px",
    marginBottom: "30px"
  },
  filterStyle: {
    float: "left",
    display: "flex",
    justifyContent: "center"
  },
  buttonsStyle: {
    display: "flex",
    float: "right",
    justifyContent: "center"
  },
  buttonSpace: {
    marginLeft: "15px"
  }
};

function handleDownloadExcel(paymentID) {
  alert("Download excel paymentID" + paymentID);
}

function HeaderOptions(props) {
  const { classes, paymentID, periodsWithDebts } = props;

  return (
    <div className={classes.root}>
      <div className={classes.filterStyle}>
        Períodos que presentan deudas: {periodsWithDebts}
      </div>
      <div className={classes.buttonsStyle}>
        <span>
          <SecondaryBtn
            label={"Descargar excel"}
            onClick={() => handleDownloadExcel(paymentID)}
          />
        </span>
      </div>
      <br />
    </div>
  );
}

HeaderOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderOptions);
