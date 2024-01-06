import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Stack,
  Typography,
  Avatar,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import * as signalR from "@microsoft/signalr";
import { playlistServices } from "../../services/playlist-services/playlist-services";
import { roomServices } from "../../services/room-services/room-services";
import { useParams } from "react-router-dom";
const VideoStreamingComponent = () => {
  const [visibilityState, setVisibilityState] = useState("visible");
  const { roomId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const room = roomServices.useGetRoomById(roomId);
  const connection = useRef(null);
  const handleTimeUpdate = () => {
    const videoPlayer = document.getElementById("myVideo");
    const currentTime = videoPlayer.currentTime;

    // Update the current video time on the server
    connection.current
      .invoke("UpdateVideoTime", parseInt(roomId), currentTime)
      .catch((error) => {
        console.error(`Error updating video time: ${error}`);
      });
  };

  useEffect(() => {
    connection.current = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44374/playlistHub")
      .build();

    connection.current
      .start()
      .then(() => {
        connection.current
          .invoke("GetCurrentVideoTime", parseInt(roomId))
          .then((videoTime) => {})
          .catch((error) => {
            console.error(`Error getting current video time: ${error}`);
          });
        console.log("Connected to SignalR Hub");
      })
      .catch((error) => {
        console.error(`Error connecting to SignalR Hub: ${error}`);
      });

    connection.current.on("SyncVideoTime/" + roomId, (videoTime) => {
      document.getElementById("myVideo").currentTime = videoTime;
    });
    connection.current.on("Pause/" + roomId, () => {
      console.log("Pause" + roomId);
      document.getElementById("myVideo").pause();
    });
    connection.current.on("Play/" + roomId, () => {
      document.getElementById("myVideo").play();
    });
    return () => {
      connection.current.stop();
    };
  }, []);
  useEffect(() => {
    if (visibilityState != document.visibilityState) {
      setVisibilityState(document.visibilityState);
    }
    if (document.visibilityState == "visible") {
      connection.current
        .invoke("GetCurrentVideoTime", parseInt(roomId))
        .then((videoTime) => {})
        .catch((error) => {
          console.error(`Error getting current video time: ${error}`);
        });
    }
  });
  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "start",
        marginTop: "36px",
        marginLeft: "5%",
        marginRight: "5%",
      }}
      spacing={4}
    >
      {room?.isLoading && <CircularProgress />}
      {room?.data && room?.isSuccess && (
        <>
          <video
            id="myVideo"
            width="90%"
            height="600"
            src={room.data.movie.source}
            autoPlay
            autoFocus
            muted
            controls={room.data.user.id != user.id ? false : true}
            onTimeUpdate={() => {
              if (room.data.user.id == user.id) {
                console.log("Tao la chu");
                handleTimeUpdate();
              }
            }}
            onClick={() => {
              if (room.data.user.id != user.id) {
                if (document.getElementById("myVideo").muted == true) {
                  document.getElementById("myVideo").muted = false;
                  document.getElementById("myVideo").play();
                }
              }
            }}
            onPause={() => {
              if (room.data.user.id == user.id) {
                connection.current
                  .invoke("Pause", parseInt(roomId))
                  .then((videoTime) => {})
                  .catch((error) => {
                    console.error(`Error getting current video time: ${error}`);
                  });
              }
            }}
            onPlay={() => {
              if (room.data.user.id == user.id) {
                connection.current
                  .invoke("Play", parseInt(roomId))
                  .then((videoTime) => {})
                  .catch((error) => {
                    console.error(`Error getting current video time: ${error}`);
                  });
              }
            }}
          ></video>
          <h1>{room.data.movie.name}</h1>
          <Stack
            direction={"row"}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ alignItems: "center" }}
          >
            <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={1}>
              <Avatar>{room.data.user.username[0]}</Avatar>
              <Typography>{room.data.user.username}</Typography>
            </Stack>
            <Typography>684.1 k Views</Typography>
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
              width: "80%",
              padding: "5px",
              border: 1,
              borderRadius: "4px",
            }}
          >
            <Typography>{room.data.movie.description}</Typography>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default VideoStreamingComponent;
