import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalContext } from '../../context';
import { NavContainer } from './NavContainer';

const Navbar = () => {
  const { dataGallery, count } = useGlobalContext();

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
        <button className='nav-btn nav-close' onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <MenuIcon />
      </button>
    </NavContainer>
  )
}

export default Navbar;