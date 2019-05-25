import React, { Fragment } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { Link } from "@reach/router";
import Rating from '../common/Rating.js';
function RenderCard({ classes, title, description, rating, id }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography component="p" className={classes.cardDesc}>
          {description}
        </Typography>
        <Rating rating={rating} />
      </CardContent>
      <CardActions>
        <Link to={`/locations/${id}`}>
            <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

function RenderAllCards({ cards, classes }) {
  const renderedCards = cards.map(([id, i]) => (
    <RenderCard classes={classes} key={id} id={id} {...i} />
  ));
  return <div className={classes.cardContainer}>{renderedCards}</div>;
}
const RenderAllCardsWithStyle = withStyles({
  cardContainer: {
    display: "flex",
    flexWrap: 'wrap',
    padding: "1rem",
    height: '100%'
  },
  card: { 
      width: "15rem",
      margin: '2%',
    },
    cardDesc: {
        height: "5rem",
        textOverflow: "ellipsis",
        overflow: "auto",
        marginBottom: '1.5em'
    }

})(RenderAllCards);
const mapStateToProps = state => ({
  cards: Object.entries(state.locations)
});
export default connect(mapStateToProps)(RenderAllCardsWithStyle);
