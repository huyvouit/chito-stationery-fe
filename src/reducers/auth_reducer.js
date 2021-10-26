export const authReducer = (state, action) => {
  const {
    type,
    payload: { authLoading, isAuthenticated, user },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading,
        isAuthenticated,
        user,
      };

    default:
      return state;
  }
};
