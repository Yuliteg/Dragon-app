import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 4rem;
  background-color: black;
  filter: drop-shadow(0px 4px 7px rgba(126, 57, 143, 0.7));
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  .like {
    color: red;
  }
  .favorite-container {
    align-items: center;
    position: relative;
    svg {
      margin-left: 5px;
    }
  }
  .favorite-value {
    position: absolute;
    top: -2.1vh;
    right: -16px;
    background: gray;
    width: 5px;
    height: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    padding: 8px;
  }

  .logo {
    font-family: 'Syncopate';
     font-weight: 700;
     font-size: 20px; 
     color: white;
     align-items: center;
     padding-left: 3rem;

     @media screen and (max-width: 600px) {
      font-size: 15px;
   }
  }

    a {
      margin: 0 2rem;
      color: white;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      color: white;
      text-decoration: none;
    }
    
`;
