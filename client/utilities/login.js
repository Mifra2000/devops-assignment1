import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://dummyjson.com/auth/login",
      data: {
        username,
        password,
      },
    })
      .then(async (response) => {
        console.log("response: ", response);
        console.log("token: ", response.data.token);
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          alert("Login successful");
          window.location.href = "./Dashboard";
        } else {
          alert("Please check your username and password");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("hello mifra");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="paswword"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
