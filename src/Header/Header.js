import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'

const Header= (props) => {
    
 return(
     <div className={s.Header}>
           <div className={s.Auth}>
           {props.isAuth?
           <button onClick={props.logout}>Logout</button>
            : <NavLink to='/login'>
                    <button>Login</button>
               </NavLink>}
              
            </div>     
     </div>
 )
}
export default Header