/**
 * Created by kamesh on 4/6/17.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPost,deletePost} from '../actions/index'
class postsShow extends Component{
    componentDidMount(){
        const id=this.props.match.params.id;
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        const id=this.props.match.params.id;
        this.props.deletePost(id,()=>this.props.history.push('/'));

    }
    render(){
        if(!this.props.post){
            return(<div>
                Loading....
            </div>)
        }
        return (
            <div>
                <Link to='/' >back to main page</Link>
                <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
                >Delete Post
                </button>
                <h3>{this.props.post.title}</h3>
                <h6>{this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>


            </div>
        )
    }
}
function mapStateToProps(state,ownProps){
return(
    {
        post:state.posts[ownProps.match.params.id]
    }
)

}
export default connect(mapStateToProps,{fetchPost,deletePost})(postsShow)