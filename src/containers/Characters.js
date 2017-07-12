//connect to component
import { connect } from 'react-redux'
//make a property and pass it
import { getCharacters } from '../actions/characters'

import CharacterList from '../components/characterlist/CharacterList'

//need mapStateToProps and mapDispatchToProps to pass properties around

//mapping state to props
const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

//mappings functions to props
const mapDispatchToProps = dispatch => {
  return {
    //prop to call on CharactersList
    renderCharacters: () => {
      dispatch(getCharacters())
    }
  }
}

//
const Characters = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default Characters
