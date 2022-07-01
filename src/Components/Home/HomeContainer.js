import React from "react";
import { Container, ListingContainer, H } from "./styled";
import Images from "../../config/images";
import Img from "../common/Images";
import MovieListing from "./movieListing";
import Pagination from "../common/Pagination";
import { MOVIE_ACTIONS } from "../../Store/movies/types";
import ListingSkeleton from "../common/ListingSkeleton";

const HomeContainer = (props) => {
  const { movies, currentPage, setPage, moviesAction } = props;
  const moviesProps = movies.results || [];
  return (
    <Container>
      <div>
        <Img source={Images.WALL} height="262px" width="100%" fit="cover" />
      </div>
      <ListingContainer>
        <H>Trending</H>
        {moviesAction === MOVIE_ACTIONS.FETCHING_MOVIES_IN_PROGRESS && (
          <ListingSkeleton />
        )}
        {moviesAction === MOVIE_ACTIONS.FETCHING_MOVIES_SUCCESS && (
          <>
            <MovieListing movies={moviesProps} />
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={500}
              onPageChange={(page) => setPage(page)}
            />
          </>
        )}
      </ListingContainer>
    </Container>
  );
};

export default HomeContainer;
