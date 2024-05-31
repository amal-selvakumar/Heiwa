import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Template2.css';
import whatsappIcon from '../../../public/Images/WhatsappIcon.svg';

type Template2Type={
  title:string;
  backgroundImages?:React.CSSProperties;
  contentWidth:React.CSSProperties;
  secondTitle:string;
  children:React.ReactNode;
  content:string;
}


export default function Template2({title,backgroundImages,contentWidth,content,secondTitle,children}:Template2Type) {

  return (
    <div className='template2'>
      <div className='template2Container'>
        <Navbar/>
        <div className='templateBackground' style={backgroundImages}></div>

        <div className='template2ContentDiv'>
        <div className='template2Title'>
               <span>{title}</span>
            </div>

            <div className='template2Content'>
              <span style={contentWidth}>{content}</span>
            </div>

            <div className='template2SecondContentDiv'>
                <div className='template2SecondTitle'>
                   <span>{secondTitle}</span>
                </div>

                <div className='template2SecondContent'>
                   {children}
                </div>
            </div>

            <div className='whatsappIconContainer'>
                <img src={whatsappIcon} alt='whatsappIcon'/>
            </div>

            <div className='footerContainer'>
                <Footer/>
            </div>
        </div>

      </div>
    </div>
  )
}
