import { useGlobalContext } from "../context";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import background from "../image/Stars.png";
import Footer from "../components/Footer";

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
                      <p>Name: {item.name}</p>
                    </div>
                  </>
                );
              })}
            </PageFavorites>
          </MainContainer>
          <Footer />
        </>
      ) : (
        <p>'you need choose favorite'</p>
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
`;

const PageFavorites = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 5rem;

  .dragon-favorite-img {
    width: 40vw;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(0px 4px 7px rgba(126, 57, 143, 0.7));
  }
  .single-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 3rem;
  }-t
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
  .flex {

  }
`;
