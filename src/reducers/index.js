import {combineReducers} from 'redux'
import characters from './characters'

const marvelApp = combineReducers ({
  characters
})
export default marvelApp

// if have 15 reducers would combine all here into root reducers so only need to bring in 1 reducer.
