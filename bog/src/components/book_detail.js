
/**
 * Created by kamesh on 2/6/17.
 */
import React ,{Component} from 'react';
import {connect} from 'react-redux';
class BookDetail extends Component{
    render(){
        console.log("abc")
        if(!this.props.book){
            return (
                <div>
                    Select book
                </div>
            )
        }
        return(
            <div>
                Title: {this.props.book.title}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        book:state.activebook
    };
}
export default connect(mapStateToProps)(BookDetail);