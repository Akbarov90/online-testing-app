import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerInitiate } from '../redux/actions';
import { useDispatch, useSelector   } from 'react-redux';
import './Register.css';

const Register = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { email, password, passwordConfirm, displayName } = state;

  const {currentUser} =  useSelector((state) => state.user);

  const history = useHistory();

  useEffect(()=>{
    if(currentUser){
        history.push("/")
    }
  },[currentUser,history])

  const dispatch = useDispatch();

  const handleChange = (e) => {
        let {name,value} = e.target;
        setState({...state, [name]: value}) 
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== passwordConfirm){
          return;
      }
      dispatch(registerInitiate(email, password, displayName));
      setState({email:"", displayName:"", password:"", passwordConfirm:""})
  };

  

  return (
    <div>
      <div id='register-form'>
        <form
          className='form-signin text-center'
          onSubmit={handleSubmit}
          action=''
        >
          <h1 className='h3 mb-3 font-weight-normal'>Sign Up</h1>

          
          <input
            type='text'
            id='displayName'
            className='form-control mb-2'
            placeholder='Full Name'
            name='displayName'
            onChange={handleChange}
            required
            value={displayName}
          />

          <input
            type='email'
            id='user-email'
            className='form-control mb-2'
            placeholder='Email Address'
            name='email'
            onChange={handleChange}
            required
            value={email}
          />

          <input
            type='password'
            id='inputPassword'
            className='form-control mb-2'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            required
            value={password}
          />
          <input
            type='password'
            id='inputRePassword'
            className='form-control mb-2'
            placeholder='Repeat Password'
            name='passwordConfirm'
            onChange={handleChange}
            required
            value={passwordConfirm}
          />


          <button type='submit' className='btn btn-secondary btn-block'>
            <i className='fas fa-user-plus me-2'></i> Sign Up
          </button>

          <Link to="/login" className="register-link font-weight-bold">
                <i className="fas fa-angle-left me-2"></i>Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
