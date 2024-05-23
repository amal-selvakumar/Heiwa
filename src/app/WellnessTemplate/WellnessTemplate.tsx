import Navbar from '../Navbar/Navbar';
import './WellnessTemplate.css';
import whatsappIcon from '../Images/WhatsappIcon.svg';
import Footer from '../Footer/Footer';

type WellnessType={
    backgroundImage:React.CSSProperties;
    title:string;
    description:string;
    contentWidth:React.CSSProperties;
    children:React.ReactNode;
}

export default function WellnessTemplate({backgroundImage,title,description,contentWidth,children}:WellnessType) {
  return (
    <div className='wellnessTemplate'>
        <div className='wellnessTemplateContainer'>
          <Navbar/>
          <div className='wellnessBackgroundDiv' style={backgroundImage}/>

          <div className='wellnessContentDiv'>
            <div className='wellnessTitleDiv'>
              <span>{title}</span>
            </div>

            <div className='wellnessContent'>
               <span style={contentWidth} dangerouslySetInnerHTML={{__html:description}}></span>
            </div>

            <div className='whatsappIconContainer'>
              <img src={whatsappIcon} alt='whatsappIcon'/>
             </div>

             {children}

             <div className='footerContainer'>
              <Footer/>
             </div>
          </div>
        </div>
    </div>
  )
}
