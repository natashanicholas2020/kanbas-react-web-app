// import { Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";

// export default function Signup() {
//   return (
//     <div id="wd-signup-screen" className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-4">
//           <h1 className="text-center mb-4">Sign up</h1>

//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 id="wd-username"
//                 type="text"
//                 placeholder="Username"
//                 className="form-control-lg"
//                 defaultValue="nnicho"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 id="wd-password"
//                 type="password"
//                 placeholder="Password"
//                 className="form-control-lg"
//                 defaultValue="password123"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 id="wd-password-verify"
//                 type="password"
//                 placeholder="Verify Password"
//                 className="form-control-lg"
//                 defaultValue="password123" 
//               />
//             </Form.Group>

//             <Link to="/Kambaz/Account/Profile">
//               <Button
//                 id="wd-signup-btn"
//                 variant="primary"
//                 size="lg"
//                 className="w-100 mb-3"
//               >
//                 Sign up
//               </Button>
//             </Link>
//           </Form>

//           <div className="text-center">
//             <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
//               Already have an account? Sign in here.
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl } from "react-bootstrap"; 

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="wd-username b-2" placeholder="username" />
      <FormControl value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
             className="wd-password mb-2" placeholder="password" type="password"/>
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
      <Link to="/Kambaz/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
);}

