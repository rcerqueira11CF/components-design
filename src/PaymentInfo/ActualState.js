import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import DynamicCustomBar from "../commons/DynamicCustomBar";
import NewPaymentForm from "./NewPaymentForm";
import HeaderOptions from "./HeaderOptions";
import Grid from "@material-ui/core/Grid";
import PaymentInfoTable from "../PaymentInfoTable/PaymentInfoTable";
import DebtTable from "./DebtTable";
require("typeface-montserrat");

const styles = {
  root: {
    backgroundColor: "#fff"
  },
  centerBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px"
  }
};

const tabInfo = [
  {
    id: "1",
    titleText: "A pagar",
    amountText: "$6.783.210"
  },
  {
    id: "2",
    titleText: "Pagado",
    amountText: "$650.341"
  },
  {
    id: "3",
    titleText: "Pendiente",
    amountText: "$6.132.869"
  }
];

function ActualState(props) {
  const { classes, paymentID } = props;
  const [state, setState] = React.useState({
    showDebTable: false
  });

  function showDebtTable() {
    if (state.showDebTable)
      return <DebtTable paymentID={paymentID} handleClose={toggleDebtTable} />;
  }

  function toggleDebtTable() {
    setState(prevState => ({
      showDebTable: !prevState.showDebTable
    }));
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11}>
          <DynamicCustomBar boxInfos={tabInfo} />
        </Grid>
        <Grid item xs={1} className={classes.centerBtn}>
          <HeaderOptions toggleAction={toggleDebtTable} />
        </Grid>
      </Grid>
      {showDebtTable()}

      <NewPaymentForm />
      <PaymentInfoTable />
    </div>
  );
}

ActualState.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActualState);
