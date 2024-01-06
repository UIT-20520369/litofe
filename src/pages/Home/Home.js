import * as React from "react";
import HomeThumnail from "./HomeThumnail";
import { Stack, Typography, Fab } from "@mui/material";
import Carousel from "./Carousel";
import { Add } from "@mui/icons-material";
import { roomServices } from "../../services/room-services/room-services";
import { useNavigate } from "react-router-dom";
const home1 = require("../../assests/home1.png");
function HomePage() {
  const rooms = roomServices.useGetAvailableRooms();
  const navigate =useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <HomeThumnail />
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "64px",
        }}
      >
        <img src={home1} style={{ height: "400px", aspectRatio: 2 }}></img>
        <h1>Put your live video to work</h1>
        <Typography>
          Reach everyone in real time, live streaming gives you a way to connect
          with everybody that connects to the internet.
        </Typography>
        <Typography></Typography>
      </Stack>
      <Stack sx={{ marginLeft: "6%", marginRight: "6%" }} spacing={2}>
        <h3>Streaming</h3>
        {rooms?.isSuccess && <Carousel rooms={rooms.data}></Carousel>}
      </Stack>
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "64px",
        }}
      >
        <h1>Grow your audience, everywhere</h1>
        <Typography sx={{ width: "40%", textAlign: "center" }}>
          Engage followers around the world, wherever they watch. Easily stream
          from any device across social media platforms or your own website.
          Throw stellar events and make your streaming business thrive, with
          live.
        </Typography>
        <Typography></Typography>
      </Stack>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 50, right: 50 }}
        onClick={()=>{navigate("/create-room")}}
      >
        <Add />
      </Fab>
    </div>
  );
}
export default HomePage;
