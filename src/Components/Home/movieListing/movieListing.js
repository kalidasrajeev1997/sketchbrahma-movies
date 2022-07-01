import React from "react";
import { ImageURL } from "../../../config/config";
import Img from "../../common/Images";
import { convertRating, stripChars } from "../../utils";
import {
  Container,
  MovieCard,
  MoveDetails,
  Rating,
  RatingContainer,
} from "./styled";
import Images from "../../../config/images";
import { useNavigate } from "react-router-dom";

const MovieListing = (props) => {
  const { movies } = props;
  let navigate = useNavigate();

  return (
    <Container>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
          >
            <Img
              source={`${ImageURL}${movie.poster_path}`}
              width="100%"
              height="184px"
              fit="cover"
            />
            <MoveDetails>
              <div>
                <div>{stripChars(movie.title, 30)}</div>
                <RatingContainer>
                  <Img
                    source={Images.STAR.default}
                    height="17px"
                    width="17px"
                  />
                  <Rating>{convertRating(movie.vote_average)} / 5</Rating>
                </RatingContainer>
              </div>
              <div>
                <Img source={Images.PLAY.default} height="32px" width="32px" />
              </div>
            </MoveDetails>
          </MovieCard>
        );
      })}
    </Container>
  );
};

export default MovieListing;
