import React from 'react';
import Badge from './Badge.js';
import { withStyles } from '@material-ui/core';
function Badges({ badges, classes}) {
    if(!badges) {
        return null;
    }
    let currentBadges = badges.map(i => <Badge key={i.imgSrc} name={i.name} imgSrc={i.imgSrc} />);
    return (
        <div className={classes.badges}>
            {currentBadges}
        </div>
    )
}
export default withStyles({
    badges: {
        marginTop: "1rem",
        marginBottom: "1rem"
    }
})(Badges); 