// Importing Styles
import './style.css';
// Importing Next Image
import Image from 'next/image';

const SubmitButton = ({ image, title }) => {  // Destructuring props

  //JSX

  return (
    <div className={image ? 'google-submit-btn' : 'submit-button'} >
      {image && (<Image src={image} alt="image" />)}
      <p>{title}</p>

    </div>
  )
}

export default SubmitButton
