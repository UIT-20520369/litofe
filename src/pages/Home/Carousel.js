import * as React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import "./HomeThumbnail.css";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import ScrollCarousel from "scroll-carousel-react";
import { useNavigate } from "react-router-dom";
function Carousel({ rooms }) {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }} className="my-carousel">
      <ScrollCarousel
        autoplay
        autoplaySpeed={2}
        speed={7}
        onReady={() => console.log("I am ready")}
      >
        {rooms.map((item) => (
          <Stack key={item} sx={{alignItems:'center'}}>
            <video
              preload="metadata"
              width={'240px'}
              height={'180px'}
              src={item.movie.source}
              onClick={()=>{navigate("/streaming/"+item.id)}}
            ></video>
            <h3>{item.name}</h3>
          </Stack>
        ))}
      </ScrollCarousel>
    </div>
  );
}
export default Carousel;
