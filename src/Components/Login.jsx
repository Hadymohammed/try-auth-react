import React, { useState } from 'react';
import { LoginAction } from '../ApiAccess/endpoints/AccountEndpointsHandler';
import usernameValidator from '../Validators/usernameValidator';
import passwordValidator from '../Validators/passwordValidator';
import STATUS_CODES from '../ApiAccess/StatusCodes';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const {setAuth} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: "/dashboard" } };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsernameError('');
    setPasswordError('');

    if(!usernameValidator(username))
      setUsernameError('Invalid username');
    if(!passwordValidator(password))
      setPasswordError('Invalid password');

    if(!usernameValidator(username) || !passwordValidator(password))
      return;

      let body = await LoginAction(username, password)
      if(body.statusCode === STATUS_CODES.OK){
        setAuth({ ...body.data,IsAuthenticated: true});
        localStorage.setItem('token', body.data.accessToken);
        navigate(from,{replace:true});
      }
      else if(body.statusCode === STATUS_CODES.UNAUTHORIZED){
        if(body.errors?.some((error) => error.code === 4001)){
          setUsernameError('Username not found');
        }
        if(body.errors?.some((error) => error.code === 4007)){
          setPasswordError('Wrong password');
        }
      }
      else{
        alert('An error occurred, please try again later.');
      }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username:</label>
          <input value={username} onChange={handleUsernameChange} required />
          <p style={{ color: 'red' }}>{usernameError}</p>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
          <p style={{ color: 'red' }}>{passwordError}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
