import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import './Signup.css'; // Import the CSS file for styling
import { roles } from '../constants/roles'; // Import roles from constants

const Signup = () => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = data => {
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    axios.post('https://workintech-fe-ecommerce.onrender.com/signup', data)
      .then(response => {
        setIsSubmitting(false);
        setSuccessMessage('You need to click link in email to activate your account!');
      })
      .catch(error => {
        setIsSubmitting(false);
        setErrorMessage('Error signing up: ' + error.response.data.message);
      });
  };

  const role = watch('role_id');
  const isStore = role === 'store';

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && <p>Name is required and should be at least 3 characters long.</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>Invalid email address.</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register('password', { 
              required: true, 
              minLength: 8, 
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
            })}
          />
          {errors.password && <p>Password must be at least 8 characters long and include numbers, lowercase, uppercase, and special characters.</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', { 
              required: true, 
              validate: value => value === watch('password') 
            })}
          />
          {errors.confirmPassword && <p>Passwords do not match.</p>}
        </div>
        <div>
          <label>Role</label>
          <Controller
            name="role_id"
            control={control}
            defaultValue="customer"
            render={({ field }) => (
              <select {...field}>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            )}
          />
        </div>
        {isStore && (
          <>
            <div>
              <label>Store Name</label>
              <input
                {...register('store.name', { required: true, minLength: 3 })}
              />
              {errors.store?.name && <p>Store name is required and should be at least 3 characters long.</p>}
            </div>
            <div>
              <label>Store Phone</label>
              <input
                {...register('store.phone', { required: true, pattern: /^(\+90|0)?5\d{9}$/ })}
              />
              {errors.store?.phone && <p>Invalid Türkiye phone number.</p>}
            </div>
            <div>
              <label>Store Tax ID</label>
              <input
                {...register('store.tax_no', { required: true, pattern: /^T\d{4}V\d{6}$/ })}
              />
              {errors.store?.tax_no && <p>Invalid Tax ID format. It should match the pattern "TXXXXVXXXXXX".</p>}
            </div>
            <div>
              <label>Store Bank Account</label>
              <input
                {...register('store.bank_account', { required: true, pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/ })}
              />
              {errors.store?.bank_account && <p>Invalid IBAN address.</p>}
            </div>
          </>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Signup;
