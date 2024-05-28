import Navbar from '../../Navbar/Navbar';
import './Kalari.css';
import kalariImg from '../../../../public/Images/KalariBackground.svg';
import Questions from '../../Questions/Questions';
import Footer from '../../Footer/Footer';
import whatsappIcon from '../../../../public/Images/WhatsappIcon.svg';
import kalariData from './Kalari.json';

export default function Kalari() {
  return (
    <div className='kalari'>
      <div className='kalariContainer'>
        <Navbar/>
        
        <div className='kalariBottomContainer'>
          <img src={kalariImg} alt='kalariImg'/>
        </div>
      </div>

      <div className='whatsappIconContainer'>
          <img src={whatsappIcon} alt='whatsappIcon'/>
      </div>

      <div className='kalariContentContainer'>
       
        <div className='kalariTopContent'>
          <div className='kalariTopTitle'>
            <span>KALARI TREATMENT</span>
          </div>

          <div className='kalariTopContents'>
             <span>Kalari Chikitsa evolved from Ayurveda and was further refined to cater to the needs of warriors in ancient Kerala, aiding their swift recovery from sports injuries. </span>
             <span>Medicines:</span>
             <span>Kalari Chikitsa employs unique oils and other organic content medicines, crafted from precious-secret blends passed down through generations.</span>
             <span>Effectiveness:</span>
             <span>Many consider Kalari Chikitsa more effective than Ayurveda due to its specialized approach.</span>
             <span>Conditions Treated:</span>
             <div className='multipleContentDiv'>
              <div className='kalariFlexDiv'>
                <span>Spondylitis (Griva Pida)</span>
                <span>|</span>
              </div>

              <div className='kalariFlexDiv'>
                <span>Joint Pain (Pravabheda)</span>
                <span>|</span>
              </div>

              <div className='kalariFlexDiv'>
                <span>Knee Pain (Janu Pida)</span>
                <span>|</span>
              </div>

              <div className='kalariFlexDiv'>
                <span>Back Pain (Prsthavedana)</span>
                <span>|</span>
              </div>

              <div className='kalariFlexDiv'>
                <span>Weight Loss (Nikarsa)</span>
              </div>
             </div>
          </div>
        </div>
       
        <div className='kalariCardContainer'>
        <div className='kalariGridContainer'>
          {kalariData.map((data)=>(
            <div className='kalariDivContainer'>
               
               <div className='kalariDiv'>
                 <div className='kalariDivTitle'>
                  <span>{data.mainTitle}</span>
                 </div>

                 <div className='kalariDivContents'>
                   <div className='kalariTitle'>
                    <span dangerouslySetInnerHTML={{__html:data.title1}}></span>
                   </div>
                   
                   <div className='kalariDivContent'>
                    <span dangerouslySetInnerHTML={{__html:data.content1}}></span>
                   </div>

                   <div className='kalariTitle'>
                    <span dangerouslySetInnerHTML={{__html:data.title2}}></span>
                   </div>

                   <div className='kalariDivContent'>
                    <span dangerouslySetInnerHTML={{__html:data.content2}}></span>
                   </div>

                   {data.title3 ? (
                    
                    <div className='kalariTitle'>
                     <span dangerouslySetInnerHTML={{__html:data.title3}}></span>
                    </div>
                    ): <br></br>}

                  <div className='kalariDivContent'>
                    <span dangerouslySetInnerHTML={{__html:data.content3}}></span>
                   </div>

                   {data.title4 ? (
                    <>
                     <div className='kalariTitle'>
                     <span dangerouslySetInnerHTML={{__html:data.title4}}></span>
                    </div>

                    <div className='kalariDivContent'>
                    <span dangerouslySetInnerHTML={{__html:data.content4}}></span>
                    </div>
                    </>
                    ):null}
                   
                 </div>
               </div>
            </div>
          ))}
        </div>
       </div>
       
      </div>

    

      <div className='questionsDiv'>
        <Questions/>
      </div>

      <div className='footerContainer'>
        <Footer/>
      </div>
    </div>
  )
}
