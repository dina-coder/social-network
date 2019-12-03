import React from 'react';
import s from './Post.module.css'


const Post= (props) => {
 return(
     <div >
          <img src={props.ava} alt='Avatar'/> 
           {props.message}<br/>
           likes
           {props.likes}
     </div>
 )
}
export default Post