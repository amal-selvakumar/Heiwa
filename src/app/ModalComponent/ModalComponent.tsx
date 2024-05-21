import { useDispatch } from 'react-redux';
import './ModalComponent.css';
import { IoMdClose } from "react-icons/io";
import { closeModal } from '../Redux/ModalSlice';

type ModalType={
  imageUrl:string;
  title:string;
  shortDescription:string;
  firstListTitle:string;
  firstDescription:string;
  lastListTitle:string;
  lastDescription:string;

}

export default function ModalComponent({imageUrl,title,shortDescription,firstListTitle,firstDescription,lastListTitle,lastDescription}:ModalType) {

  const dispatch = useDispatch();

  const handleModalClose =()=>{
   dispatch(closeModal());
  }

  return (
    <div className='modalComponent'>
      <div className='modal'>
        <div className='modalImageDiv'>
          <img src={imageUrl} alt='img'/>
        </div>

        <div className='modalContentDiv'>
           <div className='closeIconDiv'>
            <IoMdClose onClick={handleModalClose}/>
           </div>

           <div className='modalContent'>
            <div className='modalContentTitle'>
              <span>{title}</span>
            </div>

            <div className='modalShortDescription'>
              <span>{shortDescription}</span>
            </div>

            <div className='modalContents'>
              <ul>
                <li>
                  <span>{firstListTitle}</span><span>{firstDescription}</span>
                </li>

                <li>
                  <span>{lastListTitle}</span><span>{lastDescription}</span>
                </li>
              </ul>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}
