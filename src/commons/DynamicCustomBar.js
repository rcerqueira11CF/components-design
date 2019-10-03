import React from "react";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import CustomTabBox from "./CustomTabBox";
import Divider from "./DivDivider";

const styles = {
  root: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
};

const boxGenerator = boxInfo => {
  return (
    <CustomTabBox
      key={boxInfo.id}
      titleText={boxInfo.titleText}
      amountText={boxInfo.amountText}
      tooltip={boxInfo.tooltip}
      placement={boxInfo.placement}
    />
  );
};
const returnSize = arr => {
  return arr.length;
};
const setDivider = (index, size) => {
  if (size !== 1 && index !== size - 1) {
    return <Divider />;
  }
};

function DynamicCustomBar(props) {
  const { classes, boxInfos } = props;

  return (
    <Paper className={classes.root}>
      {boxInfos.map((boxInfo, index) => {
        return [boxGenerator(boxInfo), setDivider(index, returnSize(boxInfos))];
      })}
    </Paper>
  );
}

DynamicCustomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DynamicCustomBar);
