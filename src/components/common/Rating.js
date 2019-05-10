import React from 'react';
import Star from '@material-ui/icons/Star.js';
import StarOutline from '@material-ui/icons/StarBorderOutlined'
import { withStyles } from '@material-ui/core';

function Rating({ rating, classes }) {
    const stars = [];
    let max = 5;
    for(let i = 0; i < rating; i++) {
        stars.push(<Star key={`filled-${i}`} className={classes.starsSelected} />);
        max--;
    }
    for(let i = 0; i < max; i++) {
        stars.push(<StarOutline key={`unfilled-${i}`} />)
    }
    return stars;
}
export default withStyles({
    starsSelected: {
        color: '#FFD700'
    },
})(Rating);