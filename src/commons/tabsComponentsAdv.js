import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import clsx from 'clsx';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CustomTable from "./table";
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box mt={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "inherit"
  },
  upperIndicator: {
    top: 0,
    backgroundColor: "#00c85f"
  },
  tabStyle:{
    height: '12',
  },
  tabBar: {
    backgroundColor: '#eaeaea',
    height: '12',
    minHeight: '12',
    //borderBottom: '0.1em solid #6d6d6d',
    //'&:focus-within': {
    //borderBottom: 'none'
    //}
  },
  centerTab: {
    borderBottom: '0.1em solid #6d6d6d',
    transitionProperty: 'borderBottom',
    transitionDuration: '8s',
    '&:focus': {
      borderRight: '0.1em solid #6d6d6d',
      borderLeft: '0.1em solid #6d6d6d',
      borderBottom: 'none',
    }

  },
  firstTab: {
    borderBottom: '0.1em solid #6d6d6d',
    '&:focus': {
     borderRight: '0.1em solid #6d6d6d',
      borderBottom: '0'
    },
    '&:selected': {
     borderRight: '0.1em solid #6d6d6d',
     borderBottom: '0'
    }

  },
  active_tab: {
    color: "blue"
  }
};

function SimpleTabs(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ indicator: classes.upperIndicator}}
          className={classes.tabBar}

        >
          <Tab label="Recaudacion" className={classes.firstTab} {...a11yProps(0)} />
          <Tab label="hitorial de pagoskkkkkkkii" className={clsx(classes.centerTab, classes.tabStyle)} {...a11yProps(1)} />
          <Tab
            label="Item Three"
            className={clsx(classes.centerTab, classes.tabStyle)}
            {...a11yProps(2)}
          />
        </Tabs>

      <TabPanel value={value} index={0}>
        <CustomTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
