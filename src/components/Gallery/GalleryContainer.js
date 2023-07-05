import styled from 'styled-components';

export const GalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 1rem;

    ul {
    list-style-type: none;
     }

   .dragon-gallery-img {
      width: 60vw;
      height: 80vh;
      object-fit:cover;
      filter: drop-shadow(0px 4px 7px rgba(126,57,143,0.7));
        }

   footer {
      display: flex;
      justify-content: space-between;
      gap: 40vw;
      color: white;
     }

     button {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.5rem 1rem;
  text-align: center;
  margin-left: 0.5rem;
}
   svg {
        padding-top: 4vh;
        font-size: 2rem;
     }

   p {
        font-size: 18px;
        letter-spacing: 0.05rem;
        padding-left: 1vh;
   span {
       font-size: 20px;
       color: #565656;
        }
     }
   .like {
      color: grey;
     }
   .active {
      color: red;
     }
`;
