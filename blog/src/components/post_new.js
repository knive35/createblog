/**
 * Created by kamesh on 4/6/17.
 */
import React,{Component} from 'react'
import {reduxForm,Field} from 'redux-form';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions/index'
class postNew extends Component{

    renderfield(field){
        const className =`form-group ${field.meta.touched && field.meta.error ? 'has-danger':''} `
        return(
            <div className= {className}>
                <label>{field.label}</label>
                <input className="form-control"
                       type="text"
                       {...field.input}/>
                <div className="text-help" >
                    {field.meta.touched?field.meta.error:''}
                </div>
            </div>
            )
    }

    onSubmit(values){
        this.props.createPost(values,()=>this.props.history.push('/'));
    }
    render(){

        return(

        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>

            <Field
                label='title'
                name='title'
                component={this.renderfield}
            />

            <Field
                label='categories'
                name='categories'
                component={this.renderfield}
            />

            <Field
                label='content'
                name='content'
                component={this.renderfield}
            />

            <button type="submit" className="btn btn-primary">save</button>
            <Link to="/" className="btn btn-danger">cancel</Link>


        </form>
        );
    }
}

function validate(values){
const errors={};
if(!values.title || values.title.length<3){
    errors.title="enter title";
}
    if(!values.categories){
        errors.categories="enter cat";
    }
    if(!values.content){
        errors.content="enter content";
    }
return errors;
}

export default reduxForm({
    validate:validate,
    form:'postsNewForm'
})(connect(null,{createPost})(postNew))