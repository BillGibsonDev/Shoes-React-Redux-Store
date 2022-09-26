import Shoe1 from '../../../assets/shoes4.jpg';
import Shoe2 from '../../../assets/shoes5.jpg';
import Shoe3 from '../../../assets/shoes6.jpg';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Promo = () => {
  return (
    <StyledPromo>
      <div className="hero-container">
        <div className="text-container">
          <h4>Wow, this is a fancy shoe</h4>
          <Link to="/" id="shop-button">Shop</Link>
        </div>
        <img src={Shoe1} />
      </div>
      <div className="right-container">
        <div className="hero-container">
          <div className="text-container">
            <h4>Wow, this is a fancy shoe</h4>
            <Link to="/" id="shop-button">Shop</Link>
          </div>
          <img src={Shoe2} />
        </div>
        <div className="hero-container">
          <div className="text-container">
            <h4>Wow, this is a fancy shoe</h4>
            <Link to="/" id="shop-button">Shop</Link>
          </div>
          <img src={Shoe3} />
        </div>
      </div>
    </StyledPromo>
  )
}

const StyledPromo = styled.section`
  display: flex;
  height: 90vh;
  margin: 100px 0;
  .hero-container {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      max-height: 90vh;
      object-fit: cover;
    }
    .text-container {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 20px;
      bottom: 20px;
      h4 {
        font-size: 2.5rem;
        color: white;
      }
    }
  }
  .right-container {
    display: flex;
    flex-direction: column;
    .hero-container {
      width: 100%;
      height: 50%;
      img {
        height: 100%;
      }
    }
  }
`;