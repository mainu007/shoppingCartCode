import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
    backgroundSize: "contain",
    marginBottom: 30,
  },
  margin_left: {
    marginLeft: 8,
  },
  margin_bottom: {
    marginBottom: 10,
  },
  padding_some: {
    paddingTop: 50,
  },
});

export default function MediaCard({
  product: { id, image, model, price, description, inCart },
}) {
  const classes = useStyles();

  return (
    <Consumer>
      {(value) => {
        const { handleDetail, addToCart } = value;
        return (
          <Grid item lg={3} md={6} sm={6}>
            <Card className={classes.root}>
              <CardActionArea
                className={classes.padding_some}
                component={Link}
                to="/details"
                onClick={() => handleDetail(id)}
              >
                <CardMedia
                  className={classes.media}
                  image={`${process.env.PUBLIC_URL}/${image}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {model}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {description.slice(0, 130)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.margin_bottom}>
                <Typography className={classes.margin_left} variant="h6">
                  {price}$
                </Typography>
                <IconButton
                  onClick={() => addToCart(id)}
                  size="small"
                  color="primary"
                  disabled={inCart}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      }}
    </Consumer>
  );
}
