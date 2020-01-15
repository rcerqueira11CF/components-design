import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import HeaderOptions from "./HeaderOptions";
import DebtStructureTable from "./Table";

const styles = {
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center"
  }
};

function DebtStructure(props) {
  const { classes, paymentID } = props;

  var getPeriodsWithDebts = paymentID => {
    return 2;
  };

  const periodsWithDebts = getPeriodsWithDebts(paymentID);

  return (
    <div className={classes.root}>
      <div>
        <HeaderOptions
          paymentID={paymentID}
          periodsWithDebts={periodsWithDebts}
        />
      </div>
      <div>{/* <DebtStructureTable /> */}</div>
    </div>
  );
}

DebtStructure.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DebtStructure);
