import React, { useState } from 'react';
import "./Login.css"
import { userServices } from "../../services/user-services/user-services";
import { Stack, Button, Typography, CircularProgress } from "@mui/material";
import { Google } from "@mui/icons-material";
const Signup = () => {
  // Sử dụng useState để theo dõi trạng thái của các trường nhập liệu
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const SignupService = userServices.useRegister();
  // Hàm xử lý khi người dùng thay đổi giá trị trường nhập liệu
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Hàm xử lý khi người dùng gửi form
  // Hàm xử lý khi người dùng gửi form
  const handleSignup = () => {
    // Ở đây bạn có thể thực hiện xác thực hoặc gọi API để kiểm tra đăng nhập
    SignupService.mutate({ username: username, password: password });
  };

  return (
    <Stack sx={{ alignItems: "center", justifyContent: "center", marginTop: "56px" }}>
      <div className='container'>
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
      <h2 style={{color:"#FE1E38", margin:"1em 0 2em 0"}}>Sign up</h2>
        <div className="input-group">
          <div style={{marginBottom:"0.5em"}}>
            <label>Tên đăng nhập:</label>
          </div>

          <input
            type="text"
            placeholder='Plese enter your Email or Phone Number'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            placeholder='Plese enter your Pasword'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required/>
        </div>
        <Button variant='contained' sx={{marginBottom:'50px'}} onClick={()=>{handleSignup()}}>Đăng ký</Button>
      </Stack>
    </div>
    </Stack>
  );
};

export default Signup;