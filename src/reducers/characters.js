import _ from 'lodash';

const characters = (state = {}, action) => {
  switch (action.type) {

    //reducer is listening for the action GET_CHARACTERS
    case 'GET_CHARACTERS': {
      const nextState = _.merge({}, state);
      //action refers to GET_CHARACTERS actions in actions/character.js
      nextState.characters = action.characters;
      return nextState;
    }
    default:
      return state
  }
}

export default characters

// reducer called characters
//create state then build next state through action GET_CHARACTERS
//updating state in store
