import {Routes, Route, Link} from 'react-router-dom';
import Login from './auth/Login/Login.js';
import Signup from './auth/Signup/Signup.js';

function Router() {
  return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
  );
}

export default Router;
