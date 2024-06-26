import React, { useState } from "react";

const Xlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsloggedin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setIsloggedin(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLoggedin ? (
        <p>Welcome, user!</p>
      ) : (
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
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
          <br />
          <button onClick={handleLogin}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Xlogin;
