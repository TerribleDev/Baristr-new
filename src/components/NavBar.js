import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavDraw from './NavDrawer.js';
const styles = {
    root: {
      flexGrow: 1,
      // marginBottom: "1rem"
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: "-.8em",
      marginRight: "1em",
    },
  };
  
  function ButtonAppBar(props) {
    const [openDraw, setOpenDraw] = useState(false);
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => setOpenDraw(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button variant="contained" color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
        <NavDraw isOpen={openDraw} onClose={() => setOpenDraw(false)} />
      </div>
    );
  }
  
  export default withStyles(styles)(ButtonAppBar);