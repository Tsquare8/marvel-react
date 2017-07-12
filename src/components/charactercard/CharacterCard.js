import React, { Component } from 'react';

//import Col and Thumbnail from react-bootstrap
import { Col, Thumbnail } from 'react-bootstrap';

import './CharacterCard.css'

class CharacterCard extends Component {
  render() {

    //created a variable so don't have to keep typing this.props.character
    let character = this.props.character;

    return (
      //bootstrap stuff to how the screen should display depending
      <Col xs={12} sm={6} md={3}>
        <Thumbnail className="text-center" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}>
          <h3>{character.name}</h3>
        </Thumbnail>
      </Col>
    );
  }
}

export default CharacterCard;
