import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Users.module.css'

const Users = (props) =>{
    let pagesCount=Math.ceil(props.totalUsersCount/props.pagesSize);
    let pages=[];
     
    for (let i=1;i<=pagesCount;i++)
    {
        pages.push(i);
    }

   
    return <div>
        <div>
            {pages.map(p=>{
               return <span className={props.currentPage===p && s.selected}
               onClick={()=>{props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
    
        {
        props.users.map(u=><div  className={s.main}>

                <div className={s.profilePhoto}>
                <NavLink to= {'/profile/' + u.id}>
                
                   { u.photos.large
                   ? <img src={u.photos.large}/>
                   : <img className={s.photos}  src="https://cs.pikabu.ru/post_img/big/2013/08/24/1/1377296637_1500370441.png"/>
                   }
                </NavLink>
                </div>
                <div className={s.follow}>
                    {u.follow
                    ? <button onClick={()=>{
                       props.UnFollowing(u.id)
                      }
                    }>UnFollow</button> 
                    : <button onClick={()=>{
                       props. Following(u.id)
                       }
                        }>Follow</button>}
                </div>
            
                        
                <span className={s.info}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span className={s.location}>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            
             </div>)
        }
    </div>
    
}
export default Users