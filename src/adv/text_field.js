import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import IconButton from "@material-ui/core/IconButton";
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { KeyboardDatePicker } from "@material-ui/pickers";

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
    color: "#00c85f",
    fontWeight: "bold"
  },
  inputMargin: {
    marginTop: "16px",
    marginBottom: "8px"
  }
}));

export default function InputWithIcon() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    paymentType: "",
    name: "hai"
  });

  const folioNumber = "5778";

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div className={classes.margin}>
      <h2> Registro de nuevo pago </h2>

      <div style={{ display: "inline-block", float: "right" }}>
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
        <TextField
          //
          id="search-field"
          margin="normal"
          variant="outlined"
          label="Fecha"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayRoundedIcon />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          //
          id="input-with-icon-textfield"
          margin="normal"
          variant="outlined"
          label="Monto"
        />
      </FormControl>

      <FormControl fullWidth variant="outlined" className={classes.inputMargin}>
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

      <FormControl fullWidth className={classes.inputMargin} variant="outlined">
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
      </FormControl>

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
