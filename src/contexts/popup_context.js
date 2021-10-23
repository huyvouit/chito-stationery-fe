import { createContext, useState } from "react";

export const PopUpContext = createContext();

const PopUpContextProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const closePopUp = () => {
    setShowPopUp(false);
    setShowSearch(false);
  };

  //Context data
  const PopUpContextData = {
    showPopUp,
    setShowPopUp,
    closePopUp,
    showSearch,
    setShowSearch,
  };

  return (
    <PopUpContext.Provider value={PopUpContextData}>
      {children}
    </PopUpContext.Provider>
  );
};

export default PopUpContextProvider;
