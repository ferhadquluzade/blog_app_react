import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(navigate("/posts"))
      .then(document.getElementById("root").style.backgroundColor = "white" );
    
    
  }

  return (
    <div className="login-page vh-100 ">
      <form onSubmit={handleFormSubmit}>
        <div className="container w-50">
          <div className="d-flex justify-content-center align-item-center flex-column vh-100">
            <div className="login-form d-flex justify-content-center align-item-center flex-column ">
              <h3 className="text-center">Welcome</h3>
              <hr></hr>
              <div className="group">
                <h5>
                  <label htmlFor="username">Username:</label>
                </h5>
                <input
                  id="username"
                  className="rounded "
                  placeholder="Enter username..."
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="group">
                <h5>
                  <label htmlFor="password">Password:</label>
                </h5>{" "}
                <input
                  type="password"
                  className="rounded"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                disabled={!username || !password}
                type="submit"
                className="btn btn-primary  mt-2 "
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
