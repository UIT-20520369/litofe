import * as React from "react";
import { Box, LinearProgress, Stack, Slider } from "@mui/material";
import {
  PlayCircleFilledOutlined,
  ShuffleOnOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined,
  VolumeUpOutlined,
  VolumeDownOutlined,
} from "@mui/icons-material";

function Player() {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{ color: "#FFFFFF", bgcolor: "#141414", height: 120, width: "100%" }}
    >
      <LinearProgress variant="determinate" value={progress} />
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction="row"
        spacing={10}
      >
        {/* <ShuffleOnOutlined fontSize="medium" /> */}
        <SkipPreviousOutlined fontSize="medium" />
        <PlayCircleFilledOutlined fontSize="large" />
        <SkipNextOutlined fontSize="medium" />
        <Stack spacing={2} direction="row" sx={{ mb: 1,width:'10%' }} alignItems="center">
          <VolumeDownOutlined />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUpOutlined />
        </Stack>
      </Stack>
    </Box>
  );
}
export default Player;
