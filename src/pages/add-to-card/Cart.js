// saas
import "./card.scss";

// hooks
import { useContext } from "react";

// components
import userContext from "../context/Context";

import React from "react";

export default function Cart() {

  // context
  const { state, dispatch } = useContext(userContext);

  // card items remove 
  function remove(datas) {
    let rem = state.card.filter((item) => item.id !== datas.id);
    dispatch({
      type: "removecard",
      payload: rem,
    });
  }
  // item qty increase
  function increase(datas) {
    let qtys = (datas.qty += 1);
    dispatch({
      type: "increase",
      payload: qtys,
    });
  }
  //item qty decrease
  function decrease(datas) {
    if (datas.qty == 0) {
      // qty 0 in remove item
      let rem = state.card.filter((item) => item.id !== datas.id);

      dispatch({
        type: "removecard",
        payload: rem,
      });
    } else {
      let dec = (datas.qty -= 1);
      dispatch({
        type: "decrease",
        payload: dec,
      });
    }
  }

  return (
    <div className="cart-container">
      {state?.card?.map((datas, index) => {
        return (
          <div key={index} className="cart-box">
            <h1>{datas.name}</h1>
            <p>
              <img src={datas.img} alt=""></img>
            </p>
            <h3>Price: {datas.price}</h3>
            <h3>Qty: {datas.qty}</h3>
            <button onClick={() => decrease(datas)}>-</button>
            <button onClick={() => remove(datas)}>remove</button>
            <button onClick={() => increase(datas)}>+</button>
          </div>
        );
      })}
    </div>
  );
}
