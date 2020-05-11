import React from "react";
import Card from "./card/Card";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import { Consumer } from "../context";

const useStyle = makeStyles({
  title: {
    marginTop: 50,
    fontWeight: 500,
    marginBottom: 40,
  },
  product_container: {
    marginBottom: 60,
  },
});

export default () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.product_container}>
        <Typography
          className={classes.title}
          variant="h2"
          mt={50}
          align="center"
        >
          Our Products
        </Typography>
        <Grid container>
          <Grid item lg={1} md={2} sm={1} xs={1}></Grid>
          <Grid item lg={10} md={8} sm={10} xs={10}>
            <Grid container spacing={4}>
              <Consumer>
                {({ products }) =>
                  products.map((value) => (
                    <Card key={value.id} product={value} />
                  ))
                }
              </Consumer>
            </Grid>
          </Grid>
          <Grid item lg={1} md={2} sm={1} xs={1}></Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
