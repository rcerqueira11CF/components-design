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
import BlueCheckBox from "../../commons/BlueCheckBox";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import PrincipalBtn from "../../commons/PrincipalBtn";
import SecondaryBtn from "../../commons/SecondaryBtn";
import SmallBlueBtn from "../../commons/SmallBlueBtn";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight: 30
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
  spaces: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  paddingButton: {
    padding: "0"
  },
  paymentTypeMargin: {
    marginTop: "-17px"
  },
  dateMargin: {
    marginTop: "-4px"
  },
  textFieldSize: {
    width: "180px"
  },
  inputSize: {
    height: "20px ",
    width: "180px"
  }
  //textFiled
}));

function submitNewPaymentForm() {
  alert("Submiting form");
}

function PaymentModalContent(props) {
  const classes = useStyles();
  const { folioNumber, bankAccount, closeModalFunction } = props;
  const [state, setState] = React.useState({
    paymentType: "",
    name: "hai",
    checkedNextMonthBill: true,
    amountValue: ""
  });

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
      Registro de nuevo pago
      <div className={classes.spaces}>
        <FormControl>
          <TextField
            //
            id="input-with-icon-textfield"
            type="search"
            margin="normal"
            variant="outlined"
            label="Unidad"
            margin="dense"
            className={classes.textFieldSize}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchRoundedIcon />
                </InputAdornment>
              )
            }}
          />
        </FormControl>

        <FormControl size="small">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              container
              justify="space-around"
              className={classes.dateMargin}
            >
              <KeyboardDatePicker
                disableToolbar
                size="small"
                format="MM/dd/yyyy"
                inputVariant="outlined"
                margin="normal"
                id="date-picker-inline"
                label="Fecha"
                className={classes.textFieldSize}
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

        <FormControl size="small">
          <TextField
            value={state.amountValue}
            id="input-with-icon-textfield"
            margin="dense"
            variant="outlined"
            label="Monto"
            className={classes.textFieldSize}
          />
        </FormControl>

        <FormControl
          size="small"
          variant="outlined"
          className={clsx(classes.paymentTypeMargin, classes.inputSize)}
        >
          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
            Médio de pago
          </InputLabel>
          <Select
            native
            value={state.paymentType}
            onChange={handleChange("paymentType")}
            labelWidth={labelWidth}
            className={classes.textFieldSize}
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

        <FormControl size="small" variant="outlined">
          <TextField
            id="outlined-multiline-static"
            label="Comentarios"
            margin="dense"
            className={classes.textFieldSize}
            variant="outlined"
          />
        </FormControl>
        <SmallBlueBtn label="Guardar" handleClick={submitNewPaymentForm} />
      </div>
      <FormControl>
        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedNextMonthBill}
              onChange={handleCheckedChange("checkedNextMonthBill")}
              value="checkedNextMonthBill"
            />
          }
          label="Mostrar en boleta de [próximo mes]"
        />
      </FormControl>
    </div>
  );
}

export default PaymentModalContent;
