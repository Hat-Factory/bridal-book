import { combineReducers } from 'redux';
import auth from './auth';
import imageReducer from './image'

export default combineReducers({
  auth,
  image: imageReducer
})