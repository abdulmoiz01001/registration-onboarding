"use client";
// Importing Modules
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTransition } from "react";
import './style.css'
// Importing Components
import RegistrationSideBar from '../reuseableComp/registrationSideBar/RegisterSideBarComp';
import RegisterHeader from '../registerHeader/RegisterHeader';
import Button from '@/components/submitButton/SubmitButton';
// Importing Assets
import Lock from '@/assets/lock_24px.svg';
// Importing Packages
import Image from 'next/image';
// Importing Third Party Libraries
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import toast from 'react-hot-toast';


const BankVerificationForm = () => {

  const router = useRouter();  // make a instance of useRouter

  const [isPending, startTransition] = useTransition(); // useTransition for smooth transition

  const [verificationCode, setVerificationCode] = useState(''); // state for verification code

  const ValidateVerificationCode = (e) => {       // function to validate verification code
    
    startTransition(()=>{

      e.preventDefault();
    if (verificationCode.length < 12) {
     return toast.error('Please enter a valid BVN');
    } else if (verificationCode.length == 12) {
      toast.success('BVN verified successfully');
    }
    else {
     return toast.error('Please enter a valid BVN');
    }

    router.push('/');

    })
  }


  // JSX Code for Bank Verification Form 
  return (
    <div className='bankverification-form-main-body'>
      <RegistrationSideBar />
      <div className='bankverification-form' >
        <RegisterHeader title={"Bank Verification"} />
        <form onSubmit={ValidateVerificationCode} className='bankverification-form-field-btns'>
          <h2>Complete Your Profile!</h2>
          <p>For the purpose of industry regulation, your <br /> details are required.</p>

          <div className='bankverification-form-text-field'>
            <label htmlFor="bankverification">Bank Verification Number (BVN)</label>
            <input
            disabled={isPending} // disable the input field when the form is pending
            required
            value={verificationCode}
            onChange={(e) => { setVerificationCode(e.currentTarget.value) }}
            type="number" id='bankverification' placeholder='090912345567' />
            <CheckCircleIcon className='color-alignment' />
          </div>

          <button type='submit' >

          <Button title={"Save & Continue"} />
          </button>

          <div className='secure-label' >
            <Image src={Lock} alt='image' />
            <p>Your Info is safely secured</p>
          </div>

        </form>

      </div>

    </div>
  );
}

export default BankVerificationForm