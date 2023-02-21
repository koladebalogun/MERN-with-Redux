import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SideNavbar from './components/SideNavbar';
import {useSelector } from "react-redux";


function App() {
  const {user} = useSelector((state) => state.auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SideNavbar />
        <Routes>
          <Route path='/' element={user?.token ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' element={!user?.token ? <Login /> : <Navigate to='/' />} />
          <Route path='/signup' element={!user?.token ? <Signup /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
