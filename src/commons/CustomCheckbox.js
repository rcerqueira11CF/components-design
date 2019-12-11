import Checkbox from "@material-ui/core/Checkbox";
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// const CheckboxStyle = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600]
//     }
//   },
//   checked: {}
// })(props => <Checkbox color="default" {...props} />);

const styles = {
  root: {
    color: "#EAEAEA",
    "&$checked": {
      color: "#00c85f"
    }
  }
};

function CustomCheckBox(props) {
  //const { classes } = props;
  return <Checkbox color="default" {...props} />;
}

CustomCheckBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomCheckBox);
