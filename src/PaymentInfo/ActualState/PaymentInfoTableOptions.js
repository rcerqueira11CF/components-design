import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Fade from "@material-ui/core/Fade";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import Fab from "@material-ui/core/Fab";

const styles = {
  root: {
    color: "#4281db",
    border: "solid 1px #4281db",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { classes, idCommunity, idPayment, month, year } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVerAsignacionPago = () => {
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
    handleClose();
  };

  const handlePrintPaymentVoucher = () => {
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
    handleClose();
  };

  const handleNotify = () => {
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
    handleClose();
  };

  const handleEdit = () => {
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
    handleClose();
  };
  const handleDelete = () => {
    console.log("PaymentId:", idPayment);
    console.log("CommuntyId:", idCommunity);
    handleClose();
  };

  return (
    <span>
      <Fab
        size="small"
        aria-controls="fade-menu"
        aria-haspopup="true"
        className={classes.root}
        onClick={handleClick}
        idPayment={idPayment}
        month={month}
        year={year}
      >
        <MoreVertRoundedIcon fontSize="small" />
      </Fab>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleNotify}>Notificar</MenuItem>
        <MenuItem onClick={handlePrintPaymentVoucher}>
          Imprimir comprobante de pago
        </MenuItem>
        <MenuItem onClick={handleVerAsignacionPago}>
          Ver asignación dek pago
        </MenuItem>

        <MenuItem onClick={handleEdit}>Editar</MenuItem>
        <MenuItem onClick={handleDelete}>Eliminar</MenuItem>
      </Menu>
    </span>
  );
}

FadeMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FadeMenu);
