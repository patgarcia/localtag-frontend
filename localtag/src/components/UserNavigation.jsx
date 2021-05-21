import React, { useEffect, useState } from "react";

function UserNavigation(props) {
  const apiURL = process.env.REACT_APP_API_URL;

  const [showNav, setShowNav] = useState(null);

  // query the session
  // get response from server
  // from response, determine if user is logged in
  // if user exists, setShowNav(true)

  function handleLogin(ev) {
    ev.preventDefault();
    const data = new FormData(ev.target);
    const loginData = Object.fromEntries(data.entries());
    console.log(JSON.stringify(loginData));
    fetch(`${apiURL}/auth/login`, {
      method: "post",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.status)
      .then((status) => {
          console.log(status);
          return status
        })
      .then(status => setShowNav(status == 200))
  }

  function handleLogout(ev) {
    ev.preventDefault();
    fetch(`${apiURL}/auth/logout`)
    setShowNav(false);
  }

  return (
    <div>
      {!showNav ? (
        <form onSubmit={handleLogin}>
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="text" placeholder="password" />
          <button>Login</button>
        </form>
      ) : (
        <nav>
          <h3>Display-name</h3>
          <ul>
            <li>
              <button>Change Password</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default UserNavigation;
