import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./pages/HomePage";
import NavBar from './compenents/NavBar';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <NavBar />
      </Router >
    </>
  );
}

export default App;
