import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { quotesApi } from "../features/quotes/quoteServices";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user} = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(logout());
    dispatch(quotesApi.util.resetApiState())
  };


  return (
    <header>
      <div className="container">
        <div>
          {/* search bar component */}
          {user?.token && <SearchBar />}
        </div>
        <nav>
          {user?.token && (
            <div className="nav-inner-wrapper">
              <span className="initial">{user?.name[0]}</span>
              <h4>{user?.name}</h4>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          {!user?.token && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
