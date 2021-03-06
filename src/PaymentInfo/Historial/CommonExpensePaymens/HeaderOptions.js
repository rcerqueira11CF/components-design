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
    float: "left"
  },
  buttonsStyle: {
    display: "flex",
    float: "right",
    justifyContent: "center"
  }
};

function HeaderOptions(props) {
  const { classes, paymentID, handleClose, checkedState, handleCheck } = props;

  return (
    <div className={classes.root}>
      <div className={classes.filterStyle}>
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
      </div>
      <div className={classes.buttonsStyle}>
        <span>
          <SecondaryBtn label={"Descargar pdf"} />
        </span>
        <span>
          <SecondaryBtn label={"Descargar excel"} />
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
