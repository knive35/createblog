
/**
 * Created by kamesh on 2/6/17.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../action/index';
class BookList extends Component{
    renderlist(){
        return this.props.books.map((book)=>{
            return(
                <li onClick={()=>{
                    this.props.selectBook(book)}}>
                    {book.title}
                </li>
            );
        })
    }
    render() {
        return (
            <ul>
                {this.renderlist()}
            </ul>
        )
    }

}
function mapStateToProps(state) {
    return {
        books:state.books
    }
}
function mapDispatchedToProps(dispatch) {
    return bindActionCreators(
        {selectBook:selectBook}
        ,dispatch);

}
 export default connect(mapStateToProps,mapDispatchedToProps)(BookList)