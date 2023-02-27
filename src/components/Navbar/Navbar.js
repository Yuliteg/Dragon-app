import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalContext } from '../../context';
import { NavContainer } from './NavContainer';

const Navbar = () => {
  const { count } = useGlobalContext();

  return (
    <NavContainer>
      <p className='logo'>dragon</p>
       <div>
        <Link to='/'>Home</Link>
        <Link to='favorites'>Favorites
          <span className="favorite-container">
            <FavoriteIcon className="like" />
            <span className='favorite-value'>{count}</span>
          </span>
        </Link>
        </div>
    </NavContainer>
  )
}

export default Navbar;