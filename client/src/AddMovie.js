import React, { Component } from 'react';

import './App.css';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state={
            movie_name: '',
            genre: ''
        };
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeMovieName(e){
        this.setState({
            movie_name: e.target.value
        })
    }
    onChangeGenre(e){
        this.setState({
            genre: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        let mdata = {
            movie_name: this.state.movie_name,
            genre: this.state.genre
        };
        return fetch('/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify(mdata)
        })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Movie Title:
                        <input type="text" value={this.state.movie_name} onChange={this.onChangeMovieName}/>
                    </label>
                    <label>Genre:
                        <input type="text" value={this.state.genre} onChange={this.onChangeGenre}/>
                    </label>
                    <input type="submit" value="Add Movie"/>
                </form>
            </div>
        );
    }
}

export default AddMovie;