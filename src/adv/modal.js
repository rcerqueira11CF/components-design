import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import NewPaymentModal from "./NewPaymentModal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function getModalStyle() {
  const top = 5;

  return {
    position: "abosolute",
    top: `${top}%`,
    margin: "auto",
    overflow: "auto",
    // height: "100%",
    width: "80%",
    "max-width": 858,
    display: "block"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    // width: "80%",
    // "max-width": 858,
    backgroundColor: "#ffffff",
    //boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal() {
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
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
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
          <NewPaymentModal
            folioNumber="3737"
            bankAccount="Cuenta1"
            closeModalFunction={handleClose}
          />
          {/* <h2 id="simple-modal-title">Text in a modal</h2> */}
          {/* <p id="simple-modal-description"> */}
          {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
          {/* </p> */}
          {/* <SimpleModal />  */}
        </div>
        </Fade>
      </Modal>
    </div>
  );
}
