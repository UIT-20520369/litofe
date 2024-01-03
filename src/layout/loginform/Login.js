import React, { useState } from 'react';
import "./Login.css"

const Login = () => {
  // Sử dụng useState để theo dõi trạng thái của các trường nhập liệu
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý khi người dùng thay đổi giá trị trường nhập liệu
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Hàm xử lý khi người dùng gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây bạn có thể thực hiện xác thực hoặc gọi API để kiểm tra đăng nhập
    console.log('Đăng nhập với:', username, password);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="login-form">
        <h2 style={{color:"#FE1E38", margin:"1em 0 2em 0"}}>Login to CinéLink</h2>
        <div className="input-group">
          <div style={{marginBottom:"0.5em"}}>
            <label>Tên đăng nhập:</label>
            <a href='../signupform/signup.js' className='signup-link' style={{columnSpan:"2"}}>New member? Sign up?</a>
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
            required
          />
          <a href='../signupform/signup.js' className='signup-link' style={{marginTop:"0.5em"}}>Forgot your password?</a>
        </div>
        <button type="submit" className="btn-login">Đăng nhập</button>
      </form>
      <div className="separator">
        <hr className="line"/>
        <span >or</span>
        <hr className="line"/>
      </div>
      <div style={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
        <button type="submit" className="btn-login" style={{marginBottom:"30px"}}>
          <img src='src/image/icon24px/google.png' alt='icon'/>
          Đăng nhập bằng Google
        </button>
      </div>
    </div>
  );
};

export default Login;
