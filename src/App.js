import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import { Landing } from "./pages/Landing";
import { Categories } from "./pages/Categories";
import { HomeLinks } from "./pages/HomeLinks";
import { StudiesLinks } from "./pages/StudiesLinks"
import { ForumLinks } from "./pages/ForumLinks";
import {BookLinks} from './pages/BookLinks'
import {MediaLinks} from './pages/MediaLinks'
import {FashionLinks} from './pages/FashionLinks';
import {PodcastLinks} from './pages/PodcastLinks'
import {ShoppingLinks} from './pages/ShoppingLinks'
import {FaqLinks} from './pages/FaqLinks'

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
          <Route path="/studies" element={<StudiesLinks />} />
          <Route path="/forums" element={<ForumLinks />} />
          <Route path="/books" element={<BookLinks />} />
          <Route path="/media" element={<MediaLinks />} />
          <Route path="/fashion" element={<FashionLinks />} />
          <Route path="/podcasts" element={<PodcastLinks />} />
          <Route path="/shopping" element={<ShoppingLinks />} />
          <Route path="/faq" element={<FaqLinks />} />
        </Routes>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
