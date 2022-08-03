import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { moviesList } from "./Data";
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";



export default function NavBar() {
  const [movieList, setMovieList] = useState(moviesList);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const handle = (e) => setSearch(e.target.value);
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);

  return (
    <div>
      <Navbar >
        <Container fluid>
          <Navbar.Brand className="logo">BestMovies</Navbar.Brand>
         
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <SearchBar
                handle={handle}
                setRating={setRating}
                rating={rating}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <MoviesList
        moviesArray={
          search
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
            : rating > 1
            ? movieList.filter((movie) => movie.rate >= rating)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}
