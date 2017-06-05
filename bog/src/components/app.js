
/**
 * Created by kamesh on 2/6/17.
 */
import React, {Component} from 'react';
import BookList from './book_list';
import {Provider} from 'react-redux';
import BookDetail from './book_detail'
export default class App extends Component{
    render(){
        return (
            <div>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}