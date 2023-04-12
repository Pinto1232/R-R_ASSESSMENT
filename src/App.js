import './App.css';
import Navbar from './components/specific/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import Footer from './components/specific/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/" element={ <Login /> } />
        <Route path="account" element={ <Account/> } />
        <Route path="page-not-found" element={ <Unauthorized />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
