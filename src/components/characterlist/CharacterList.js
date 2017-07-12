import React, { Component } from 'react';
import CharacterCard from '../charactercard/CharacterCard';
//to check if character is empty import lodash
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';

export class CharacterList extends Component {

  //do this if actually mounted
  componentDidMount() {
  //going to action to get characters from api
    this.props.renderCharacters();
  }

  render() {
    //until api returns data display below ons creen
    let characters = "Loading...";
    //lodash to check if empty. stating if not empty get characters
    if(!_.isEmpty(this.props.characters)){

      if(this.props.characters.characters.length){
        //take every character in object loop and create character card
        characters = this.props.characters.characters.map(
          (character) => <CharacterCard key={character.id} character={character} />
        );
      }else{
        characters = "No characters found!"
      }

    }

    //use react-bootstrap grid and row to build characters on screen in a grid
    return (
      <Grid>
        <Row>
          {characters}
        </Row>
      </Grid>
    );
  }
}

export default CharacterList;
