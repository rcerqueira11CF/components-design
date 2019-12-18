import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import Table from "./MaterialTable";
// import MUITable from "./MUIDataTable";
// import IconTable from "./IconDataTable";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import RecaudationTable from "./Recaudation/RecaudationTable";
// import WTable from "./WTable";
import CustomTabs from "./commons/CustomTabs";
// import LinksTabs from "./PaymentHistory/LinksTabs";
import BaseComponents from "./BaseComponents/BaseComponents";
import Navbar from "./BaseComponents/Navbar"
require("typeface-montserrat");

const styles = {
  root: {
    backgroundColor: "#F9F9F9"
  },
  marginContent:{
    marginLeft: "90px",
    marginRight: "20px"
  },
  greyBar:{
    height: "100%",
    backgroundColor: "#000000",
    width: "80px",
    float: "left",
    position: "absolute"
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

const labels = ["Historial de pagos", "Recaudación", "Bases"];
const content = [
  <PaymentHistory idCommunity={7} />,
  <RecaudationTable />,
  //<WTable />,
  <BaseComponents />
];
//
function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Navbar />
      <br/>
      <div className={classes.greyBar}>
test
      </div>
      <div className={classes.marginContent}>

        <CustomTabs tabLabels={labels} tabContent={content} />
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
