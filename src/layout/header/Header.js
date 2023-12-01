import * as React from "react";
import { Box, Avatar } from "@mui/material";
import { userServices } from "../../services/user-services/user-services";
import { useLocation, useParams } from "react-router-dom";
function Header() {
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("user")));
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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          bgcolor: "#141414",
          height: 120,
        }}
      >
        <div>
          <h1>LITO</h1>
        </div>
        {user != null && user?.name && (
          <Avatar sx={{ bgcolor: "#F63D64", position: "absolute", right: 20 }}>
            {user.name}
          </Avatar>
        )}
      </Box>
    </div>
  );
}

export default Header;
