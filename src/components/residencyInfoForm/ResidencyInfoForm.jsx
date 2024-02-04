"use client";
// IMporting Hooks
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTransition } from "react";
// Importing Styles
import './style.css';
// Importing Components
import RegistrationSideBar from '../reuseableComp/registrationSideBar/RegisterSideBarComp';
import RegisterHeader from '../registerHeader/RegisterHeader';
import Button from '@/components/submitButton/SubmitButton';
// Importing Assets
import Lock from '@/assets/lock_24px.svg';
import DownArrow from '@/assets/down.svg';
// Importing Next Image
import Image from 'next/image';
// Importing Data Files
import countries from '@/data/countries.json';
import countryCode from '@/data/country-code.json';
// Importing Validator
import { ResidencySchema } from '@/validator/index';
// Importing Third Party Libraries
import toast from 'react-hot-toast';

const ResidencyInfoForm = () => {
  
  const title = "Save & continue"  // Dynamic Varibles for the Components
  const [defaultCountryCode, setDefaultCountryCode] = useState('+91'); // State for default country code
    const [isPending, startTransition] = useTransition(); // useTransition for smooth transition
  const [countryName, setCountryName] = useState('🇮🇳');  // State for country name

  const router = useRouter();  // Make instance of useRouter

  const [form, setForm] = useState({          // State for form values
    phone: '',
    address: '',
    country: ''
  })

  const { phone, address, country } = form;  // Destructuring form values

  const settingPhone = (value) => {    // Function for setting phone number Dynamically 

    const firstTwoCharacters = value.toString().substring(0, 3);

    setDefaultCountryCode(firstTwoCharacters);

    for (let key in countryCode) {
      if (key === firstTwoCharacters) {
        console.log(key, countryCode[key]);
        setCountryName(countryCode[key])
      }
    }
  }


  const ValidateFields = (e) => {   // Function for validating form values
    startTransition(()=>{
    e.preventDefault();
    console.log(form)

    let isValidate = ResidencySchema.safeParse(form);

    if (!isValidate.success) {
      toast.error("Invalid Field");
      return;
    }

    router.push('/register/bankverification');
    return;
    })
  }

  //JSX

  return (
    <div className='residency-form-main-body'>
      <RegistrationSideBar />
      <div className='residency-form' >
        <RegisterHeader title={"Residency Info"} />
        <form onSubmit={ValidateFields} className='residency-form-field-btns'>

          <h2>Complete Your Profile!</h2>
          <p>For the purpose of industry regulation, your <br /> details are required.</p>

          <div className='residency-form-text-field'>
            <label htmlFor="country">Phone number</label>
            <span className='phone-labels'><span>{defaultCountryCode ? defaultCountryCode : "+91"}</span> <span>{countryName}</span> <Image src={DownArrow} alt='image' /></span>
            <input
            disabled={isPending} // disable the input field when the form is pending
            required 
            type='text'
            value={phone}
            onChange={(e) => {
            setForm({ ...form, phone: e.currentTarget.value })
            settingPhone(e.currentTarget.value)
            }} id='country-code' />
          </div>

          <div className='residency-form-text-field'>
            <label htmlFor="address">Your address</label>
            <input
            disabled={isPending} // disable the input field when the form is pending
            required
            value={address}
            onChange={(e) => { setForm({ ...form, address: e.currentTarget.value }) }}
            type="text" id='address' placeholder='Please Enter address' />
          </div>

          <div className='residency-form-text-field'>
            <label htmlFor="country">Country of residency</label>
            <select
            disabled={isPending} // disable the input field when the form is pending
            required
            value={country}
            onChange={(e) => { setForm({ ...form, country: e.currentTarget.value }) }}
            id='country'  >
            <option disabled selected >Please select</option>
            {countries.map((country) => {
            return <option value={country} >{country}</option>
            })}
            </select>
          </div>

          <button type='submit'
             disabled={isPending} // disable the input field when the form is pending
            >
           
            <Button
            title={title} />
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

export default ResidencyInfoForm
