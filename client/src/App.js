
// pages
import { Home } from "./pages/Home/Home";
import { Category } from "./pages/Category";

// components
import { Nav } from "./components/Nav";
import { Footer } from './components/Footer';

// router
import { Route, Routes } from 'react-router-dom';

// styled
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/:category'} element={<Category />} />
      </Routes>      
      <Footer />
    </>
  );
}

export default App;
