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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { classes, idObject, month, year } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDescargarExcel = () => {
    console.log('month,year');
    handleClose()

    // month/year
  };

  const handleImportarExcel = () => {
    console.log(idObject);
    handleClose()
  };

  const handleConsolidadoComprobantesPago = () => {
    console.log(idObject);
    handleClose()
  };

  const handleDescargarPlanillaCobranzas = () => {
    console.log(idObject);
    handleClose()
  };

  const handleImprimiBoletasCortas = () => {
    console.log(idObject);
    handleClose()
  };

  const handleImprimiBoletasExtensas = () => {
    console.log(idObject);
    handleClose()
  };

  const handleDeshacerGastoComun = () => {
    console.log(idObject);
    handleClose()
  };


  return (
    <div>
      <Fab
        size="small"
        aria-controls="fade-menu"
        aria-haspopup="true"
        className={classes.root}
        onClick={handleClick}
        idObject={idObject}
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
        <MenuItem onClick={handleDescargarExcel}>Descargar excel </MenuItem>
        <MenuItem onClick={handleImportarExcel}>Importar excel</MenuItem>
        <MenuItem onClick={handleConsolidadoComprobantesPago}>Consolidado de comprobantes de pago</MenuItem>
        <MenuItem onClick={handleDescargarPlanillaCobranzas}>Descargar planilla de cobranzas</MenuItem>

        <MenuItem onClick={handleImprimiBoletasCortas}>Imprimir boletas cortas</MenuItem>

        <MenuItem onClick={handleImprimiBoletasExtensas}>Imprimir boletas extensas</MenuItem>

        <MenuItem onClick={handleDeshacerGastoComun}>Deshacer gasto común</MenuItem>
      </Menu>
    </div>
  );
}

FadeMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FadeMenu);
