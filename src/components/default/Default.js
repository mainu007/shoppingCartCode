import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  text_center: {
    textAlign: "center",
  },
  margin_top: {
    textAlign: "center",
    marginTop: 80,
    fontWeight: 700,
  },
});

export default function () {
  const classes = useStyle();

  return (
    <div>
      <Typography className={classes.margin_top} variant="h2">
        404
      </Typography>
      <Typography className={classes.text_center} variant="h3">
        page not found.
      </Typography>
    </div>
  );
}
