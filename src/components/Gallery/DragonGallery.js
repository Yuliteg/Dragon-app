import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { GalleryContainer } from "./GalleryContainer";
import { useGlobalContext } from "../../context";
import { useState } from "react";

export const DragonGallery = ({ itemData }) => {
   const [like, setLike] = useState('like')
  const { flickr_images, name, id, favorite } = itemData;
  const { count, setCount } = useGlobalContext();

  const setFavorite = () => {
    if (!favorite) {
      itemData.favorite = true;
      setCount(count + 1);
      setLike('active')
    } else {
      itemData.favorite = false;
      setCount(count - 1);
      setLike('like')
    }
  };


  return (
    <GalleryContainer>
      <div className="img-container">
        <ul>
          <li>
            <img
              className="dragon-gallery-img"
              src={flickr_images[2]}
              alt="dragon-img"
            />
          </li>
        </ul>
      </div>
      <footer>
        <div className="text-wrapper">
          <p>
            Dragon name: <span>{name}</span>
          </p>
          <Link to={`dragon/${id}`} className="link">
            <button className="btn">More info</button>
          </Link>
        </div>
        <div
          className="like-wrapper"
          onClick={() => {
            setFavorite();
          }}
        >
          <FavoriteBorderIcon className={like} />
        </div>
      </footer>
    </GalleryContainer>
  );
};
