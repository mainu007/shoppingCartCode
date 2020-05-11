import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Consumer } from "../context";
import Detail from "./details/Details";
import Calculate from "./calculate/Calculate";

const useStyle = makeStyles({
  style_h3: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: 60,
  },
  margin_bottom: {
    marginBottom: 60,
  },
});

export default () => {
  const classes = useStyle();
  return (
    <Consumer>
      {(value) => {
        if (!value.cartProduct.length) {
          return (
            <Typography variant="h3" className={classes.style_h3}>
              Your cart is currently empty.
            </Typography>
          );
        }

        return (
          <div className={classes.margin_bottom}>
            <Typography variant="h3" className={classes.style_h3}>
              Your cart
            </Typography>
            <Grid container direction="row">
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <Grid container spacing={4}>
                  {value.cartProduct.map((val) => {
                    return <Detail key={val.id} product={val} />;
                  })}
                  <Grid item xs={12} lg={3}>
                    <Calculate />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </div>
        );
      }}
    </Consumer>
  );
};
