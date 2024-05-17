import './BookYourEscape.css';
import escapeImg from '../Images/EscapeImg.svg';

export default function BookYourEscape() {
  return (
    <div className='bookYourEscape'>
      <div className='escapeImage'>
        <img src={escapeImg} alt='escapeImg'/>
      </div>

      <div className='escapeContent'>
        <div className='escapeContentContainer'>
        <div className='escapeTitle'>
            <span>BOOK YOUR ESCAPE</span>
        </div>

        <div className='escapeDescriptionContainer'>
            <span>
            Unplug, unwind, and embrace the soul-soothing experiences India offers. Our boutique stays are waiting to cocoon you in comfort, nature, and wellness. Come, let India whisper its secrets to you.
            </span>
        </div>

        <div className='enquireButtonContainer'>
            <button className='enquireButton'>ENQUIRE NOW</button>
        </div>
        </div>
      </div>
    </div>
  )
}
