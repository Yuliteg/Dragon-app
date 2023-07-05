import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { galleryUrl } from "../context";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import background from "../image/Stars.png";


export const SingleDragon = () => {
  const [dataSingleDragon, setSingleDragon] = useState([]);
  const [imgSingleDragon, setImg] = useState([]);
  const [moreData, setMoreData] = useState([]);
  const { id } = useParams();

  const fetchSingleDragon = useCallback(async () => {
    try {
      const response = await fetch(`${galleryUrl}/${id}`);
      const singleDragon = await response.json();
      setSingleDragon(singleDragon);
      setImg(singleDragon.flickr_images);
      setMoreData(singleDragon.heat_shield);
    } catch (error) {
      console.log(error);
    }
  }, [id]);


  useEffect(() => {
    fetchSingleDragon();
  }, [fetchSingleDragon]);

  return (
    <>
      <Navbar />
      <MainContainer>
        <div className="container">
          <div className="img-container">
            <img src={imgSingleDragon[2]} className="dragon-img" alt="img" />
          </div>
          <div className="desc-container">
            <p className="desc-title">About Dragon</p>

            <table className="dragon-table">
              <tbody>
                <tr>
                  <td className="table-label">Name:</td>
                  <td className="table-value">{dataSingleDragon.name}</td>
                </tr>
                <tr>
                  <td className="table-label">Material:</td>
                  <td className="table-value">{moreData.material}</td>
                </tr>
                <tr>
                  <td className="table-label">Temp-degrees:</td>
                  <td className="table-value">{moreData.temp_degrees}</td>
                </tr>
                <tr>
                  <td className="table-label">Dev-partner:</td>
                  <td className="table-value">{moreData.dev_partner}</td>
                </tr>
                <tr>
                  <td className="table-label">Type:</td>
                  <td className="table-value">{dataSingleDragon.type}</td>
                </tr>
              </tbody>
            </table>

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
    justify-content: center;
    gap: 3rem;

    .dragon-img {
      object-fit: contain;
      width: 50vw;
      max-height: 72vh;
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .desc-container {
    min-width: 35vw;
  }

  .desc-title {
    text-align: center;
    padding-bottom: 0.5rem;
    color: white;
    font-weight: 600;
    font-size: 34px;
    line-height: 0px;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .dragon-table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
    font-size: 25px;
  }

  .dragon-table td {
    padding: 1rem;
    border-bottom: 1px groove white;
  }

  .table-label {
    text-align: left;
    color: white;
    font-weight: 500;
  }

  .table-value {
    text-align: right;
    color: white;
  }

  .desc {
    max-width: 80vw;
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