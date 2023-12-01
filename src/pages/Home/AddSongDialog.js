import * as React from "react";
import {
  DialogTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { songServices } from "../../services/song-services/song-service";
import { playlistServices } from "../../services/playlist-services/playlist-services";
function AddSongDialog({playlistId}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddSong=async (song) =>{
    const result =await playlistServices.addSongToPlaylist(song,playlistId);
    console.log(result);
  }
  const [songs, setSongs] = React.useState(null);
  React.useEffect(() => {
    songServices.getAllSong().then((data) => {
      setSongs(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Song
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Pick a song</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <Select
                autoFocus
                label="maxWidth"
                onChange={(e)=>{
                    handleAddSong(e.target.value)
                }}
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                {songs?.length > 0 &&
                  songs.map((c) => {
                    return (
                      <MenuItem key={c.id} value={c}>
                        {c.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddSongDialog;
