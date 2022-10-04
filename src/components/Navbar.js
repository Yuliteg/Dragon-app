import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const {dataGallery, count} = useGlobalContext();

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
    navRef.current.classList.toggle('responsive')
  }

  return (
    <NavContainer>
      <p className='logo'>dragon</p>

      <nav ref={navRef}>
        <Link to='/'>Home</Link>
        <Link to='favorites'>Favorites
          <span className="favorite-container">
            <FavoriteIcon className="like" />
            <span className='favorite-value'>{count}</span>
          </span>
        </Link>
        <Link to='/'>Log out</Link>
        <button className='nav-btn nav-close' onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>

      <button className='nav-btn' onClick={showNavbar}>
        <MenuIcon />
      </button>
      {/* </div> */}
    </NavContainer>
  )
}

const NavContainer = styled.nav`
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
    }
`

export default Navbar;