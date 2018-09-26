import { combineReducers } from 'redux';
import auth from './auth';
import imageReducer from './image'
import taskReducer from './tasks';
export default combineReducers({
  auth,
  image: imageReducer,
  tasks: taskReducer
})