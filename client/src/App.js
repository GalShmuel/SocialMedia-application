import './App.css';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector((state) => state.AuthReducer.authData)

  return (
    <div className="App">
      <div className="blur" style={{ top: '18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route exact path="/" element={user ? <Navigate to="/home" /> : <Navigate to='/auth' />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to='../auth' />} />
        <Route path="/auth" element={user ? <Navigate to='../home' /> : <Auth />} />
      </Routes>


      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Auth/> */}
    </div>
  );
}

export default App;
