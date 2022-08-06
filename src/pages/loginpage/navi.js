// components
import userContext from "../context/Context";

// hooks
import { useContext } from "react";

import React from "react";

export default function navi() {
  const { dispatch } = useContext(userContext);
  function nav() {
    dispatch({
      type: "nav",
      payload: { isAuthentification: true },
    });
  }
  return (
    <div>
      navi
      <button onClick={nav}>click</button>
    </div>
  );
}
