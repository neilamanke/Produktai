import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function Navigation() {
  const navigate = useNavigate();
  const ctx = useContext(UserContext);
  

  function handleLogout() {
    ctx.logoutUser();
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg header-container">
       <div class="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" type="button" className="btn btn-danger ms-3 header-btn ">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" type="button" className="btn btn-danger ms-3 header-btn">
              Register
            </Link>
          </li>
          <li className="nav-item">
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin') && (
              <Link to="/product" type="button" className="btn btn-danger ms-3 header-btn">
                Products for sale
              </Link>
            )}
          </li>
          <li className="nav-item">
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin') && (
              <Link to="/profile" type="button" className="btn btn-danger ms-3 header-btn">
               <i className="fas fa-user me-2"></i> Profile
              </Link>
            )}
          </li>
          <li className="nav-item">
            {ctx.user.user_role === '' && (
              <Link to="/login" type="button" className="btn btn-danger ms-3 header-btn ">
               <i className="fas fa-user me-2"></i> Login
              </Link>
            )}
          </li>
          <li className="nav-item">
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin') && (
              <button to="/login" onClick={handleLogout} type="button" className="btn btn-danger ms-3 header-btn">
                <i className="fas fa-sign-out-alt me-2"></i> Logout
              </button>
            )}
          </li>
        </ul>
        </div>
    </nav>
  );
}
