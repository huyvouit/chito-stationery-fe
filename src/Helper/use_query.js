import { useLocation } from "react-router";

export const useQuery = () => {
  // console.log("useLocation: ", useLocation().search);
  if (useLocation().search !== null) {
    return new useLocation().search;
  } else {
    return {};
  }
};
