import React from 'react';
import { withStyles } from '@material-ui/core';

function AppBody ({ classes, children}) {
    return (
        <div className={classes.appBody}>
            {children}
        </div>
    )
}
export default withStyles({ appBody : {
    minHeight: '93vh'
}})(AppBody)