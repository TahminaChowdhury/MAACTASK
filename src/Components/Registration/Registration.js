import React from 'react';
import './Registration.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Registration = () => {
  const { error, signupWithEmailAndPassword } = useFirebase();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault()
    signupWithEmailAndPassword(data.name, data.email, data.password, data.passwordConfirm, data.employeeId, data.role, data.phoneNumber);
  };

  return (
    <div className="row justify-content-center align-items-center ">
      <div className="col-12 text-center signup-container">
        <h1 className="form-heading">Create Account</h1>
        <p className="mt-2">Fill in the details below to create an account</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center form-content"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            {...register('name')}
            className="mb-4 form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Eamil"
            {...register('email')}
            className="mb-4 form-input"
          />
          <input
            type="text"
            name="employeeId"
            placeholder="Your ID"
            {...register('employeeId')}
            className="mb-4 form-input"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Your Mobile Number"
            {...register('phoneNumber')}
            className="mb-4 form-input"
          />
          <input
            type="text"
            name="password"
            placeholder="Pasword"
            {...register('password')}
            className="mb-4 form-input"
          />
          <input
            type="text"
            name="passwordConfirm"
            placeholder="Confirm Pasword"
            {...register('passwordConfirm')}
            className="mb-4 form-input"
          />
          <select name="role" {...register('role')}>
            <option value="">Select your option</option>
            <option value="HUB">HUB</option>
          </select>
          <div className="checkbox-input d-flex justify-content-center text-start mt-5 ">
            <input
              type="checkbox"
              name="checkbox"
              style={{ width: '28px', height: '28px' }}
            />
            <span className="ms-2">
              {' '}
              I read and agree to the{' '}
              <span style={{ color: '#0052CC' }}>Terms & Conditions</span>
            </span>
          </div>
          <div className="mt-3">
            <p className="text-success">{error}</p>
          </div>
          <div>
            <button className="simple-btn" onClick={signupWithEmailAndPassword}>
              Create Account
            </button>
          </div>
        </form>
        <div className="mt-5 signup-div">
          <span>Already have an account?</span>
          <span>
            <Link to="/login"> Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
