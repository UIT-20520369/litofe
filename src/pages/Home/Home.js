import * as React from "react";
import HomeThumnail from "./HomeThumnail";
import { Stack, Typography,Fab } from "@mui/material";
import Carousel from "./Carousel";
import { Add } from "@mui/icons-material";
const home1 = require("../../assests/home1.jpg");
function HomePage() {
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
        <img src={home1} style={{ height: "600px", aspectRatio: 1 }}></img>
        <h1>Put your live video to work</h1>
        <Typography>
          Reach everyone in real time, live streaming gives you a way to connect
          with everybody that connects to the internet.
        </Typography>
        <Typography></Typography>
      </Stack>
      <Carousel></Carousel>
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "64px",
        }}
      >
        <h1>Grow your audience, everywhere</h1>
        <Typography sx={{width:'40%',textAlign:'center'}}>
          Engage followers around the world, wherever they watch. Easily stream
          from any device across social media platforms or your own website.
          Throw stellar events and make your streaming business thrive, with
          live.
        </Typography>
        <Typography></Typography>
      </Stack>
      {/* <Stack sx={{marginLeft:'6%',marginRight:'6%'}} spacing={2}>
        <h3>Streaming</h3>
        <Carousel></Carousel>
      </Stack> */}
      <Fab color="primary" aria-label="add" sx={{position:'fixed',bottom:50,right:50}}>
        <Add />
      </Fab>
    </div>
  );
}
export default HomePage;
