import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    backgroundColor: "#fff",
    marginRight: "5px",
    marginTop: "5px",
    marginBottom: "9px"

    //display: "flex"
    //justifyContent: "space-between"
  },
  propertyClass: {
    fontFamily: "Montserrat",
    fontSize: "40px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 0.8,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#34343d"
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
function HeaderInfo(props) {
  const { classes, paymentID, handleClose } = props;

  function getPropertyOwnerInfo() {
    return {
      name: "23",
      ownerName: "Geralt of Rivia",
      ownerEmail: "gof.rivia@gmail.com",
      ownerPhonenumber: "+56 9 1198 8192"
    };
  }
  const propertyOwnerInfo = getPropertyOwnerInfo();

  return (
    <div className={classes.root}>
      <div
        onClick={handleClose}
        style={{
          float: "right",
          cursor: "pointer",
          marginTop: "9px",
          marginRight: "5px"
        }}
      >
        <CloseIcon />
      </div>
      <div style={{ width: "50%" }}>
        <Grid container spacing={1}>
          <Grid item xs={2} alignContent={"center"}>
            <div>
              {" "}
              <center>Unidad</center>
            </div>
            <div className={classes.propertyClass}>
              {propertyOwnerInfo.name}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>{propertyOwnerInfo.ownerName}</div>
            <div>{propertyOwnerInfo.ownerEmail}</div>
            <div>{propertyOwnerInfo.ownerPhonenumber}</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

HeaderInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderInfo);
