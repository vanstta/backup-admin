import React, { useState } from "react";
import { logIn } from "../../actions/login";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //how to get the state from the redux store
  const user = useSelector((state) => state.login.userName);
  const login = () => {
    //dispatching an action
    dispatch(logIn(userName, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>

        <div>
          {user && (
            <div>
              <span>logged in as {user}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
