import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

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
