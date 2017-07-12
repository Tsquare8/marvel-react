import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import SearchCharacters from '../../containers/SearchCharacters'

//can use below code commented out then don't need export default Navigation at bottom
//export class Navigation extends Component {
class Navigation extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Marvel Character Search
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <SearchCharacters />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation
