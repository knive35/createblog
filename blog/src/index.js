import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import promise from 'redux-promise'
import PostIndex from './components/posts_index'
import App from './components/app';
import reducers from './reducers';
import postNew from './components/post_new'
import postsShow from './components/post_show'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path="/posts/new" component={postNew}/>
                 <Route path="/posts/:id"component={postsShow}/>
                    <Route path="/" component={PostIndex}/>


             </Switch>
         </div>

  </BrowserRouter>
    </Provider>
  , document.querySelector('.container'));
