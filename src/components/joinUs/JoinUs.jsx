// Importing Styles
import './style.css';
// Importing Components
import RegisterSideBarComp from '../reuseableComp/registrationSideBar/RegisterSideBarComp.jsx';
import Button from '@/components/reuseableComp/selectionButton/Button.jsx';
import Link from 'next/link';
// Importing Assets
import user from '@/assets/individual.png';
import Brifecase from '@/assets/brifecase.png';




const JoinUs = () => {
  // Dynamic Varibles for the Components
  const PersonalHeading = 'Individual';
  const PersonalParagraph = 'Personal account to manage all you activities.';
  const BusinessHeading = 'Business';
  const BusinessParagraph = 'Own or belong to a company, this is for you.';


  // JSX
  
  return (
    <div className="join-us-main-body">
      <RegisterSideBarComp />
      <div className="join-us-form-side-bar">
        <div className='join-us-already-account'>
          <p>Already have an account?</p>
          <Link href={"/"}>Sign In</Link>
        </div>
        <div className='join-us-form-buttons'>
          <h2>Join Us!</h2>
          <p>To begin this journey, tell us what type of <br /> account you’d be opening.</p>
          <Link className='link' href={'/register'}>
            <Button image={user} heading={PersonalHeading} paragraph={PersonalParagraph} />
          </Link>
          <Button image={Brifecase} heading={BusinessHeading} paragraph={BusinessParagraph} />
        </div>
      </div>
    </div>
  );
}

export default JoinUs