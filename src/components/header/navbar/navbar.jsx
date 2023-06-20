import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { ImLinkedin } from "react-icons/im";
import { MdLogout } from "react-icons/md";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../../redux/slice/loginSlice";

const Navbar = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((users) => users.loginSlice.login);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        dispatch(LoginUser(null));
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap={0}>
        <div className="navbar-area">
          <div className="nav-left">
            <div className="logo-area">
              <Link to="/">
                <ImLinkedin />
              </Link>
            </div>
          </div>
          <div className="nav-right">
            <div className="profile-area">
              <div className="profile-pic">
                <picture>
                  <img src="./profile/image.png" alt="" />
                </picture>
              </div>
              <div className="profile-name">
                <h6>
                  <Link to="/profile">{user.displayName}</Link> <span>YOU</span>
                </h6>
              </div>
              <div className="logout-btn">
                <div className="logout" onClick={handleLogout}>
                  <MdLogout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Navbar;
