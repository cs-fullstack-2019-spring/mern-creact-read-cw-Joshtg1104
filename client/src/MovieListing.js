import React, {Component} from 'react';

import './App.css';

class MovieListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: []
        }
    }

    componentDidMount() {
        this.loadMoviedata();
    }

    loadMoviedata = () => {
        fetch('/listing')
            // .then(data=>data.text())
            // .then(data=>console.log(data));
            .then(movieData => movieData.json())
            .then(listingData => this.setState({movieData: listingData}))
    };


    render() {
        let movieList = this.state.movieData.map(
            (movie) => {
                return (
                    <div>
                        <p>Movie Title: {movie.movie_name}</p>
                        <p>Genre: {movie.genre}</p>
                        <hr/>
                    </div>
                )
            }
        );
        return (
            <div>
                {movieList}
            </div>
        );
    }
}

export default MovieListing;