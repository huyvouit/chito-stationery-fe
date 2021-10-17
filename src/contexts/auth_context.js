import { createContext } from "react";
// import { authReducer } from '../reducers/authReducer'
import { TOKEN_NAME } from "../constants/constant";
import authApi from "../api/auth_api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const [authState, dispatch] = useReducer(authReducer, {
  // 	authLoading: true,
  // 	isAuthenticated: false,
  // 	user: null
  // })

  // Authenticate user
  // const loadUser = async () => {
  // 	if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
  // 		setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
  // 	}

  // 	try {
  // 		const response = await axios.get(`${apiUrl}/auth`)
  // 		if (response.data.success) {
  // 			dispatch({
  // 				type: 'SET_AUTH',
  // 				payload: { isAuthenticated: true, user: response.data.user }
  // 			})
  // 		}
  // 	} catch (error) {
  // 		localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
  // 		setAuthToken(null)
  // 		dispatch({
  // 			type: 'SET_AUTH',
  // 			payload: { isAuthenticated: false, user: null }
  // 		})
  // 	}
  // }

  // useEffect(() => loadUser(), [])

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await authApi.postSignIn(userForm);

      localStorage.setItem(TOKEN_NAME, response.data.accessToken);
      console.log(`data: ${response.data}`);
      // await loadUser()

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
