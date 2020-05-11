import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Consumer } from "../../context";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    padding: "15px 20px",
    marginTop: 100,
  },
  right_style: {
    textAlign: "right",
  },
  margin_style: {
    marginBottom: 10,
  },
  margin_style2: {
    marginBottom: 10,
    borderBottom: "1px solid #eee",
    paddingBottom: 15,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Consumer>
      {(value) => {
        const { totalItem, subtotal, total, totalTax } = value.calculate;
        return (
          <Card className={classes.root}>
            <CardContent>
              <Grid container className={classes.margin_style}>
                <Grid item xs={6}>
                  <Typography variant="h6">Total item:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.right_style}>
                    {totalItem}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.margin_style}>
                <Grid item xs={6}>
                  <Typography variant="h6">Subtotal:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.right_style}>
                    ${subtotal}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.margin_style2}>
                <Grid item xs={6}>
                  <Typography variant="h6">Total tax:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.right_style}>
                    ${totalTax}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.margin_style}>
                <Grid item xs={6}>
                  <Typography variant="h6">Total:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.right_style}>
                    ${total}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Checkout
              </Button>
              <Button
                onClick={value.clearCart}
                size="small"
                variant="contained"
                color="secondary"
              >
                clear cart
              </Button>
            </CardActions>
          </Card>
        );
      }}
    </Consumer>
  );
}
