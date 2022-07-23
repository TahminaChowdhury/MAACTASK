import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
  
  const { loginWithEmailAndPassword } = useFirebase();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="row justify-content-center align-items-center ">
      <div className="col-12 text-center login-container">
        <h1 className="form-heading">Welcome Back!</h1>
        <p className="mt-2">Please login to your account</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center form-content"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Your Eamil"
            {...register('email')}
            className="mb-4 form-input"
          />

          <input
            type="text"
            name="password"
            id="password"
            placeholder="Pasword"
            {...register('password')}
            className="mb-4 form-input"
          />

          <div>
            <button className="simple-btn" onClick={loginWithEmailAndPassword}>
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-5 signup-div">
          <span>Don't have an account?</span>
          <span>
            <Link to="/registration"> Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
