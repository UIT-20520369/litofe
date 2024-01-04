import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Button, Stack, Typography, Avatar, Box, Divider } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as signalR from "@microsoft/signalr";
import { playlistServices } from "../../services/playlist-services/playlist-services";
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
const VideoStreamingComponent = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const connection = useRef(null);
  useEffect(() => {
    connection.current = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44374/playlistHub")
      .build();

    connection.current
      .start()
      .then(() => {
        connection.current
          .invoke("GetCurrentVideoTime")
          .then((videoTime) => {})
          .catch((error) => {
            console.error(`Error getting current video time: ${error}`);
          });
        console.log("Connected to SignalR Hub");
      })
      .catch((error) => {
        console.error(`Error connecting to SignalR Hub: ${error}`);
      });
    connection.current.on("SyncVideoTime", (videoTime) => {
      document.getElementById("myVideo").currentTime = videoTime;
    });
    return () => {
      connection.current.stop();
    };
  }, []);
  useEffect(() => {
    const videoPlayer = document.getElementById("myVideo");

    const handleTimeUpdate = () => {
      const currentTime = videoPlayer.currentTime;

      // Update the current video time on the server
      connection.current
        .invoke("UpdateVideoTime", currentTime)
        .catch((error) => {
          console.error(`Error updating video time: ${error}`);
        });
    };

    videoPlayer.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoPlayer.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "start",
        marginTop: "36px",
        marginLeft:'5%',
        marginRight:'5%',
      }}
      spacing={4}
    >
      <video
        id="myVideo"
        width="90%"
        height="600"
        controls
        src="https://localhost:44374/api/Playlist/Download"
        autoPlay
        autoFocus
        muted
      ></video>
      <h1>Song: Yeu lam chi - speed up</h1>
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{alignItems:'center'}}
      >
        <Stack direction={"row"} sx={{alignItems:'center'}} spacing={1}>
          <Avatar>An</Avatar>
          <Typography>An Bui</Typography>
        </Stack>
        <Typography>684.1 k Views</Typography>
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D9D9D9",
          width: "80%",
          padding:'5px',
          border:1,
          borderRadius:'4px'
        }}
      >
        <Typography>
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled,...
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VideoStreamingComponent;
