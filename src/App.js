//saas
import "./App.scss";

import React from "react";

//components
import Login from "./pages/loginpage/Login";
import Home from "./pages/home/Home";
import Cart from "./pages/add-to-card/Cart";
import userContext from "./pages/context/Context";
import Favorite from "./pages/favorite/favorite";
import { initialState, stateReducer } from "./pages/context/usereducer";
import Userdetails from "./pages/userdetails/userdetails";

//hooks
import { useReducer } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

//icons
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';

// notification icons
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function App() {
  // reducer
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log(state.card.length);

  //logout function
  function logout() {
    console.log(state.isAuthentification);
    localStorage.setItem("login", false);
    dispatch({
      type: "login",
      payload: { isAuthentification: false },
    });
  }
  return (
    <div>
      <userContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {state?.isAuthentification ? (
            <>
              <ul className="navi">
                <li>
                  <Link to="/Home" className="link">
                    <HomeRoundedIcon/>
                  </Link>
                </li>
                <li>
                  <Link to="/Cart" className="link">
                    <IconButton aria-label="cart" className="card">
                      <Badge badgeContent={state.card.length} color="primary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Link>
                </li>
                <li>
                  <Link to="/Favorite" className="link">
                    <FavoriteIcon />
                  </Link>
                </li>
                <li>
                  <span onClick={() => logout()} className="btn">
                    <LogoutIcon />
                  </span>
                </li>
                <li><Link to="/details" className="link"><FeedbackRoundedIcon/></Link></li>
              </ul>
              <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/Favorite" element={<Favorite />}></Route>
                <Route
                  path="*"
                  element={<Navigate to={"/Home"}></Navigate>}
                ></Route>
                <Route path="/details" element={<Userdetails/>}></Route>
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="login" element={<Login />}></Route>
              <Route
                path="*"
                element={<Navigate to={"login"}></Navigate>}
              ></Route>
            </Routes>
          )}
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}
