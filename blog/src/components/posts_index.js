/**
 * Created by kamesh on 4/6/17.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router-dom'
import _ from 'lodash';
class postindex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
       return _.map(this.props.posts,(post)=> {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            );
        });

    }
    render(){
        return(
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">Add new post
                </Link>
                </div>
            <h1>posts</h1>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
function mapStateToProps({posts}) {
    return({posts})

}
export default connect(mapStateToProps,{fetchPosts})(postindex);
