import React, { useContext, useState, useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/auth_context";
import { Loader } from "../components/Layout/loader";
import { SideBar } from "../components/Profile/SideBar";
import arrowDownTitle from "../assets/Icons/arrow-down-title.svg";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const location = useLocation(); // sử dụng để lấy trang hiện tại
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resWidth = () => {
    if (document.body.clientWidth > 575) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    resWidth();
    return () => window.removeEventListener("resize", resWidth);
  }, []);

  window.addEventListener("resize", resWidth);
  const dropdownSidebar = () => setShowSidebar(!showSidebar);

  if (authLoading) return <Loader />;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <div className="profile-wrapper">
              <div className="profile-header-responsive">
                <h1 className="profile-title">MY ACCOUNT</h1>
                <img
                  className="profile-title-icon"
                  src={arrowDownTitle}
                  alt="arrow-down"
                  onClick={dropdownSidebar}
                />
              </div>

              <div style={{ display: showSidebar ? "initial" : "none" }}>
                <div className="sidebar-990" onClick={dropdownSidebar}>
                  <SideBar {...props} />
                </div>
              </div>

              <div className="profile-content">
                <div className="sidebar-dropdown">
                  <SideBar {...props} />
                </div>
                <Component {...rest} {...props} />
              </div>
            </div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: location,
              },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
