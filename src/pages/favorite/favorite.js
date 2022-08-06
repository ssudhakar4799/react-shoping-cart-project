// saas
import "./favorite.scss"

// hooks
import { useContext } from "react";

// components
import userContext from "../context/Context";

import React from "react";

export default function Favorite() {
  // context
  const { state, dispatch } = useContext(userContext);

  // remove of favorite items
  function removefav(datas) {
    let remfav = state.favorite.filter((items) => items.id !== datas.id);

    dispatch({
      type: "removefav",
      payload: remfav,
    });
  }

  return (
    <div className="fav-container">
      {state?.favorite?.map((datas, index) => {
        return (
          <div key={index} className='fav-box'>
            <h1>{datas.name}</h1>
            <p>
              <img src={datas.img} alt=""></img>
            </p>
            <h3>Price: {datas.price}</h3>
            <button onClick={() => removefav(datas)}>remove</button>
          </div>
        );
      })}
    </div>
  );
}
