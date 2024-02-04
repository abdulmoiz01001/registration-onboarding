"use client";
// Importing Hooks
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// Importing Styles
import './style.css';
// Importing Components
import Button from '@/components/submitButton/SubmitButton';
import RegisterHeader from '@/components/registerHeader/RegisterHeader';
import RegistrationSideBar from '@/components/reuseableComp/registrationSideBar/RegisterSideBarComp';
// Importing Assets
import Google from '@/assets/flat-color-icons_google.png';
// Importing Validator
import { RegisterSchema } from '@/validator/index';
// Importing Third Party Libraries
import toast from 'react-hot-toast';

const RegisterIndividual = () => {

  const route = useRouter();               // Make instance of useRouter
  const [showPassword, setshowPassword] = useState(false); // State for showing password
  const [form, setForm] = useState({             // State for form values 
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = form; // Destructuring form values

  // Dynamic Varibles for the Components
  const Register = "Register Account";
  const GoogleRegister = "Register with Google";


  const changeState = () => {               // Function for showing password
    setshowPassword(!showPassword);
  }

  const validateValues = (e) => {            // Function for validating form values
    e.preventDefault();
    console.log(form);
    const isValidate = RegisterSchema.safeParse(form);

    if (!isValidate.success) {
      return toast.error("Invalid Input Fields");

    }

    route.push('/register/residency');
  }

  //JSX

  return (
    <div className='register-individual-main-body'>
      <RegistrationSideBar />
      <div className='register-individual-form'>
        <RegisterHeader title={"Personal Info"} />
        <form onSubmit={validateValues} className='register-individual-Fields-btns'>
          <h2>Register Individual Account!</h2>
          <p>For the purpose of industry regulation, your <br /> details are required.</p>
          <div className='register-individual-text-field'>
            <label htmlFor="name">Your fullname*</label>
            <input
              value={name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }) }}
              type="text" id='name' placeholder='Invictus Innocent' />
          </div>
          <div className='register-individual-text-field'>
            <label htmlFor="email">Email address*</label>
            <input
              value={email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
              type="email" id='email' placeholder='Enter email address' />
          </div>
          <div className='register-individual-text-field'>
            <label htmlFor="password">Create Password*</label>
            <input 
              className='password-input'
              value={password}
              onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
              type={!showPassword ? "password" : "text"} id='password' placeholder='Enter password' />
            <p onClick={changeState} className='show-password' >Show</p>
          </div>
          <div className='register-individual-check-box'>
            <input type="checkbox" /> <p>I agree to terms & conditions</p>
          </div>
          <button type="submit">

            <Button 
            title={Register} />
          </button>

          <div className='line'><div className='line1'></div><span>or</span><div className='line2'></div></div>

          <Button
          image={Google} title={GoogleRegister} />

        </form>
      </div>
    </div>
  )
}

export default RegisterIndividual
