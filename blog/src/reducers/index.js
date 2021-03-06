import { combineReducers } from 'redux';
import React,{Component} from 'react';
import {reducer as formReducer} from 'redux-form'
import PostReducer from './reducers_posts'
const rootReducer = combineReducers({
  posts:PostReducer,
    form:formReducer
});

export default rootReducer;
