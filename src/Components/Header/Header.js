import React, { useMemo, useCallback, useState } from "react";
import HeaderContainer from "./HeaderContainer";
import { search } from "../../Store/movies/services";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { clearSearch } from "../../Store/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showSearchListing, setShowSearchListing] = useState(true);
  const searchResults = useSelector((state) => state.movies.search);
  const searchBar = useSelector((state) => state.movies.searchbar);

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
    setShowSearchListing(true);
  };

  return (
    <HeaderContainer
      debouncedResults={debouncedResults}
      searchResults={searchResults}
      setShowSearchListing={setShowSearchListing}
      showSearchListing={showSearchListing}
      showSearchHandle={showSearchHandle}
      searchBar={searchBar}
    />
  );
};

export default Header;
