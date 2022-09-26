
// sections
import { Slideshow } from './sections/Slideshow';
import { Hero } from './sections/Hero';
import { Promo } from './sections/Promo';

import styled from 'styled-components'

export const Home = () => {
  return (
    <StyledHome>
      <div className="slideshow-wrapper">
        <Slideshow />
      </div>
      <Promo />
      <Hero />
    </StyledHome>
  )
}

const StyledHome = styled.div`
.slideshow-wrapper {
  max-height: 80vh;
  min-height: 80vh;
  height: 80vh;
  margin-bottom: 200px;
  .hero-container {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 90vh;
      max-height: 90vh;
      object-fit: cover;
    }
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
        font-size: 1.5rem;
        margin: 10px 0 20px 0;
      }
    }
  }
}
  .alice-carousel__prev-btn,
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn,
  .alice-carousel__next-btn-item {
    display: none;
  }

  .alice-carousel__dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    translate: 0 50%;
    margin: 0;
    .alice-carousel__dots-item {
      background-color: #afafaf;
    }
    .__active {
      background-color: #ffffff;
    }
  }
`;