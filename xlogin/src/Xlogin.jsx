import React, { useState } from "react";

const Xlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsloggedin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setIsloggedin(true);
    } else {
      setIsloggedin(false);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLoggedin ? (
        <p>Welcome, user!</p>
      ) : (
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          <form>
            <label>Username:</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />{" "}
            <br />
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />{" "}
            <br />
            <button onClick={handleLogin}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Xlogin;
