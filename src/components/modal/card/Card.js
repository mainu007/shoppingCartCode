import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Grid, IconButton } from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header_style: {
    backgroundColor: "#eee",
  },
  image_style: {
    maxWidth: "40px",
  },
  name_style: {
    display: "flex",
  },
  item_style: {
    borderBottom: "1px solid #eee",
    padding: "5px 0",
  },
  footer_style: {
    padding: 16,
  },
  content_style: {
    padding: "16px 16px 0",
  },
});

export default function OutlinedCard({ cartProduct, handleClose }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        className={classes.header_style}
        avatar={<ShoppingCartIcon />}
        action={
          <IconButton onClick={handleClose}>
            <CancelPresentationIcon color="secondary" />
          </IconButton>
        }
        title="Shopping Cart"
        subheader={new Date().toDateString()}
      />
      <CardContent className={classes.content_style}>
        {cartProduct.map((val) => {
          const { image, model, price, id } = val;
          return (
            <Grid key={id} container className={classes.item_style}>
              <Grid item xs={3}>
                <img
                  className={classes.image_style}
                  src={`${process.env.PUBLIC_URL}/${image}`}
                  alt="img"
                />
              </Grid>
              <Grid item xs={6} className={classes.name_style}>
                <Grid container direction="row" alignItems="center">
                  <Typography color="textSecondary" variant="h6">
                    {model}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3} className={classes.name_style}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="flex-end"
                >
                  <Typography variant="h6">${price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
      <CardActions className={classes.footer_style}>
        <Button
          component={Link}
          to="/cart"
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleClose}
        >
          Go To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
