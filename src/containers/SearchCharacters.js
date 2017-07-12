import React from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../actions/characters'
import { Navbar, Button, FormGroup } from 'react-bootstrap';

//variable SearchCharacters that will dispatch
let SearchCharacters = ({ dispatch }) => {

  let input
  //bootstrap form below return
  return (
    <Navbar.Form pullRight>
      <form onSubmit={e=>e.preventDefault()}>
        <FormGroup>
          <input ref={node => {input = node}} type="text" placeholder="Search" className="form-control" />
        </FormGroup>
        {' '}
        <Button onClick={ () => {
          if (!input.value.trim()) {
            dispatch(getCharacters())
          }else{
            dispatch(getCharacters(input.value))
          }
          }} type="submit">Submit</Button>
      </form>
    </Navbar.Form>
  )
}

//connecting to file we are in
SearchCharacters = connect()(SearchCharacters)

export default SearchCharacters
