import './Home.css';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Registration from './Registration';

function Home() { 
  return (
    <div className="App">
      <div className='nav'>
        <h5>Kalvium</h5>
        <div className='info'>
          <NavLink to="/Contact"><h5>Contact</h5></NavLink>
          <NavLink to="/Registration"><h5>Register</h5></NavLink>
        </div>
      </div>
        <div>
          <Routes>
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Registration' element={<Registration />} />
          </Routes>
        </div>
      
    </div>
  );
}

export default Home;