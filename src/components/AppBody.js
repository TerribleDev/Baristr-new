import React from 'react';
import { withStyles } from '@material-ui/core';

function AppBody ({ classes, children}) {
    return (
        <div className={classes.appBody}>
            {children}
        </div>
    )
}
export default withStyles({ backgroundColor: 'white'})(AppBody)