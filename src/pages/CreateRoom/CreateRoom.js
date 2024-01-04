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
import { Add, Cloud } from "@mui/icons-material";
import ChooseMovieDialog from "./ChooseMovieDialog";
const movie1 = require("../../assests/movie1.jpg");
function CreateRoom() {
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "56px",
      }}
      direction={"row"}
    >
      <Box
        sx={{
          width: "90%",
          border: 1,
          borderRadius: "4px",
          boxShadow: "initial",
        }}
      >
        <h2 style={{ marginLeft: "2%" }}>Fill Your video information</h2>
        <Stack
          direction={"row"}
          spacing={4}
          sx={{ alignItems: "center", marginLeft: "3%" }}
        >
          <Stack spacing={3} sx={{ width: "45%" }}>
            <Stack spacing={2}>
              <h3>Room name</h3>
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </Stack>
            <Stack spacing={2}>
              <h3>Room description</h3>
              <TextField
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="filled"
              />
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Stack direction={"row"} spacing={4} sx={{ alignItems: "center" }}>
              <Button startIcon={<Cloud />} variant="contained">
                Upload Video
              </Button>
              <Button startIcon={<Add />} variant="contained" onClick={()=>{setOpenSuccessDialog(true)}}>
                Choose Video
              </Button>
            </Stack>
            <img src={movie1} style={{ height: "300px", aspectRatio: 2 }}></img>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            marginTop: "36px",
            marginLeft: "36%",
            marginBottom: "36px",
            marginRight: "36%",
          }}
          spacing={4}
        >
          <Button variant="contained"> Start Streaming</Button>
          <Button variant="outlined"> Cancel </Button>
        </Stack>
      </Box>
      <ChooseMovieDialog
        openDialog={openSuccessDialog}
        closeDialog={setOpenSuccessDialog}
      />
    </Stack>
  );
}

export default CreateRoom;
