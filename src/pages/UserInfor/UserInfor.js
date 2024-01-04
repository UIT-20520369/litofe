import React from 'react';
import "./UserInfor.css"

class UserInfo extends React.Component {
  render() {
    return (
      <div style={{display:"flex",width:"100%", alignItems:"center", justifyContent:"center"}}>
        <div className='containerUser'>
            <img src="user.jpg" alt="User Avatar" style={{borderRadius: '50%', width: '150px', height: '150px', backgroundColor:"black", marginTop:"30px"}}/>
            <h1 style={{fontSize: '2em'}}>Hello, Admin</h1>
            <form className='formUser'>
            <div className="input-group">
                <label>Họ và tên:</label>
                <input type="text" name="name"/>
            </div>
            <div className="input-group">
                <label>Email</label>
                <input type="email" name="email"/>
            </div>
            <div className="input-group">
                <label>
                    Mô tả:
                </label>
                <textarea name="description" style={{minWidth:"400px", minHeight:"100px"}}></textarea>
            </div>
            <div style={{marginBottom:"20px"}}>
                <input type="submit" value="Cập nhật thông tin" className='btn-user'/>
                <input type="button" value="Đổi mật khẩu" className='btn-user'/>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

export default UserInfo;
