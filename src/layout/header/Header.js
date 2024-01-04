import * as React from "react";
import { Box, Avatar, Stack, Typography,Button } from "@mui/material";
import { userServices } from "../../services/user-services/user-services";
import { useLocation, useParams } from "react-router-dom";
const logo = require("../../assests/logo.png");
function Header() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );
  let { userId } = useParams();
  React.useEffect(() => {
    if (userId != null) {
      userServices.getUserById(userId).then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      });
    }
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'start',
          justifyContent:'center',
          color: "#FFFFFF",
          bgcolor: "#1C0F1E",
          height: 120,
        }}
      >
        <Stack direction={'row'} spacing={12} sx={{ alignItems: "center",marginLeft:'3%' }}>
          <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
            <img src={logo} style={{ height: "75px", width: "90px" }}></img>
            <div>
              <h1>CinesLink</h1>
            </div>
          </Stack>
          <Typography>Start streaming</Typography>
          <Typography>Watching</Typography>
          {user != null && user?.name && (
            <Avatar
              sx={{ bgcolor: "#F63D64", position: "absolute", right: 20 }}
            >
              {user.name}
            </Avatar>
          )}
          {
            user == null &&(
              <Button variant="outlined"> Sign in </Button>
            )
          }
        </Stack>
      </Box>
    </div>
  );
}

export default Header;
