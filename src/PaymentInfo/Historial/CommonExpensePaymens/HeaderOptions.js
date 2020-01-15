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
    backgroundColor: "#fff"
  },
  filterStyle: {
    float: "left"
  },
  buttonsStyle: {
    display: "flex"
  }
};

function HeaderOptions(props) {
  const { classes, paymentID, handleClose, checkedState, handleCheck } = props;

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <CustomCheckBox
            checked={checkedState}
            onChange={() => handleCheck("checkedNoNullifiedPaymentsInBill")}
            value="checkedNoNullifiedPaymentsInBill"
          />
        }
        label="Cartola sin pagos anulados"
      />

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
