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
    a:hover {
      color: gray;
    }

    nav {
      @media screen and (max-width: 600px) {
       position: fixed;
       top: 0;
       left: 0;
       height: 100%;
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1.5rem;
       background-color: black;
       transform: translateY(-100vh);
  }
    }

    .nav-btn {
      padding: 5px;
      cursor: pointer;
      background: transparent;
      border: none;
      color: white;
      visibility: hidden;
      opacity: 0;
      display: none;
      @media screen and (max-width: 600px) {
      visibility: visible;
      opacity: 1;
      display: block;
       svg {
        font-size: 2.1rem;
       }
  }
    }
  .responsive-nav {
      @media screen and (max-width: 600px) {
      transform: none;
  }
  .favorite-value {
    @media screen and (max-width: 600px) {
      display: none;
  }
  .like {
    @media screen and (max-width: 600px) {
     
   }
    }
     }
      }
`;
