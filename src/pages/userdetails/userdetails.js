// saas
import "./userdetails.scss";
// hooks
import { useState } from "react";

import React from "react";

export default function Userdetails() {
    //states
  const [name, userName] = useState("");
  const [dates, userdate] = useState("");
  const [adress, useradress] = useState("");
  const [fedbakck, userfeedback] = useState("");
  const [sub, usersubmit] = useState("");
  
  // state functions value asingn
  function names(datas) {
    userName(datas.target.value);
  }
  function date(datas) {
    userdate(datas.target.value);
  }
  function address(datas) {
    useradress(datas.target.value);
  }
  function feedback(datas) {
    userfeedback(datas.target.value);
  }
  function submit(datas) {
    usersubmit(datas);
  }

  return (
    <div className="container6">
      <div className="main">

        {!sub ? (
          <>
            <h1>{name}</h1>
            <h1>{dates}</h1>
            <h1>{adress}</h1>
            <h1>{fedbakck}</h1>

            <form>
              <h3>user feedback</h3>
              <input
                type="text"
                placeholder="enter your name"
                onChange={names}
              ></input>
              <br></br>
              <input type="date" onChange={date}></input>
              <br></br>
              <address
                placeholder="ender your address"
                onChange={address}
              ></address>
              <br></br>
              <textarea
                placeholder="ender your feedback"
                onChange={feedback}
              ></textarea>
              <br></br>
              <button>
                <input
                  type="submit"
                  name="submit"
                  onClick={() => submit("sucess")}
                />
              </button>
            </form>
          </>
        ) : (
          <h1>{sub}</h1>
        )}
      </div>
    </div>
  );
}
