import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core/";
import { Consumer } from "../context";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 80,
  },
  title_h4: {
    paddingBottom: 10,
    marginBottom: 15,
    borderBottom: "1px solid #ddd",
    fontWeight: 500,
  },
  button_style: {
    fontSize: 20,
    lineHeight: "20px",
  },
  description_text: {
    fontSize: "1.25rem",
    color: "#757575",
  },
  text_container: {
    margin: "15px 0",
  },
  text_container_end: {
    borderBottom: "1px solid #ddd",
    margin: "15px 0",
    paddingBottom: 10,
  },
  button_margin: {
    marginBottom: 60,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <Consumer>
      {(value) => {
        const {
          id,
          image,
          model,
          price,
          description,
          memory,
          display,
          inCart,
        } = value.detailProduct;
        return (
          <Grid container>
            <Grid item xs={1} md={2}></Grid>
            <Grid item xs={10} md={8}>
              <Grid container className={classes.container}>
                <Grid item md={6}>
                  <img
                    src={`${process.env.PUBLIC_URL}/${image}`}
                    alt="product"
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.title_h4} variant="h4">
                    Product Title
                  </Typography>
                  <Button
                    className={classes.button_style}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    {price}$
                  </Button>
                  <Grid container className={classes.text_container}>
                    <Grid item xs={4}>
                      <Typography variant="h6">Model</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        className={classes.description_text}
                        text="secondary"
                        variant="subtitle1"
                      >
                        {model}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.text_container}>
                    <Grid item xs={4}>
                      <Typography variant="h6">Description</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        className={classes.description_text}
                        text="secondary"
                        variant="subtitle1"
                      >
                        {description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.text_container}>
                    <Grid item xs={4}>
                      <Typography variant="h6">Memory</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        className={classes.description_text}
                        text="secondary"
                        variant="subtitle1"
                      >
                        {memory}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.text_container_end}>
                    <Grid item xs={4}>
                      <Typography variant="h6">Display</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        className={classes.description_text}
                        text="secondary"
                        variant="subtitle1"
                      >
                        {display}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Consumer>
                    {({ addToCart }) => (
                      <Button
                        className={classes.button_margin}
                        onClick={() => addToCart(id)}
                        variant="contained"
                        color="secondary"
                        disabled={inCart ? true : false}
                      >
                        {inCart ? "In Cart" : "Add to cart"}
                      </Button>
                    )}
                  </Consumer>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} md={2}></Grid>
          </Grid>
        );
      }}
    </Consumer>
  );
}
