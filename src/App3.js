// fetch() vs axios 차이?

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

// 실행순서 render -> componentDidMount -> getMovies
class App3 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // axios는 네트워크를 사용해서 느리게 동작한다
  // axios.get()의 실행이 분리될수있도록 새함수를 만듬
  // async : 자바스크립트에게 getMovies() 함수는 시간이 필요하고
  // await : axios.get() 실행을 기다려 달라고 말해주는것이라고 한다
  getMovies = async () => {
    console.log("getMovies()");
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies)
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    //console.log(movies)
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    console.log("componentDidMount()");
    /*
      setTimeout(()=>{
          this.setState({isLoading:false});
      },3000);
      */
    // axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }
  render() {
    console.log("render()");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">로딩~</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App3;
