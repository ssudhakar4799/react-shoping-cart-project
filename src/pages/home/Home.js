// saas
import "./home.scss";

// components
import Product from "../products/products.json";
import userContext from "../context/Context";

// hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";

export default function Home() {

  // context
  const { state, dispatch } = useContext(userContext);


  //navigate
  const navi = useNavigate();

  // add-to-card update datas
  function card(datas) {

    navi("/Cart");
    // qty
    let re = (datas.qty += 1);
    let empty = [];
    // card array push of data
    if (state.card?.length) {
      empty = [...state.card, datas];
    } else {
      empty = [datas];
    }
    dispatch({
      type: "card",
      payload: { card: [...new Set(empty)], re },
    });
  }

  // add-favorite update datas
  function favorite(datas) {
    navi("/Favorite");
    let femty = [];
    // favorite data push of array
    if (state.favorite?.length) {
      femty = [...state.favorite, datas];
    } else {
      femty = [datas];
    }
    dispatch({
      type: "favorite",
      payload: { favorite: [...new Set(femty)] },
    });
  }
  return (
    <div className="container1">
      {Product.map((datas, index) => {
        return (
          <div key={index} className="box">
            <h1>{datas.name}</h1>
            <p>
              <img src={datas.img} alt="" className="image"></img>
            </p>
            <h3> Price: {datas.price}</h3>
            {/* <h3> Qty: {datas.qty}</h3> */}
            <a href="#" onClick={() => card(datas)}>
              <AddShoppingCartIcon />
            </a>
            <a href="#" onClick={() => favorite(datas)} id="fav">
              <FavoriteIcon />
            </a>
          </div>
        );
      })}
    </div>
  );
}
