import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { galleryUrl } from "../context";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../image/Stars.png";

export const SingleDragon = () => {
  const { loading, setLoading } = useGlobalContext();
  const [dataSingleDragon, setSingleDragon] = useState([]);
  const [imgSingleDragon, setImg] = useState([]);
  const [moreData, setMoreData] = useState([]);
  const { id } = useParams();
  const singleDragonUrl = { galleryUrl };
  console.log(dataSingleDragon);

  const fetchSingleDragon = async () => {
    try {
      const response = await fetch(`${galleryUrl}/${id}`);
      const singleDragon = await response.json();
      setSingleDragon(singleDragon);
      setImg(singleDragon.flickr_images);
      setMoreData(singleDragon.heat_shield);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleDragon();
  }, [id]);

  return (
    <>
      <Navbar />
      <MainContainer>
        <div className="container">
          <div className="img-container">
            <img src={imgSingleDragon[2]} alt="img" />
          </div>
          <div className="desc-container">
            <p className="desc-title">Description</p>

            <div className="flex">
               <div className="left-flex">
                <p>Name:</p>
                <p>Material:</p>
                <p>Temp-degrees:</p>
                <p>Dev-partner:</p>
                <p>Type:</p>
               </div>
               <div className="right-flex">
                <p>{dataSingleDragon.name}</p>
                <p>{moreData.material}</p>
                <p>{moreData.temp_degrees}</p>
                <p>{moreData.dev_partner}</p>
                <p>{dataSingleDragon.type}</p>
               </div>
          
              {/* <p>
                Description:
                <span className="desc">{dataSingleDragon.description}</span>
              </p> */}
            </div>
          </div>
        </div>

        <div className="desc">
             <p>Description:
             <span>{dataSingleDragon.description}</span>
             </p>
             </div>
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .container {
    padding: 4rem;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    .desc-container {
      min-width: 35vw;
    }
    img {
      width: 75vh;
      height: auto;
    }
    .desc-title {
      padding-bottom: 0.5rem;
      color: white;
      font-weight: 600;
      font-size: 34px;
      line-height: 0px;
      margin-top: 1.2rem;
      margin-bottom: 3rem;
      padding-left: 25vh;
    }
    .flex {
      display: flex;
      flex-direction: row;
      gap: 20vh;
      padding-bottom: 2rem;
      justify-content: center;
      line-height: 4rem;
    }

    p {
      color: white;
      font-size: 25px;
      margin: 0;
    }
  }
  .desc {
    max-width: 80vw;
    margin: 0;
    margin-left: 10%;
     p {
      margin: 0;
      padding-bottom: 3rem;
      color: white;
      font-size: 24px;
       span {
        padding-left: 1rem;
        font-size: 20px;
       }
     }
  }
`;
