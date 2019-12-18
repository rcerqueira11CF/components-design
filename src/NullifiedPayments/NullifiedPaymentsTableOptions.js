import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import SmallSecondaryCircleTableBtn from "../commons/SmallSecondaryCircleTableBtn"
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';

const styles = {
  root: {
    color: "#0ecb68",
    border: "solid 1px #0ecb68",
    backgroundColor: "#ffffff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "eaeaea"
    },
    "&:disabled": {
      backgroundColor: "#ffffff",
      color: "#0ecb68",
      opacity: 0.6
    },
    "&:active, &:focus": {
      boxShadow: "none"
    },
    "&.MuiFab-sizeSmall": {
      height: 35,
      width: 36
    }
  }
};

function FadeMenu(props) {
  const { classes, idCommunity, idPayment, month, year } = props;


  const handlePrint = () => {
    alert("Print ")
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
  };

  return (
    <span>
      <SmallSecondaryCircleTableBtn iconBtn={<PrintRoundedIcon />} onClick={handlePrint}/>
    </span>
  );
}

FadeMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FadeMenu);
