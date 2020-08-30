import React from 'react';
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.josn")

  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loding..." : "We are readey" }</div>
  }
}

export default App;
