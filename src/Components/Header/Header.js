import React, { useMemo, useCallback, useState } from "react";
import HeaderContainer from "./HeaderContainer";
import { search } from "../../Store/movies/services";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { clearSearch } from "../../Store/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(true);
  const searchResults = useSelector((state) => state.movies.search);

  const handleChange = useCallback(
    (e) => {
      if (!e.target.value) {
        dispatch(clearSearch());
      } else {
        dispatch(search(e.target.value));
      }
    },
    [dispatch]
  );

  const debouncedResults = useMemo(() => {
    return _.debounce(handleChange, 1000);
  }, [handleChange]);

  const showSearchHandle = () => {
    setShowSearch(true);
  };

  return (
    <HeaderContainer
      debouncedResults={debouncedResults}
      searchResults={searchResults}
      setShowSearch={setShowSearch}
      showSearch={showSearch}
      showSearchHandle={showSearchHandle}
    />
  );
};

export default Header;
