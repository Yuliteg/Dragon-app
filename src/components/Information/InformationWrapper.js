import styled from 'styled-components';

export const InformationWrapper = styled.section`
    min-height: 82vh;
    display: flex;
    margin: 0px 5rem;
    padding-top: 5rem;
    gap: 10rem;

  .dragon-image {
    max-width: 550px;
    height: auto;
    filter: drop-shadow(0px 2px 4px rgba(126, 57, 143, 0.7));
    
    img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
   }
  }

  .dragon-desc {
    width: 45%;
  }

     .desc-title {
     text-align: center;
     padding-bottom: 0.5rem;
     color: white;
     font-weight: 600;
     font-size: 34px;
     line-height: 0px;
     margin-top: 1.2rem;
      }

    .rocket-table {
    width: 100%;
    font-size: 18px;
    color: white;
    border-collapse: collapse;

    td {
      padding: 20px 0;
      border-bottom: 1px solid #868686;
      vertical-align: middle;

      &:first-child {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 19px;
        font-family: Arial, Verdana, sans-serif;
        width: 50%;
      }

      &:last-child {
        text-align: end;
      }

      a {
        color: white;
        text-decoration: none;

      &:hover {
          text-decoration: underline;
        }
      }

      span {
        color: gray;
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 810px) {
    flex-direction: column;
    gap: 5rem;

    .dragon-desc {
      width: 100%;
    }
  }
  `;
