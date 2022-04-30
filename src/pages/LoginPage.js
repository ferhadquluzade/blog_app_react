import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  function handleFormSubmit({ username, password }) {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then(console.log);
  }

  return (
    <div className="container">
      <LoginForm onSubmit={handleFormSubmit} loading={false} />
    </div>
  );
}

export default LoginPage;
