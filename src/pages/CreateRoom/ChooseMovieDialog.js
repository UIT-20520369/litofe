import * as React from "react";
import {
  Stack,
  Typography,
  Fab,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField,
} from "@mui/material";
const carousel1 = require("../../assests/carousel1.png");
function ChooseMovieDialog({ openDialog, closeDialog }) {
  const handleClose = () => {
    closeDialog(false);
  };
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ overflowY: "scroll" }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop:'16px'
        }}
      >
        <Stack spacing={2}>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
          <Stack spacing={1}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
            <Typography>Name</Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default ChooseMovieDialog;
