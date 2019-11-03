import React, { Component } from 'react';

import './App.css';
import InputHeader from './components/InputHeader/InputHeader';
import SongList from './components/SongList/SongList';
import Header from '../src/components/Header/Header';

class App extends Component {
  constructor (props){
    super(props)
        this.state = {
        newSong: { 
          id: "",
          song: "", 
          artist: "", 
          genre: "", 
          rating: "" },
    songs: [
        { id:'001',
          song: 'If You Could Read My Mind',
          artist: 'Viola Wills',
          genre: 'Disco',
          rating: '*****'
        },
        { id:'002',
        song: 'Zij Gelooft In Mij',
          artist: 'Andre Hazes',
          genre: 'Nederlands',
          rating: '*****'
      },
      { id:'003',
        song: 'Calefornia Dreaming',
          artist: 'Max Yasgurs Farm',
          genre: 'Pop',
          rating: '*****'
      }
    ]
  };
      this.songChangeHandler = this.songChangeHandler.bind(this)
      // this.changeArtistHandler = this.changeArtistHandler.bind(this)
   
  };

  songChangeHandler = event => {
    let input = event.target.value;

    this.setState({
      newSong: {
        song: input,
        artist: this.state.newSong.artist,
        genre: this.state.newSong.genre,
        rating: this.state.newSong.rating
      }
    });
  };

  artistChangeHandler = event => {
    let input = event.target.value;
    this.setState({
      newSong: {
        song: this.state.newSong.song,
        artist: input,
        genre: this.state.newSong.genre,
        rating: this.state.newSong.rating
      }
    });
  };

  genreChangeHandler = event => {
    let input = event.target.value;
    this.setState({
      newSong: {
        song: this.state.newSong.song,
        artist: this.state.newSong.artist,
        genre: input,
        rating: this.state.newSong.rating
      }
    });
  };

  ratingChangeHandler = event => {
    let input = event.target.value;
    this.setState({
      newSong: {
        song: this.state.newSong.song,
        artist: this.state.newSong.artist,
        genre: this.state.newSong.genre,
        rating: input
      }
    });
  };

  addSongHandler = () => {
    console.log(this.state.newSong);

    const newSong = this.state.newSong;
    const allSongs = [...this.state.songs, newSong];
    this.setState({ songs: allSongs });
  };

  render() {

    
    return (
      <React.Fragment>
        <Header />
        <InputHeader
          id={this.state.id} 
          song={this.state.song} changeSong={this.songChangeHandler} 
          artist={this.state.artist} changeArtist={this.artistChangeHandler}
          genre={this.state.genre}   changeGenre={this.genreChangeHandler}
          rating={this.state.rating} changeRating={this.ratingChangeHandler}
          clicked={this.addSongHandler} 
          />
        <SongList array={this.state.songs} />
      </React.Fragment>
    );
  }
}

export default App;
