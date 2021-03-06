import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { PropTypes } from "prop-types";

export const ModalPopUp = ({
  title,
  visible = false,
  classes,
  onClose,
  children,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

ModalPopUp.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  classes: PropTypes.object,
};
