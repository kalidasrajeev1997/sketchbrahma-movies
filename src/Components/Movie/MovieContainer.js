import React from "react";
import Img from "../common/Images";
import {
  Container,
  Details,
  Background,
  H,
  DetailsContainer,
  Overview,
  DateDiv,
} from "./styled";
import Images from "../../config/images";
import { ImageURL } from "../../config/config";
import { convertRating } from "../utils";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MOVIE_ACTIONS } from "../../Store/movies/types";
import DetailsSkeleton from "../common/DetailsSkeleton";

const MovieContainer = (props) => {
  const { currentMovie, moviesAction } = props;
  let navigate = useNavigate();
  return (
    <Container>
      {moviesAction === MOVIE_ACTIONS.FETCHING_MOVIE_DETAILS_IN_PROGRESS && (
        <DetailsSkeleton />
      )}
      {moviesAction === MOVIE_ACTIONS.FETCHING_MOVIE_DETAILS_SUCCESS && (
        <>
          <Details>
            <DetailsContainer>
              <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
                <Img source={Images.ARROW.default} height="32px" width="32px" />
              </div>
              <H>{currentMovie.original_title}</H>
              <div>Rating: {convertRating(currentMovie.vote_average)}/5</div>
              <Overview>{currentMovie.overview}</Overview>
              <DateDiv>
                Release Date: &nbsp;&nbsp;
                {moment(currentMovie.release_date).year()}
              </DateDiv>
              <DateDiv>
                Original Language: &nbsp;&nbsp;
                {currentMovie.spoken_languages
                  .map((lan, index) => (
                    <span className="artists" key={index}>
                      {lan.english_name}
                    </span>
                  ))
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </DateDiv>
            </DetailsContainer>
          </Details>
          <Background
            image={
              currentMovie.backdrop_path &&
              `${ImageURL}${currentMovie.backdrop_path}`
            }
          />
        </>
      )}
    </Container>
  );
};

export default MovieContainer;
