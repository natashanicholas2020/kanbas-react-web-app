// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// import * as db from "../Database";
// import { FormControl, Button } from "react-bootstrap";
// import * as client from "./client";

// export default function Signin() {
//   const [credentials, setCredentials] = useState<any>({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const signin = () => {
//     const user = db.users.find(
//       (u: any) => u.username === credentials.username && u.password === credentials.password);
//     if (!user) return;
//     dispatch(setCurrentUser(user));
//     navigate("/Kambaz/Dashboard");
//   };
//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
//       <FormControl defaultValue={credentials.username}
//              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//              className="mb-2" placeholder="username" id="wd-username" />
//       <FormControl defaultValue={credentials.password}
//              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//              className="mb-2" placeholder="password" type="password" id="wd-password" />
//       <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
//       <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
//     </div>
// );}









import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { FormControl, Button } from "react-bootstrap";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    if (!credentials.username || !credentials.password) {
      alert("Please enter both username and password.");
      return;
    }
  
    console.log("Sending credentials:", credentials); // ✅ Add this here
  
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } catch (err: any) {
      if (err.response?.status === 401) {
        alert("Invalid username or password.");
      } else {
        console.error(err);
        alert("An error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl   value={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" />
      <FormControl   value={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="mb-2" placeholder="password" type="password" id="wd-password" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
    </div>
);}








