import React from 'react';

import classes from './InputHeader.module.css';


const Input = props => {
  return (
       
    <list className={classes.Input}> 
      <input className={classes.Inputbox} type="text" placeholder="Title" value={props.song} onChange={props.changeSong} />
      <input className={classes.Inputbox} type="text" placeholder="Artist" value={props.artist} onChange={props.changeArtist} />
      <select className={classes.Inputbox} value={props.genre} onChange={props.changeGenre}>
          <option value="Genre">Genre</option>
          <option value="Disco">Disco</option>
          <option value="International">International</option>
          <option value="Heavy Metal">Heavy Metal</option>
          <option value="Pop">Pop</option>
          <option value="Nederlands">Nederlands</option>
          <option value="Rock">Rock</option>
          <option value="Seventies">Seventies</option>
      </select>
      <select className={classes.Inputbox} value={props.rating} onChange={props.changeRating}>
            <option value="Rating">Rating</option> 
            <option value="*">*</option>
            <option value="**">**</option>
            <option value="***">***</option>
            <option value="****">****</option>
            <option value="*****">*****</option>
       </select>
      <button className={classes.button} onClick={props.clicked}>Add Song</button>
    </list>
  );
};




export default Input;
