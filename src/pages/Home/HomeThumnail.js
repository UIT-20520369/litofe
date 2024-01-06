import * as React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import "./HomeThumbnail.css";
import { useNavigate } from "react-router-dom";
function HomeThumnail() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <Stack id="home-thumbnail" sx={{bgcolor:'#E6E6E6',width: "100%",height:"500px", alignItems:'center', justifyContent:'center'}} spacing={2}>
        <h1>Live streaming solutions you can count on</h1>
        <Typography>We make it easy to livestream engaging virtual events, connect and share your </Typography>
        <Typography>moments with your friends and fans.</Typography>
        <Stack direction={'row'} spacing={2}>
            <Button variant="contained" onClick={()=>{navigate("/purchase")}}> See plans</Button>
            <Button variant="contained" onClick={()=>{ navigate("/create-room")}}>Start streaming</Button>
        </Stack>
    </Stack>
      {/* <Box id="home-thumbnail" sx={{ width: "100%", height: "600px" }}>
        <Stack
          sx={{
            width: "15%",
            position: "absolute",
            bottom: 0,
            alignItems: "center",
          }}
          spacing={2}
        >
          <h2>Sex Tối cổ</h2>
          <Button startIcon={<PlayCircleFilledOutlined />} variant="contained"> Start watching</Button>
        </Stack>
      </Box> */}
    </div>
  );
}
export default HomeThumnail;
