import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl, Button } from "react-bootstrap";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Profile</h1>
          {profile && (
            <div>
              <FormControl
                defaultValue={profile.username}
                id="wd-username"
                className="mb-3"
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
              <FormControl
                defaultValue={profile.password}
                id="wd-password"
                type="password"
                className="mb-3"
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
              />
              <FormControl
                defaultValue={profile.firstName}
                id="wd-firstname"
                className="mb-3"
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
              <FormControl
                defaultValue={profile.lastName}
                id="wd-lastname"
                className="mb-3"
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
              <FormControl
                defaultValue={profile.dob}
                id="wd-dob"
                type="date"
                className="mb-3"
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
              />
              <FormControl
                defaultValue={profile.email}
                id="wd-email"
                type="email"
                className="mb-3"
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
              <select
                value={profile.role}
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
                className="form-control mb-3"
                id="wd-role"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>

              <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>

              <Button
                onClick={signout}
                className="w-100"
                variant="danger"
                id="wd-signout-btn"
              >
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
