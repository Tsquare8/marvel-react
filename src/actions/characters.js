import request from 'superagent';
//use md5 because need a hash
import md5 from 'md5'

const baseUrl: string = 'http://gateway.marvel.com/v1/public/';

//below will do the hashing and authentication
function generateCredentials(){
  //pass in publicKey and privateKey without it being viewable
  let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  let timestamp = +new Date(); // same new Date().getTime()
  let hash = md5(`${timestamp}${privateKey}${publicKey}`);
  return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}

//return characters from marvel api
export function getCharacters(name = ""){
  let search = "";
  if(name){
    //creating search with starts with
    search = `&nameStartsWith=${name}`;
  }
  //reducers listening to dispatch so can capture state. because we are using thunk have to use return dispatch
  return dispatch => {

    //getting characters from marvel api using hash created and depending what is in search
    request.get(`${baseUrl}characters${generateCredentials()}${search}`).end(
      (error, response) => {
        if(!error) {
          //reducer is listening for GET_CHARACTERS.  characters has response from api
          dispatch({ type: `GET_CHARACTERS`, characters: response.body.data.results});
        }
      }
    );
  };
}
