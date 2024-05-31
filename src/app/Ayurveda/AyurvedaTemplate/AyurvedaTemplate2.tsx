import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar'
import Questions from '../../Questions/Questions';
import './AyurvedaTemplate2.css'
import whatsappIcon from '../../Images/WhatsappIcon.svg';

type AyurvedaTemplateData={
    data:{
        images:{
            imageUrl:string;
        },
        content:string;
    },
    title:string;
    backgroundImages?:React.CSSProperties;
    contentWidth:React.CSSProperties;
    secondTitle:string;
    children:React.ReactNode;
}

export default function AyurvedaTemplate2({data,title,contentWidth,secondTitle,children,backgroundImages}:AyurvedaTemplateData) {
  return (
    <div className='ayurvedaTemplate2'>
      <div className='template2Container'>
        <Navbar/>

        <div className='template2Background' style={backgroundImages}>
           <img src={data.images.imageUrl} alt='imageUrl'/>
        </div>

        <div className='template2ContentDiv'>
            <div className='template2Title'>
               <span>{title}</span>
            </div>

            <div className='template2Content'>
              <span style={contentWidth}>{data?.content}</span>
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

            <div className='questionsDiv'>
                <Questions/>
            </div>

            <div className='footerContainer'>
                <Footer/>
            </div>
        </div>
      </div>
    </div>
  )
}
