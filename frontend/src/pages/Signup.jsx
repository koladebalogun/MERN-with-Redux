import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { signup } from "../features/auth/authSlice";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const {isLoading, user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = firstName + ' ' + lastName
    const userData = {email, password, name}

    dispatch(signup(userData))

  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>First Name:</label>
      <input
        type="firstname"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />

      <label>Last Name:</label>
      <input
        type="lastname"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign up</button>
      {user?.error && <div className="error">{user?.error}</div>}
    </form>
  );
};

export default Signup;
