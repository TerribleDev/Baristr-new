import React from "react";
import { withStyles, Card } from "@material-ui/core";

function FluidPaper({ children, classes }) {
  return <Card className={classes.paper}>{children}</Card>;
}

export default withStyles({
  paper: {
    width: "100vw",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    padding: "1rem"
  }
})(FluidPaper);
