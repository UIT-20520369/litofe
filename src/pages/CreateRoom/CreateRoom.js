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
import { styled } from "@mui/material/styles";
import { storageServices } from "../../services/supabase-services/storage-services";
import { movieServices } from "../../services/movie-services/movie-services";
const movie1 = require("../../assests/movie1.jpg");
function CreateRoom() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);
  const [file, setFile] = React.useState();
  const [movie, setMovie] = React.useState({
    name: "",
    source: "",
    description: "",
  });
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const addMovieQuery = movieServices.useAdd();
  const handleSubmit = () => {
    storageServices.uploadFile(file, "lito", "movies").then((data) => {
      if (data.length > 0) {
        setMovie({ ...movie, source: data });
      }
    });
    addMovieQuery.mutate(movie);
    setMovie({
      name: "",
      source: "",
      description: "",
    });
    setFile(null);
  };
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
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                value={movie.name}
                onChange={(e) => setMovie({ ...movie, name: e.target.value })}
              />
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
                value={movie.description}
                onChange={(e) =>
                  setMovie({ ...movie, description: e.target.value })
                }
              />
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Stack direction={"row"} spacing={4} sx={{ alignItems: "center" }}>
              <Button
                component="label"
                startIcon={<Cloud />}
                variant="contained"
              >
                Upload Video
                <VisuallyHiddenInput
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
              </Button>
              <Button
                startIcon={<Add />}
                variant="contained"
                onClick={() => {
                  setOpenSuccessDialog(true);
                }}
              >
                Choose Video
              </Button>
            </Stack>
            {file != null && (
              <video
                src={URL.createObjectURL(file)}
                style={{ height: "300px", aspectRatio: 2 }}
              ></video>
            )}
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
          <Button variant="contained" onClick={()=>{handleSubmit()}}> Start Streaming</Button>
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
