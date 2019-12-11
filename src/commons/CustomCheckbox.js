import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { green } from "@material-ui/core/colors";

const CustomCheckBox = withStyles({
  root: {
    color: "#00c85f",
    "&$checked": {
      color: "#00c85f"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default CustomCheckBox;
