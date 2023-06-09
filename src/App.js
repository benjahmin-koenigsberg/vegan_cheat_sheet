import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import { HomeLinks } from "./pages/HomeLinks";
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import NavBar from './compenents/NavBar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/main" element={<HomeLinks />} />
        </Routes>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
