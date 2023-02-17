import { useGlobalContext } from '../context';
import styled from 'styled-components';
import background from '../image/Stars.png';
import Navbar from '../components/Navbar/Navbar';
import Information from '../components/Information/Information';
import Slider from '../components/Slider/Slider';
import Loading from './Loading';
import { DragonGallery } from '../components/Gallery/DragonGallery';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export const Home = () => {
  const { loading, dataGallery } = useGlobalContext();

  return (
    <>
      <Navbar />
      <MainContainer>
        {loading ? <Loading /> : null}
        <Information />
        <Slider />
        <Gallery>
          <div className="gallery-container">
            <p className='gallery-title'>Here you can see the best photos</p>
            {dataGallery.map((dragon) => {
              return <DragonGallery key={dragon.id} itemData={dragon} />
            })}
          </div>
        </Gallery>
      </MainContainer>
        <BackToTop />
      <Footer />
    </>
  )
}

const MainContainer = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;      
  background-repeat: no-repeat;      
  background-attachment: fixed;
`

const Gallery = styled.section`
  .gallery-container {
    position: relative;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
    overflow: hidden;

    .gallery-title {
    color: white;
    font-family: 'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 0px;
    @media screen and (max-width: 600px) {
         font-size: 26px;
  }
  @media screen and (max-width: 500px) {
         font-size: 20px;
  }
    }
  }
`
