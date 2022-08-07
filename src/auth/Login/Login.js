import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'

const Login = () => {
  const goToHome = useNavigate();
  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const handleId = () => {
    if ((idInput.includes('@') && idInput.includes('.')) && (passwordInput.length > 8)) {
      axios({
        url: 'http://localhost:8080/users/login',
        method: 'post',
        data: {
          email: idInput,
          password: passwordInput
        }
      })
      .then(function a(response) {
        localStorage.setItem('access_token', response.data.token)
        goToHome('/')
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  
  return (
    <div className='Login'>
    <h4 className='title'>로그인</h4>
    <div className='login-input'>
      <div className='login-id'>
        <h4 className='id-title'>이메일</h4>
        <input type="text" onChange={(event) => {
          setIdInput(event.target.value);
        }}/>
      </div>
      <div className='login-password'>
        <h4 className='password-title'>비밀번호</h4>
        <input type="text" onChange={(event) => {
          setPasswordInput(event.target.value);
        }}/>
      </div>
      <button className='login-btn' onClick={handleId}>제출</button>
    </div>
  </div>
  );
}

export default Login;