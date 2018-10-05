import { combineReducers } from 'redux';
import auth from './auth';
import imageReducer from './image'
import taskReducer from './tasks';
import viewTaskReducer from './viewTask'
// import login from './loginReducer';
// import profile from './profileReducers';
// import openChannel from './openChannelReducer';
// import chat from './chatReducer';
import login from '../../sendbird/reducers/loginReducer';
import menu from '../../sendbird/reducers/menuReducer';
import profile from '../../sendbird/reducers/profileReducer';
import openChannel from '../../sendbird/reducers/openChannelReducer';
import openChannelCreate from '../../sendbird/reducers/openChannelCreateReducer';
import chat from '../../sendbird/reducers/chatReducer';
import member from '../../sendbird/reducers/memberReducer';
import blockUser from '../../sendbird/reducers/blockUserReducer';
import groupChannel from '../../sendbird/reducers/groupChannelReducer';
import groupChannelInvite from '../../sendbird/reducers/groupChannelInviteReducer';

export default combineReducers({
  auth,
  login,
  menu,
  profile,
  openChannel,
  openChannelCreate,
  chat,
  member,
  blockUser,
  groupChannel,
  groupChannelInvite,
  image: imageReducer,
  tasks: taskReducer,
  viewedTask: viewTaskReducer,
})