import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Link } from "react-router-dom";
import Badge from "./badge/Badge";

const useStyles = makeStyles({
  padding_x: {
    padding: "0 50px",
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.padding_x}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <AcUnitIcon />
          </IconButton>
          <Button color="inherit" component={Link} to="/">
            Products
          </Button>
          <Badge />
        </Toolbar>
      </AppBar>
    </div>
  );
}
