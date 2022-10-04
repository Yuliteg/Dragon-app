import styled from 'styled-components';
import planetImg from '../../image/Mask group.png';


export const SliderWrapper = styled.section`
    position: relative;
    padding-top: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    overflow: hidden;

    .dot-wrapper {
      margin-top: 2.5rem;
      display: flex;
      justify-content: center;
      cursor: pointer;
      .dot-active {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 2px solid #f1f1f1;
        margin: 0 5px;
        background: #f1f1f1;
        background: rgb(32, 32, 32);
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 2px solid #f1f1f1;
        margin: 0 5px;
        background: #f1f1f1;
       }
    }

   .img-container {
    position: absolute;
    top: 0;
    left: 83%;
    background-image: url(${planetImg});

    @media screen and (max-width: 750px) {
     display: none;
  }
   }

  .title-slider-container {
      padding-top: 3rem;
      padding-bottom: 2rem;
      margin-top: 0px;
      color: white;
      font-family: 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 0px;

      @media screen and (max-width: 500px) {
      font-size: 20px;
   }
  }

     .slider-wrapper {
      width: 50vw;
      height: 65vh;
      display: flex;

        .slider{
         width: 100%;
         height: 100%;
         background-size: cover;     
         background-position: center center;      
         background-repeat: no-repeat; 
         border-radius: 0.3rem;
         display: flex;
         
         .left {
          flex: 4%;
          height: 100%;
          display: grid;
          place-items: center;

          &:hover {
            background-color: rgba(25, 39, 52, 0.4);
          }

          .arrow-left {
            transform: rotate(-90deg);
            font-size: 40px;
            color: rgb(25, 39, 52);
            cursor: pointer;
          }
         }
         .center {
          flex: 80%;
          height: 100%;
         }
         .right {
          flex: 4%;
          height: 100%;
          display: grid;
          place-items: center;
          &:hover {
            background-color: rgba(25, 39, 52, 0.4);
          }
          .arrow-right {
            transform: rotate(90deg);
            font-size: 40px;
            color: rgb(25, 39, 52);
            cursor: pointer;
          }
         }
        }
     }
  `;
