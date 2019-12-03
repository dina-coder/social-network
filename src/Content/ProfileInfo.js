import React from 'react';
import s from './Content.module.css';
import Preloader from '../Preloader';
import user from '../img/user.png'


const ProfileInfo= (props) => {
    if (!props.profile){
        return <Preloader/>
    }
 return(
     <div className={s.Content}>
         {props.profile.photos.large ?
         <img src={props.profile.photos.large} className={s.Image}/>:
         <img src={user} className={s.Image}/>
         }
         {props.profile.fullName}<br/>
     </div>
 )
}
export default ProfileInfo




