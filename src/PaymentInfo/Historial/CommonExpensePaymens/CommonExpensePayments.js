import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import HeaderOptions from "./HeaderOptions";
import CommonExpensePaymentsTable from "./Table";

const styles = {
  root: {
    backgroundColor: "#fff"
  }
};

function CommonExpensePayments(props) {
  const { classes, paymentID } = props;

  return (
    <div className={classes.root}>
      <div>
        <HeaderOptions paymentID={paymentID} />
      </div>
      <div>
        <CommonExpensePaymentsTable />
      </div>
    </div>
  );
}

CommonExpensePayments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommonExpensePayments);
