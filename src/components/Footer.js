import styled from 'styled-components';

const Footer = () => {
    return (
    <FooterContainer>
        <div className='footer-container'>
      <p>© 2022 / All rights reserved</p>
      </div>
  </FooterContainer>
    )
    }

  const FooterContainer = styled.nav`
  height: 4rem;
  background-color: black;
  filter: drop-shadow(0px 4px 7px rgba(126, 57, 143, 0.7));
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`

  export default Footer;