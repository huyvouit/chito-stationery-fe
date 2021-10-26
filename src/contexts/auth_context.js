import { createContext, useEffect } from "react";
// import { authReducer } from '../reducers/authReducer'
import { TOKEN_NAME } from "../constants/constant";
import authApi from "../api/auth_api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //Authenticate user
  const loadUser = async () => {
    console.log("checking user");
    try {
      const response = await authApi.verifyUser();
      if (response.data.success) {
        console.log("Verify token");
      }
    } catch (error) {
      localStorage.removeItem(TOKEN_NAME);
      console.log("faild verify");
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await authApi.postSignIn(userForm);
      console.log(response.data.accessToken);
      if (response.data.success)
        localStorage.setItem(TOKEN_NAME, response.data.accessToken);
      console.log(`data: ${response.data}`);
      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) {
        // console.log(error.response.data);
        return error.response.data;
      }

      // else return { success: false, message: error.message };
    }
  };

  // Register
  const registerUser = async (userForm) => {
    try {
      const response = await authApi.postSignUp(userForm);

      console.log(`data: ${response.data}`);

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) return error.response.data;
    }
  };

  // Logout
  // const logoutUser = () => {
  // 	localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
  // 	dispatch({
  // 		type: 'SET_AUTH',
  // 		payload: { isAuthenticated: false, user: null }
  // 	})
  // }
  // loginUser,
  // Context data
  const authContextData = { registerUser, loginUser };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
