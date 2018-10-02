import { combineReducers } from 'redux';
import auth from './auth';
import imageReducer from './image'
import taskReducer from './tasks';
import viewTaskReducer from './viewTask'
import login from './loginReducer';


export default combineReducers({
  auth,
  login,
  image: imageReducer,
  tasks: taskReducer,
  viewedTask: viewTaskReducer
})