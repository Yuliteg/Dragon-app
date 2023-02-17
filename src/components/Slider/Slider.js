import { useGlobalContext } from '../../context';
import planetImg from '../../image/Mask group.png'; 
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { SliderWrapper } from './SliderWrapper';
import { useState } from 'react';

const Slider = () => {
    const [currImg, setCurrentImg] = useState(1)
    const {images} = useGlobalContext();
    
    const moveDot = index => {
        setCurrentImg(index - 1)
    }

    return (
        <>
  <SliderWrapper>
    <div className="title-slider-container">
        <p>Explore cosmos with dragon</p>
        </div>
        <div className="img-container">
             <img src={planetImg} alt="planet-img" />
           </div>

           <div className="slider-wrapper">
             <div className="slider" style={{backgroundImage: `url(${images[currImg]})`}}>
               <div className="left"
                onClick={() => {
                 currImg > 0 && setCurrentImg(currImg - 1)
               }}>
                <ArrowCircleUpIcon className="arrow-left"/>
               </div>
               <div className="center"></div>
               <div className="right"
               onClick={() => {
                currImg < images.length - 1 && setCurrentImg(currImg + 1)
                }}>
               <ArrowCircleUpIcon className="arrow-right"/>
               </div>
             </div>
           </div>
           <div className="dot-wrapper">
           {images.map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={currImg === index ? 'dot-active' : 'dot'}></div>
                    ))}
              </div>
  </SliderWrapper>
     </>
    )
    }

  export default Slider

