import './App.css';
import Navbar from './components/specific/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';
import Footer from './components/specific/Footer';
import Unauthorized from './pages/Unauthorized';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
