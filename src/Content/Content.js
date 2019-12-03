import React from 'react';
import s from './Content.module.css';
import PostsContainer from './PostsContainer';
import ProfileInfo from './ProfileInfo';

const Content= (props) => {
 return(
     <div className={s.Content}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer  />
     </div>
 )
}
export default Content