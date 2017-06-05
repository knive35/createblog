import axios from 'axios'
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=kamesh35"

export const FETCH_POSTS ='FETCH_POSTS'
export const FETCH_POST ='FETCH_POST'
export const CREATE_POST ='create_post'
export const DELETE_POST ='delete_post'
export function fetchPosts() {
   const response= axios.get(`${ROOT_URL}/posts${API_KEY}`)

 return({
     type:FETCH_POSTS,
     payload:response
 })
}
export function createPost(values,callback){
    const response=axios.post(`${ROOT_URL}/posts${API_KEY}`,values).then(()=>callback());
    console.log(response);
    return({
        type:CREATE_POST,
        payload:response
    })
}
export function fetchPost(id){
    const response=axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return({
        type:FETCH_POST,
        payload:response
    })
}
export function deletePost(id,callback){
    console.log("kkkk")
    const response=axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(()=>callback());
    return({
        type:DELETE_POST,
        payload:response
    })
}