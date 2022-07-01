import React from "react";
import { ImageURL } from "../../../config/config";
import moment from "moment";
import { stripChars } from "../../utils";
import styled from "styled-components";
import Img from "../../common/Images";
import { useNavigate } from "react-router-dom";
import { clearSearch } from "../../../Store/movies/movieSlice";
import { useDispatch } from "react-redux";
const SearchContinaer = styled.div`
  position: absolute;
  height: 400px;
  overflow: auto;
  background: black;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  top: 40px;
`;

const SearchItem = styled.div`
  padding: 10px;
  display: flex;
`;

const SearchDetails = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const Search = (props) => {
  const { searchResults } = props;
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    searchResults?.results && (
      <SearchContinaer>
        {searchResults?.results?.map((item) => {
          return (
            <SearchItem
              key={item.id}
              onClick={() => {
                navigate(`/movie/${item.id}`);
                dispatch(clearSearch());
              }}
            >
              <div>
                <Img
                  source={
                    item.poster_path ? `${ImageURL}${item.poster_path}` : null
                  }
                  width="60px"
                  height="60px"
                  fit="cover"
                />
              </div>
              <SearchDetails>
                <div>{stripChars(item.title, 25)}</div>
                <div>{moment(item.release_date).year() || "Not Available"}</div>
              </SearchDetails>
            </SearchItem>
          );
        })}
      </SearchContinaer>
    )
  );
};

export default Search;
