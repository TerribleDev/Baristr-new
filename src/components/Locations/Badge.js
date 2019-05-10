import React from 'react';
import { withStyles } from "@material-ui/core";

function Badge({ classes, imgSrc, name }) {
    return (<img src={imgSrc} alt={name} className={classes.badge} />)
}

export default withStyles({badge: {
    width: "4.5rem",
    borderRadius: "50%"
}})(Badge);