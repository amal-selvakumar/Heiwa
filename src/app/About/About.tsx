import './About.css';
import aboutData from './About.json';
import topComma from '../Images/TopComma.svg';
import bottomComma from '../Images/BottomComma.svg';

export default function About() {
  return (
    <div className="about">
      <div className='aboutInnerContainer'>
        <div className='missionAndVisionContainer'>
            {aboutData.map((data,index)=>(
              <div className='missionContainer' key={index} style={{backgroundImage:`url(${aboutData[index]?.imageUrl})`,backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                <div className='topCommaDiv'>
                    <img src={topComma} alt='topComma'/>
                </div>

                <div className='aboutContentDiv'>
                 <div className='aboutContent'>
                   <span>{data.content}</span>
                 </div>
                </div>

                <div className='bottomCommaDiv'>
                    <img src={bottomComma} alt='bottomComma'/>
                </div>

                <div className='aboutContentTitle'>
                    <div className='contentTitle'>
                      <span>{data.title}</span>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
