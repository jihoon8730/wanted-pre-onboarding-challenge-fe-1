import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const goToLogin = useNavigate();

  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const handleId = () => {
    if ((idInput.includes('@') && idInput.includes('.')) && (passwordInput.length > 8)) {
      axios({
        url: 'http://localhost:8080/users/create',
        method: 'post',
        data: {
          email: idInput,
          password: passwordInput
        }
      })
      .then(function a(response) {
        localStorage.setItem('access_token', response.data.token)
        goToLogin('/auth/login');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  
  return (
    <div className='Signup'>
      <h4 className='title'>회원가입</h4>
      <div className='signup-input'>
        <div className='signup-id'>
          <h4 className='id-title'>이메일</h4>
          <input type="text" onChange={(event) => {
            setIdInput(event.target.value);
          }}/>
        </div>
        <div className='signup-password'>
          <h4 className='password-title'>비밀번호</h4>
          <input type="text" onChange={(event) => {
            setPasswordInput(event.target.value);
          }}/>
        </div>
        <button className='siginup-btn' onClick={handleId}>제출</button>
      </div>
    </div>
  );
}

export default Signup;