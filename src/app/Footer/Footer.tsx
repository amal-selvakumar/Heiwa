import './Footer.css';
import whatsappIcon from '../Images/WhatsappSmallIcon.svg';
import xIcon from '../Images/XIcon.svg';
import igIcon from '../Images/IgIcon.svg';
import fbIcon from '../Images/FbIcon.svg';
import linkedInIcon from '../Images/LinkedInIcon.svg';
import heiwaFooterImg from '../Images/HeiwaFooterImage.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerDiv'>
        <div className='footerContentDiv'>
          <div className='footerContentTopDiv'>
            <div className='footerIconDiv'>
               <img src={whatsappIcon} alt='footerIcon'/>
               <img src={xIcon} alt='footerIcon'/>
               <img src={igIcon} alt='footerIcon'/>
               <img src={fbIcon} alt='footerIcon'/>
               <img src={linkedInIcon} alt='footerIcon'/>
             </div>

            <div className='footerMailDiv'>
                <span>heiwawellness@outlook.com</span>
            </div>
          </div>

            <div className='footerContentsDiv'>
                <span>Home |</span>
                <span>About Us |</span>
                <span>Our Services</span>
            </div>

            <div className='heiwaFooterImgContainer'>
              <img src={heiwaFooterImg} alt='heiwaFooterImg'/>
            </div>

            <div className='copyRightDiv'>
                <span>copyright@ 2024 All right reserved</span>
            </div>
        </div>
      </div>
    </div>
  )
}
