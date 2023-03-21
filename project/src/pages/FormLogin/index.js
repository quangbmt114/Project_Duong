import React, { useState,useEffect} from 'react';
import  {useNavigate}  from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import axios from 'axios';
import './FormLogin.css'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data,setData]=useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
useEffect(() => {
  fectBlog();
}, []);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const fectBlog = async()=>{
    const data1 = await axios.get(process.env.REACT_APP_API+"/account")
    setData(data1.data[0])
  
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(new Date().getTime() );
    // Check if the user entered the correct username and password
  if (username === data.username && password === data.password) {
    const expirationTime = new Date().getTime()+600000 ; // Token expires in 1 hour
    const token = sha256(`${username}${expirationTime}`).toString();
    // Store the token in local storage
    localStorage.setItem('token', token);
    const putData = await axios.post(process.env.REACT_APP_API+"/dataToken",{token:token,
    timetoken:expirationTime,account:username
  })
      console.log(putData);
    // Set the logged in state to true
    setIsLoggedIn(true);
    navigate("/managercards")
  } else {
    alert('Incorrect username or password.');
  }
 
  };

  if (isLoggedIn) {
    // return navigate('/')
    
  }

  return (
    <div className='login-form'>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
