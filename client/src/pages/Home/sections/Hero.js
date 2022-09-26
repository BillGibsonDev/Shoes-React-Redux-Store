
import Shoe from '../../../assets/shoes7.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Hero = () => {
  return (
    <StyledHero>
      <div className="text-container">
        <h4>Wow, this is a fancy shoe</h4>
        <p>Looks great doesn't it? Click the button.</p>
        <Link to="/" id="shop-button">Shop</Link>
      </div>
  </StyledHero>
  )
}


const StyledHero = styled.section`
  margin: 20px 0;
  width: 100%;
  height: 90vh;
  background-image: url(${Shoe});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .text-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    position: absolute;
    left: 50px;
    top: 100px;
    @media (max-width: 750px){
      bottom: 0;
      top: 60%;
    } 
    h4 {
      font-size: 2.5rem;
      color: white;
    }
    p {
      color: white;
      font-size: 2rem;
      margin: 10px 0 20px 0;
    }
  }
`;