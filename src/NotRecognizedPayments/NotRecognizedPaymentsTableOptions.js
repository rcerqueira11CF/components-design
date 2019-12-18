import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import SmallDangerCircleTableBtn from "../commons/SmallDangerCircleTableBtn"
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

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

function NotRecognizedPaymentsTableOptions(props) {
  const { classes, idCommunity, idPayment, month, year } = props;


  const handleDelete = () => {
    alert("Delete ")
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
  };

  return (
    <span>
      <SmallDangerCircleTableBtn iconBtn={<DeleteRoundedIcon />} onClick={handleDelete}/>
    </span>
  );
}

NotRecognizedPaymentsTableOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotRecognizedPaymentsTableOptions);
