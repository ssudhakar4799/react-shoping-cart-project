// saas
import "../loginpage/loginpage.scss";

// components
import Person from "../person-details/person-details.json";
import userContext from "../context/Context";

// hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Login() {
  // navigate
  const navigat = useNavigate();

  // state
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMeg, setErrMsg] = useState("");

  // isAutharification context
  const { dispatch } = useContext(userContext);

  // input name
  function getingName(event) {
    setName(event.target.value);
  }

  // input password
  function getingPassword(event) {
    setPassword(event.target.value);
  }

  // submit
  function submit(event) {
    event.preventDefault();
    Person.forEach((datas) => {
      if (datas.userName == name && datas.password == password) {
        // navigate pages
        navigat("/Home");
        // local storage
        localStorage.setItem("login", true);
        // context
        dispatch({
          type: "login",
          payload: { isAuthentification: true },
        });
      } else {
        // error message 
        setErrMsg("invalid inputs");
      }
    });
  }

  return (
    <>
      <div className="container3">
        <form onSubmit={submit} className="form">
          <h1>Login</h1>
          <label>USERNAME </label>
          <br></br>
          <input
            type="text"
            name="userName"
            placeholder="enter your username"
            onChange={getingName}
            className="input"
          ></input>
          <br></br>
          <label>PASSWORD </label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={getingPassword}
            className="input"
          ></input>
          <br></br>
          <input type="submit" className="submit"></input>
          <p>{errMeg}</p>
        </form>
      </div>
    </>
  );
}
