import React, { useState, Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "@reach/router";

function RenderMenuItems({ onClose }) {
  return (
    <Fragment>
      <List>
        <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          <ListItemText primary={"Get Started"} />
        </ListItem>
      </List>
      <Divider />
    </Fragment>
  );
}

function NavDrawer({ isOpen, onClose }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <RenderMenuItems onClose={onClose} />
    </Drawer>
  );
}

export default NavDrawer;
