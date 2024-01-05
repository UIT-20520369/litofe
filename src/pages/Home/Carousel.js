import * as React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import "./HomeThumbnail.css";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import ScrollCarousel from "scroll-carousel-react";
const carousel1 = require("../../assests/carousel1.png");
function Carousel() {
  return (
    <div style={{ width: "100%" }} className="my-carousel">
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log("I am ready")}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div key={item}>
            <img
              src={carousel1}
              style={{ height: "180px", aspectRatio: 2 }}
            ></img>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}
export default Carousel;
