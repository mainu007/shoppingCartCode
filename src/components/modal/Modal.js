import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Consumer } from "../context";
import Card from "./card/Card";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function TransitionsModal({ openModal, modalOnClose, cartProduct }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    modalOnClose();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (openModal) {
      handleOpen();
    }
  });

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <Card cartProduct={cartProduct} handleClose={handleClose} />
        </Fade>
      </Modal>
    </div>
  );
}

export default () => {
  return (
    <Consumer>
      {(value) => (
        <TransitionsModal
          openModal={value.openModal}
          modalOnClose={value.modalOnClose}
          cartProduct={value.cartProduct}
        />
      )}
    </Consumer>
  );
};
