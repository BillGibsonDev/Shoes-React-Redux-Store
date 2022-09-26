// styled
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <StyledNav>
      <Link id="logo" to='/'>Shoes.</Link>
      <div className="nav-links">
        <Link to="/">New</Link>
        <Link to="/">Mens</Link>
        <Link to="/">Womens</Link>
        <Link to="/">Kids</Link>
      </div>
      <div className="user-links">
        <Link to="/">Join Us</Link>
        <span>|</span>
        <Link to="/">Sign In</Link>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
min-height: 8vh;
  #logo {
    font-size: 3rem;
    color: black;
  }
  .nav-links, .user-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
    a {
      color: #000000;
      font-size: 1.5rem;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
  .user-links {
    width: 200px;
    span {
      color: black;
    }
  }
`;