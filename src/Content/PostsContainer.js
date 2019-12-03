import React from 'react';
import {ADDPOST_CREATEACTION} from '../redux/ProfileReducer'
import Posts from './Posts';
import {connect} from 'react-redux'


    let mapStateToProps =(state)=>{
      return{
        AllPosts:state.ProfilePage.AllPosts,
        NewPostText:state.ProfilePage.NewPostText
      }
    }
    
    let mapDispatchToProps =(dispatch)=>{
      return{
        AddPost:(NewPostText)=>{dispatch(ADDPOST_CREATEACTION(NewPostText))}
      }
    }
    const PostsContainer=connect(mapStateToProps,mapDispatchToProps )(Posts);

export default PostsContainer