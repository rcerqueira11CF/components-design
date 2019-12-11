import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import CustomCheckBox from "../commons/CustomCheckbox";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  toRight: {
    float: "right"
  },
  greenText: {
    color: "#00c85f !important",
    fontWeight: "bold"
  },
  elementMargin: {
    marginTop: "16px",
    marginBottom: "8px"
  },
  textStyle: {
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "0.66",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#6d6d6d"
  },
  paddingButton: {
    padding: "0"
  }
}));

function NewPaymentModal(props) {
  const classes = useStyles();
  const {
    folioNumber
  } = props
  const [state, setState] = React.useState({
    paymentType: "",
    name: "hai",
    checkedNextMonthBill: true,
    amountValue: ""
  });

  // const folioNumber = "5778";

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  //Handlers
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleCheckedChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.margin}>
      <h2> Registro de nuevo pago </h2>

      <div
        className={classes.textStyle}
        style={{ display: "inline-block", float: "right" }}
      >
        <div style={{ float: "left", marginRight: "6px" }}>
          {" "}
          Próximo folio a utilizar:
        </div>
        <div className={classes.greenText} style={{ float: "right" }}>
          {folioNumber}
        </div>
      </div>
      <FormControl fullWidth>
        <TextField
          //
          id="input-with-icon-textfield"
          type="search"
          margin="normal"
          variant="outlined"
          label="Unidad"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchRoundedIcon />
              </InputAdornment>
            )
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              fullWidth
              format="MM/dd/yyyy"
              inputVariant="outlined"
              margin="normal"
              id="date-picker-inline"
              label="Fecha"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
                className: classes.paddingButton
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          value={state.amountValue}
          id="input-with-icon-textfield"
          margin="normal"
          variant="outlined"
          label="Monto"
        />
      </FormControl>

      <FormControl
        fullWidth
        variant="outlined"
        className={classes.elementMargin}
      >
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Médio de pago
        </InputLabel>
        <Select
          native
          value={state.paymentType}
          onChange={handleChange("paymentType")}
          labelWidth={labelWidth}
          inputProps={{
            name: "paymentType",
            id: "outlined-paymentType-native-simple"
          }}
        >
          <option value="" />
          <option value={10}>Transferencia</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        className={classes.elementMargin}
        variant="outlined"
      >
        <TextField
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows="3"
          // defaultValue="Default Value"
          variant="outlined"
        />
      </FormControl>


      <FormControlLabel
        className={classes.elementMargin}
        control={
          <CustomCheckBox
            checked={state.checkedNextMonthBill}
            onChange={handleCheckedChange("checkedNextMonthBill")}
            value="checkedNextMonthBill"
          />
        }
        label="Mostrar en boleta de [próximo mes]"
      />

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value=""
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
            labelWidth={70}
          />{" "}
        </FormControl> */}
    </div>
  );
}


export default NewPaymentModal;