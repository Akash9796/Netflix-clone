import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../Redux/Slice/authSlice";
import { useNavigate, redirect } from "react-router-dom";
import "./Account.css";
export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignOut = async () => {
    await dispatch(auth(false));
    navigate("/");
    localStorage.clear();
  };

  return (
    <div className="AccountMain">
      <button className="signout" onClick={SignOut}>
        Signout
      </button>
    </div>
  );
}
