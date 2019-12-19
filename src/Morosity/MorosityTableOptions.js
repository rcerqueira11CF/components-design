import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import SmallSecondaryCircleTableBtn from "../commons/SmallSecondaryCircleTableBtn"
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import SmallSecondaryBtn from "../commons/SmallSecondaryBtn";


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

function MorosityTableOptions(props) {
  const { classes, idCommunity, idPayment, month, year } = props;


  const handleEntrar = () => {
    alert("Entrar PaymentID: " + idPayment.toString() +" CommunityID: "+ idCommunity.toString())
  };

  const handleDownload = () => {
    alert("Download PaymentID: " + idPayment.toString() +" CommunityID: "+ idCommunity.toString())
  }

  return (

    <span>
      <span>
        <SmallSecondaryBtn
          label={"Entrar"}
          onClick={handleEntrar}
        />
      </span>
      <span>
      <SmallSecondaryBtn
          label={"Descargar"}
          onClick={handleDownload}
        />
      </span>
    </span>
  );
}

MorosityTableOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MorosityTableOptions);
