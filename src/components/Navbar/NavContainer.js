import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 4rem;
  background-color: black;
  filter: drop-shadow(0px 4px 7px rgba(126, 57, 143, 0.7));
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  .link {
    margin-bottom: 5px;
  }

  .like {
    color: red;
  }
  .favorite-container {
    position: relative;
    svg {
     margin-left: -5px;
    }
    @media screen and (max-width: 400px) {
      display: none;
   }
  }
  .favorite-value {
    position: absolute;
    top: -1.3vh;
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
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0;
    font-family: 'Syncopate';
    font-weight: 700;
    font-size: 20px; 
    color: white;
    padding-left: 5vw;

     @media screen and (max-width: 600px) {
      font-size: 17px;
   }
  }

    a {
      margin: 0 2.5rem;
      color: white;
      font-weight: 600;
      font-size: 22px;
      color: white;
      text-decoration: none;
    }
`;
