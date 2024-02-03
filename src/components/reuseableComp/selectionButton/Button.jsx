// Importing Styles
import './style.css';
// Importing Next Image
import Image from 'next/image';
// Importing Assets
import arrow from '@/assets/arrow-right.png';

const Button = ({ image, heading, paragraph }) => {  // Destructuring props

  //JSX

  return (
    <div className='join-us-btn' >
      <div className={heading == "Individual" ? ('join-us-personal-profile') : ('join-us-business-profile')}>
        <Image src={image} alt=' user' />
      </div>
      <div className='join-us-btn-details' >
        <h5>{heading}</h5>
        <p>{paragraph}</p>

      </div>
      {heading == "Individual" ? (<Image src={arrow} />) : ('')}


    </div>
  );
}

export default Button