"use client";
// Importing styles
import './style.css';
// Importing Next Image
import Image from 'next/image';
// Importing Next useRouter
import { useRouter } from 'next/navigation';
// Importing Assets
import arrow from '@/assets/arrow_back_ios_24px.svg';

const RegisterHeader = ({ title }) => {

  const router = useRouter();  // Make instance of useRouter

  const handleBack = () => {   // Handle back button
    router.back();
  };

  // JSX

  return (
    <div className='header'>
      <div onClick={handleBack} className='header-back-button'><Image src={arrow} /><p>Back</p></div>
      <p>{title}</p>
    </div>
  );
}

export default RegisterHeader