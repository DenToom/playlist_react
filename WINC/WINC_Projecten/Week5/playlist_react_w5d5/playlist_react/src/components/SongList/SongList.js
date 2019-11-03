import React from 'react';

import './SongList.css';

const SongList = props => {
  const song = props.array.map((song, index) => {
    return (
      <li className="addedSongs" key={index}>
        <p>{song.song}</p>
        <p>{song.artist}</p> 
        <p>{song.genre} </p>
        <p>{song.rating}</p>
      </li>
    );
  });
  return (
    <React.Fragment>
      <div className="addsongs">        
        <h2>Title</h2>
        <h2>Artist</h2>
        <h2>Genre</h2>
        <h2>Rating</h2>        
      </div>
      <div>
      {song}
      </div>
    </React.Fragment>
  );
};

export default SongList;

