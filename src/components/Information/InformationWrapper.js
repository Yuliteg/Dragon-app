import styled from 'styled-components';

export const InformationWrapper = styled.section`
    min-height: 82vh;
    display: flex;
    margin: 0px 5rem;
    padding-top: 3rem;
    gap: 10rem;

    @media screen and (max-width: 810px) {
    flex-direction: column;
    gap: 5rem;
  }

  .dragon-image {
    width: 50%;
    height: auto;
    filter: drop-shadow(0px 2px 4px rgba(126, 57, 143, 0.7));
    
    img {
      width: 90%;
      height: auto;
      border-radius: 0.3rem;
       }
       @media screen and (max-width: 750px) {
    width: 90%;
     }
  }

  .dragon-desc {
    width: 50%;
    @media screen and (max-width: 750px) {
    width: 90%;
     }
  }

      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #868686;;
        .info {
          color: white;
          text-transform: uppercase;
          font-style: normal;
          font-weight: 500;
          font-size: 19px;
          font-family: Arial,Verdana,sans-serif;
        }
        .data {
          font-size: 18px;
          color: white;
          a {
            color: white;
          }
          span {
            color: gray;
            font-size: 16px;
          }
        }
      }

     .desc-title {
        padding-bottom: 0.5rem;
        color: white;
        font-weight: 600;
        font-size: 34px;
        line-height: 0px;
        margin-top: 1.2rem;
      }
  `;
