import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/auth_context";
import { Loader } from "../components/Layout/loader";
// Nhận component, để biết là cần render component nào
const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const location = useLocation(); // sử dụng để lấy trang hiện tại

  // Luồng

  // Check xem có đăng nhập thành công chưa
  // Nếu chưa thì cho lại trang login
  // Rồi thì quay lại trang location (trang hiện tại)
  if (authLoading) return <Loader />;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...rest} {...props} />
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
