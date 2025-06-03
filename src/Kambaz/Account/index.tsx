import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <Routes>
      <Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin" }/>}/>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
);}
