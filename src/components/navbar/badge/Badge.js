import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 14,
    padding: "0 4px",
  },
}))(Badge);

const useStyle = makeStyles({
  align_right: {
    marginLeft: "auto",
  },
  color_style: {
    color: "#fff",
  },
});

export default function CustomizedBadges() {
  const classes = useStyle();
  return (
    <Consumer>
      {(value) => (
        <IconButton
          component={Link}
          to="/cart"
          aria-label="cart"
          className={classes.align_right}
        >
          <StyledBadge
            badgeContent={value.cartProduct.length}
            color="secondary"
          >
            <AddShoppingCartIcon className={classes.color_style} />
          </StyledBadge>
        </IconButton>
      )}
    </Consumer>
  );
}
