import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import DynamicCustomBar from "../commons/DynamicCustomBar";
import NewPaymentForm from "./NewPaymentForm";
import HeaderOptions from "./HeaderOptions";
import Grid from "@material-ui/core/Grid";
import PaymentInfoTable from "../PaymentInfoTable/PaymentInfoTable";
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

//
function ActualState(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11}>
          <DynamicCustomBar boxInfos={tabInfo} />
        </Grid>
        <Grid item xs={1} className={classes.centerBtn}>
          <HeaderOptions />
        </Grid>
      </Grid>

      <NewPaymentForm />
      <PaymentInfoTable />
    </div>
  );
}

ActualState.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActualState);
