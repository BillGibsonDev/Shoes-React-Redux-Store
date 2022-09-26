
import Shoe1 from '../../../assets/shoes4.jpg';
import Shoe2 from '../../../assets/shoes2.jpg';
import Shoe3 from '../../../assets/shoes6.jpg';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Link } from 'react-router-dom';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="hero-container">
    <div className="text-container">
      <h4>Wow, this is a fancy shoe</h4>
      <p>Looks great doesn't it? Click the button.</p>
      <Link to="/" id="shop-button">Shop</Link>
    </div>
    <img src={Shoe1} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="hero-container">
    <div className="text-container">
      <h4>Wow, this is a fancy shoe</h4>
      <p>Looks great doesn't it? Click the button.</p>
      <Link to="/" id="shop-button">Shop</Link>
    </div>
    <img src={Shoe2} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="hero-container">
    <div className="text-container">
      <h4>Wow, this is a fancy shoe</h4>
      <p>Looks great doesn't it? Click the button.</p>
      <Link to="/" id="shop-button">Shop</Link>
    </div>
    <img src={Shoe3} onDragStart={handleDragStart} role="presentation" />
  </div>,
];

export const Slideshow = () => {
  return (
    <AliceCarousel 
      mouseTracking items={items} 
      autoPlay={true} 
      autoPlayInterval={5000}
      infinite={true} 
    />
  );
}