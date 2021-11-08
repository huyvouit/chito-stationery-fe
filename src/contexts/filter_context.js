import { createContext, useState } from "react";
import queryString from "query-string";
import { useQuery } from "../Helper/use_query";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [query, setQuery] = useState(queryString.parse(useQuery()));

  const handleQuery = (nameQuery) => {
    setQuery(nameQuery);
  };
  console.log("query context: ", query);
  //Context data
  const FilterContextData = {
    query,
    handleQuery,
  };

  return (
    <FilterContext.Provider value={FilterContextData}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
