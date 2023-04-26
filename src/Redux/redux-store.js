import { configureStore } from '@reduxjs/toolkit';
import dialogsReduce from './dialog-reduce';
import profileReduce from './profile-reduce';
import saitbarReducer from './saitbar-reduce';
import usersReducer from './users-reducer';
import musicReducer from './music-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

const store = configureStore({
    reducer: {
  profilePage: profileReduce,
  dialogMessagePage: dialogsReduce,
  navBarFreands: saitbarReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  
}
});

window.store = store;

export default store;