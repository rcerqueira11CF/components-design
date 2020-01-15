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
  const [state, setState] = React.useState({
    checkedNoNullifiedPaymentsInBill: false
  });

  function handleCheckedChange() {
    setState(prevState => ({
      checkedNoNullifiedPaymentsInBill: !prevState.checkedNoNullifiedPaymentsInBill
    }));
  }

  return (
    <div className={classes.root}>
      <div>
        <HeaderOptions
          paymentID={paymentID}
          checkedState={state.checkedNoNullifiedPaymentsInBill}
          handleCheck={handleCheckedChange}
        />
      </div>
      <div>
        <CommonExpensePaymentsTable
          showNullifiedPayments={state.checkedNoNullifiedPaymentsInBill}
        />
      </div>
    </div>
  );
}

CommonExpensePayments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommonExpensePayments);
