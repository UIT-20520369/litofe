import * as React from "react";
import { Box, Avatar, Stack, Typography, Button } from "@mui/material";
import { userServices } from "../../services/user-services/user-services";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const logo = require("../../assests/logo.png");
function Header() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  React.useEffect(() => {
    try {
      const localData = JSON.parse(localStorage.getItem("user"));
      if (JSON.stringify(localData) != JSON.stringify(user)) {
        setUser(localData);
      }
    } catch {
      console.log("No User Data in Local Storage");
    }
  });
  return (
    <div style={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          color: "#FFFFFF",
          bgcolor: "#1C0F1E",
          height: 120,
        }}
      >
        <Stack
          direction={"row"}
          spacing={12}
          sx={{ alignItems: "center", marginLeft: "3%" }}
        >
          <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
            <img src={logo} style={{ height: "75px", width: "90px" }}></img>
            <div>
              <h1>CinesLink</h1>
            </div>
          </Stack>
          <Typography>Start streaming</Typography>
          <Typography>Watching</Typography>
          {user != null && user?.username && (
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ alignItems: "center", position: "absolute", right: 40 }}
            >
              <Typography>Hi, {user.username}</Typography>
              <Avatar sx={{ bgcolor: "#F63D64" }}>
                {String(user.username[0]).toUpperCase()}
              </Avatar>{" "}
              <Button
                variant="outlined"
                onClick={() => {
                  handleLogout();
                }}
              >
                {" "}
                Sign out{" "}
              </Button>
            </Stack>
          )}
          {user == null && (
            <Button
              variant="outlined"
              sx={{ position: "absolute", right: 40 }}
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              Sign in{" "}
            </Button>
          )}
        </Stack>
      </Box>
    </div>
  );
}

export default Header;
