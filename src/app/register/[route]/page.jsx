"use client";
import BankVerificationForm from '@/components/bankVerificationForm/BankVerificationForm';
import ResidencyInfoForm from '@/components/residencyInfoForm/ResidencyInfoForm';
import { useParams } from 'next/navigation'



const CompleteProfilePage = () => {
  const { route } = useParams();
  return (
    <>
      {
        route === 'residency' ? <ResidencyInfoForm /> : <BankVerificationForm />
      }
    </>
  )
}

export default CompleteProfilePage