// import React from "react";
// import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";

// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>

//       <Form.Control
//         defaultValue="alice"
//         placeholder="username"
//         className="mb-2"
//         id="wd-username"
//       />

//       <Form.Control
//         defaultValue="123"
//         placeholder="password"
//         type="password"
//         className="mb-2"
//         id="wd-password"
//       />

//       <Form.Control
//         defaultValue="Alice"
//         placeholder="First Name"
//         className="mb-2"
//         id="wd-firstname"
//       />

//       <Form.Control
//         defaultValue="Wonderland"
//         placeholder="Last Name"
//         className="mb-2"
//         id="wd-lastname"
//       />

//       <Form.Control
//         defaultValue="2000-01-01"
//         type="date"
//         className="mb-2"
//         id="wd-dob"
//       />

//       <Form.Control
//         defaultValue="alice@wonderland"
//         type="email"
//         placeholder="email"
//         className="mb-2"
//         id="wd-email"
//       />

//       <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-3">
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </Form.Select>

//       <Link to="/Kambaz/Account/Signin" className="btn btn-link">
//         Sign out
//       </Link>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl, Button } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  useEffect(() => { fetchProfile(); }, []);

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <FormControl defaultValue={profile.password} id="wd-password" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <FormControl defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <FormControl defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <FormControl defaultValue={profile.dob} id="wd-dob" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <FormControl defaultValue={profile.email} id="wd-email" className="mb-2"
                       onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}
