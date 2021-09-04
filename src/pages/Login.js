import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { googleAuthProvider, facebookAuthProvider } from '../firebase';
import { fbSignInInitiate, googleSignInInitiate, loginInitiate } from '../redux/actions';
import "./Login.css"


const Login = () => {
  const [state, setState] = useState({
    email:"",
    password:"",
  });


  const {currentUser} =  useSelector((state) => state.user);

  const history = useHistory();

  useEffect(()=>{
    if(currentUser){
        history.push("/")
    }
  },[currentUser,history])

  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate()); 
  };
  const handleFBSignIn = () => {
    dispatch(fbSignInInitiate());
  };

  const handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state, [name]: value}) 
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({email: "", password:""})
  };

  const {email,password} = state;

  return (
    <div>
      <div id='logreg-forms'>
        <form className='form-signin text-center' onSubmit={handleSubmit} action=''>
          <h1 className='h3 mb-3 font-weight-normal'>Sign In</h1>
          <div className='social-login'>
            <button
              className='btn google-btn social-btn'
              type='button'
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className='fab fa-google-plus-g me-2'></i>
                Sign In with Google
              </span>
            </button>

            <button
              className='btn facebook-btn social-btn'
              type='button'
              onClick={handleFBSignIn}
            >
              <span >
                <i className='fab fa-facebook-f me-2'></i>
                Sign In with Facebook
              </span>
            </button>
          </div>
          <p className='text-center'>OR</p>
          <input
            type='email'
            id='inputEmail'
            className='form-control mb-2'
            placeholder='Email Address'
            name="email"
            onChange={handleChange}
            required
            value={email}
          />

             <input
            type='password'
            id='inputPassword'
            className='form-control mb-2'
            placeholder='Password'
            name="password"
            onChange={handleChange}
            required
            value={password}
          />
          <button type="submit" className="btn btn-secondary btn-block">
             <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">
            <button className="btn btn-primary btn-block" id="btn-signup">
                <i className="fas fa-user-plus me-2"></i>Sign up New Account 
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
