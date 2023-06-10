import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import { HomeLinks } from "./pages/HomeLinks";
import { Landing } from './pages/Landing';
import { Categories } from './pages/Categories';
//import {LinksPage} from './pages/LinksPage'
import NavBar from './compenents/NavBar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/home" element={<HomeLinks />} />
          <Route path="/studies" element={<HomeLinks />} />
          <Route path="/forums" element={<HomeLinks />} />
          <Route path="/books" element={<HomeLinks />} />
          <Route path="/media" element={<HomeLinks />} />
          <Route path="/fashion" element={<HomeLinks />} />
          <Route path="/podcasts" element={<HomeLinks />} />
          <Route path="/shopping" element={<HomeLinks />} />
          <Route path="/faq" element={<HomeLinks />} />
        </Routes>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
