import React, { useState } from "react";
import GoogleButton from "react-google-button";
import "./Login.css";
import { signInWithGoogle } from "../../firebase";
import { useDispatch } from "react-redux";
import { auth } from "../../Redux/Slice/authSlice";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   const { googleSignIn } = UserAuth();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (username === "" || password === "") {
  //       setError("Please enter a username and password");
  //     } else {
  //       setError("");
  //       // Log the user in
  //     }
  //   };
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
        await signInWithGoogle();
        dispatch(auth(true))
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit="{handleSubmit}">
        {/* <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /> */}
        <GoogleButton style={{ margin: "20px" }} onClick={handleGoogleSignIn} />

        {error && <p className="error">{error}</p>}
        {/* <button className="loginButton" type="submit">
          Log In
        </button> */}
      </form>
    </div>
  );
}
