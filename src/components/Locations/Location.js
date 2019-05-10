import React from 'react';
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import FluidPaper from './FluidPaper.js';
import Rating from '../common/Rating.js';
import Badges from './Badges.js';

function Location({title, description, rating, badges}) {
    return(
        <FluidPaper>
            <Typography variant="h3">
                {title}
            </Typography>
            <Badges badges={badges} />
            <Typography variant="body1">{description}</Typography>
            <Rating rating={rating}/>
        </FluidPaper>
    )
}
const mapStateToProps = (state, { locationId }) => ({
    ...state.locations[locationId]
})
export default connect(mapStateToProps)(Location);