import { useGlobalContext } from "../context";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import background from "../image/Stars.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const FavoritePage = () => {
  const { dataGallery } = useGlobalContext();

  const favorite = dataGallery.filter((item) => item.favorite === true);
  console.log(favorite);
  let favoriteData = [];

  if (favorite) {
    favoriteData = favorite.map((item) => {
      const { name } = item;
    });
  }

  return (
    <div>
      {favorite.length >= 1 ? (
        <>
          <Navbar />
          <MainContainer>
            <PageFavorites>
              <p className="gallery-title">Your favorite Dragons</p>
              {favorite.map((item, index) => {
                return (
                  <>
                    <div className="single-container">
                      <img
                        className="dragon-favorite-img"
                        src={item.flickr_images[2]}
                        alt="favorite-img"
                      ></img>
                      <p className="dragon-name">Name: {item.name}</p>
                      <p className="dragon-desc">Description: {item.description}</p>
                    </div>
                  </>
                );
              })}
            </PageFavorites>
          </MainContainer>
          <Footer />
        </>
      ) : (
         <>
        <Navbar />
        <MainContainer>
            <div className="warning">
            <p>You don't have any favorites yet!</p>
             <Link to={'/'}>
               <button>Home</button>
             </Link>
            </div>
        </MainContainer>
        <Footer />
        </>
        // <p>'you need choose favorite'</p>
      )}
    </div>
  );
};

const MainContainer = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;

  .warning {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
    padding-top: 30vh;
  }

  p {
    margin: 0;
    font-size: 35px;
  }
  button {
    align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  flex: 1 1 auto;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  user-select: none;
  margin-left: 0.5rem;
  }
`;

const PageFavorites = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 3rem;

  .dragon-favorite-img {
    width: 40vw;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(0px 4px 7px rgba(126, 57, 143, 0.7));
    margin-bottom: 1rem;
  }
  .single-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 1.3rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
    font-size: 18px;
    letter-spacing: 0.05rem;
    padding-left: 1vh;
    color: white;
  }
  .gallery-title {
    color: white;
    font-weight: 600;
    font-size: 34px;
    line-height: 0px;
  }
  .dragon-name {
    font-weight: 600;
    font-size: 30px;
    line-height: 0px;
    margin-bottom: 1.5rem;
  }
  .dragon-desc {
    max-width: 90vh;
  }
`;