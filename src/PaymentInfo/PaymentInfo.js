import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import CustomBlueTabs from "../commons/CustomBlueTabs";
import ActualState from "./ActualState/ActualState";
import HeaderInfo from "./HeaderInfo";
require("typeface-montserrat");

const styles = {
  root: {
    backgroundColor: "#fff"
  }
};
// const tabInfo = [
//   {
//     id: "1",
//     titleText: "Diciembre",
//     amountText: "$4.009.271"
//   },
//   {
//     id: "2",
//     titleText: "Enero",
//     amountText: "$6.783.210"
//   },
//   {
//     id: "3",
//     titleText: "Febrero",
//     amountText: "$5.892.000"
//   }
// ];

//
function PaymentInfo(props) {
  const { classes, paymentID } = props;
  const labels = ["Estado actual", "Historial"];
  const content = [<ActualState paymentID={paymentID} />, "Historial"];
  return (
    <div className={classes.root}>
      <HeaderInfo />
      <CustomBlueTabs tabLabels={labels} tabContent={content} />
    </div>
  );
}

PaymentInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentInfo);
