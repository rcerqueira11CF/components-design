import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import PaymentModalContent from "./PaymentModalContent";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PrincipalBtn from "../commons/PrincipalBtn";
import CloseIcon from "@material-ui/icons/Close";

function getModalStyle() {
  const top = 5;

  return {
    position: "absolute",
    top: `${top}%`,
    margin: "auto",
    overflow: "auto",
    width: "80%",
    "max-width": 751,
    display: "block"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: "#ffffff",
    padding: theme.spacing(2, 3, 4)
  }
}));

function PaymentModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PrincipalBtn label="Nuevo pago" handleClick={handleOpen} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <div
              onClick={handleClose}
              style={{ float: "right", cursor: "pointer" }}
            >
              <CloseIcon />
            </div>
            <PaymentModalContent
              folioNumber="3737"
              bankAccount="Cuenta1"
              closeModalFunction={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PaymentModal;
