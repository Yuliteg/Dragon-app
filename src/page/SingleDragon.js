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
              <p>
                Name: <span>{dataSingleDragon.name}</span>
              </p>
              <p>
                Material: <span>{moreData.material}</span>
              </p>
              <p>
                Temp-degrees: <span>{moreData.temp_degrees}</span>
              </p>
              <p>
                Dev-partner: <span>{moreData.dev_partner}</span>
              </p>
              <p>
                Description:{" "}
                <span className="desc">{dataSingleDragon.description}</span>
              </p>
            </div>
          </div>
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
  overflow: hidden;
  .container {
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    @media screen and (max-width: 600px) {
      flex-direction: column;
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
      margin-bottom: 2rem;
    }
    .flex {
      display: flex;
      flex-direction: column;
      gap: 5vh;
      max-width: 600px;
    }
    p {
      color: white;
      font-size: 25px;
      margin: 0;
      span {
        font-size: 23px;
        padding-left: 7vw;
      }
    }
  }
`;
