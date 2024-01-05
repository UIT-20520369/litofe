import React, { useState } from "react";
import { Stack, Button, Typography, CircularProgress } from "@mui/material";
import { Google } from "@mui/icons-material";
import "./Login.css";
import { userServices } from "../../services/user-services/user-services";
const Login = () => {
  // Sử dụng useState để theo dõi trạng thái của các trường nhập liệu
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginService = userServices.useLogin();
  // Hàm xử lý khi người dùng thay đổi giá trị trường nhập liệu
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Hàm xử lý khi người dùng gửi form
  const handleLogin = () => {
    // Ở đây bạn có thể thực hiện xác thực hoặc gọi API để kiểm tra đăng nhập
    loginService.mutate({ username: username, password: password });
  };

  return (
    <Stack
      sx={{ alignItems: "center", justifyContent: "center", marginTop: "56px" }}
    >
      <div className="container">
        <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
          <h2 style={{ color: "#FE1E38", margin: "1em 0 2em 0" }}>
            Login to CinéLink
          </h2>
          <div className="input-group">
            <div style={{ marginBottom: "0.5em" }}>
              <label>Tên đăng nhập:</label>
            </div>
            <input
              type="text"
              placeholder="Plese enter your Username"
              value={username}
              onChange={(e) => handleUsernameChange(e)}
              required
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              placeholder="Plese enter your Pasword"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              required
            />
          </div>

          <Button
            variant="contained"
            onClick={() => {
              handleLogin();
            }}
          >
            {loginService?.isSuccess == true ||
              (loginService?.isLoading == false && (
                <Typography>Đăng nhập</Typography>
              ))}
          </Button>
          <a
            href="../signupform/signup.js"
            className="signup-link"
            style={{ columnSpan: "2", marginTop: "12px" }}
          >
            <Typography>New member? Sign up?</Typography>
          </a>
        </Stack>
        <div className="separator">
          <hr className="line" />
          <span>or</span>
          <hr className="line" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Button variant="outlined" startIcon={<Google />}>
            Đăng nhập bằng Google
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default Login;
