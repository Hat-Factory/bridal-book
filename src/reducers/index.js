import { combineReducers } from 'redux';
import auth from './auth';
import imageReducer from './image'
import taskReducer from './tasks';
import viewTaskReducer from './viewTask'
import login from './loginReducer';
import profile from './profileReducers';
import openChannel from './openChannelReducer';

export default combineReducers({
  auth,
  login,
  profile,
  openChannel,
  image: imageReducer,
  tasks: taskReducer,
  viewedTask: viewTaskReducer,
})