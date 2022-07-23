import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import NavBar from './Components/Shared/NavBar/NavBar';
import Footer from './Components/Shared/Footer/Footer';
import DashBoard from './Components/DashBoard/DashBoard';
import Region from './Components/DashBoard/Region/Region';
import Area from './Components/DashBoard/Area/Area';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/region" element={<Region />} />
          <Route path="/area" element={<Area />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
