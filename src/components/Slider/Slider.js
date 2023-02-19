import { useGlobalContext } from '../../context';
import planetImg from '../../image/Mask group.png'; 
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { SliderWrapper } from './SliderWrapper';
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = () => {
    const [currImg, setCurrentImg] = useState(0)
    const [sliderImg, setSliderImg] = useState([])
    const {rocket, loading} = useGlobalContext();

    const moveDot = index => {
        setCurrentImg(index - 1)
    }

      useEffect(() => {
        if(!loading) {
          const newImg = [...rocket.flickr_images].splice(1)
          setSliderImg(newImg)
        }  
      }, [loading])

    return (
        <>
  <SliderWrapper>
  {!loading && 
        <>
         <div className="title-slider-container">
         <p>Explore cosmos with dragon</p>
         </div>
         <div className="img-container">
              <img src={planetImg} alt="planet-img" />
            </div>
 
            <div className="slider-wrapper">
              <div className="slider" style={{backgroundImage: `url(${sliderImg[currImg]})`}}>
                <div className="left"
                 onClick={() => {
                  currImg > 0 && setCurrentImg(currImg - 1)
                }}>
                 <ArrowCircleUpIcon className="arrow-left"/>
                </div>
                <div className="center"></div>
                <div className="right"
                onClick={() => {
                 currImg < sliderImg.length - 1 && setCurrentImg(currImg + 1)
                 }}>
                <ArrowCircleUpIcon className="arrow-right"/>
                </div>
              </div>
            </div>
            <div className="dot-wrapper">
            {sliderImg.map((item, index) => (
                     <div 
                     key={index}
                     onClick={() => moveDot(index + 1)}
                     className={currImg === index ? 'dot-active' : 'dot'}></div>
                     ))}
               </div>
               </>
        }
  </SliderWrapper>
     </>
    )
    }

  export default Slider

