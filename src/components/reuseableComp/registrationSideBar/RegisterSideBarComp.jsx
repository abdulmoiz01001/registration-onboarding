// Importing Styles
import './style.css';
// Importing Next Image
import Image from 'next/image';
// Importing Assets
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// Importing Assets
import quot from '@/assets/quot.svg';
import union from '@/assets/Union.png';
import vector from '@/assets/Vector1.svg';


const RegistrationSideBar = () => {

  // JSX

  return (
    <div className="join-us-details-side-bar">
      <div className='join-us-opacity-layer'>
        <div className="icon"><Image src={union} alt="no image" /><span className='join-us-heading'>Oasis</span></div>
        <div className="join-us-paragraph">
          <Image src={quot} alt="qout" />
          <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
          <div className='join-us-align-center' >  <p>Vincent Obi </p><span><CheckCircleIcon className='color' /></span></div>
          <div className='join-us-vector' ><Image src={vector} alt="vector" /></div>

        </div>
      </div>
    </div>
  )
}

export default RegistrationSideBar
