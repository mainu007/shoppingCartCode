import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import { Consumer } from "../../context";

const useStyles = makeStyles((theme) => ({
  image_style: {
    maxWidth: "50px",
  },
  text_right: {
    textAlign: "right",
    paddingRight: 10,
  },
  padding_none: {
    padding: 0,
  },
  text_center: {
    textAlign: "center",
  },
}));

export default function CenteredGrid({
  product: { id, image, model, price, total, count },
}) {
  const classes = useStyles();

  return (
    <Consumer>
      {(value) => {
        const { deleteProduct, increment, decrement } = value;
        return (
          <Grid item lg={9} md={12} sm={12}>
            <Grid container alignItems="center">
              <Grid item xs={2} spacing={2}>
                <img
                  className={classes.image_style}
                  src={`${process.env.PUBLIC_URL}/${image}`}
                  alt="image"
                />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">{model}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography className={classes.text_right}>
                      {count}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container direction="column">
                      <Grid item>
                        <IconButton
                          onClick={() => increment(id)}
                          className={classes.padding_none}
                        >
                          <AddCircleIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={() => decrement(id)}
                          className={classes.padding_none}
                          disabled={count === 1 ? true : false}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} className={classes.text_center}>
                <IconButton
                  onClick={() => deleteProduct(id)}
                  className={classes.padding_none}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" className={classes.text_right}>
                  Unit: {price}$
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" className={classes.text_right}>
                  Total: {total}$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </Consumer>
  );
}
