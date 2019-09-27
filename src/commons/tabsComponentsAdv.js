import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
      <Box p={1}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'inherit',

  },
  upperIndicator:{
    top: 0,
    backgroundColor: '#00c85f',
  },
  default_tab:{
    color: 'gray',
    backgroundColor: 'black',
    fontWeight: 400,
  },
  active_tab:{
    color: 'blue',
  }
};

function SimpleTabs(props) {
  const {classes} = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

        <Tabs value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        classes={{ indicator: classes.upperIndicator }}
        fullWidth='true'
        >
          <Tab label="Item One" style={{color: 'gray', backgroundColor: '#6d6d6d', fontWeight: 400,}} {...a11yProps(0)} />
          <Tab label="Item Two" classes={classes.tabStyle} {...a11yProps(1)} />
          <Tab label="Item Three" classes={classes.tabStyle} {...a11yProps(2)} />
        </Tabs>

      <TabPanel value={value} index={0}>
        Item One
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);