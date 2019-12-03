import {MainApi} from '../api/api'
import {stopSubmit} from 'redux-form'

let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false
}

const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_AUTH_USER':{
            return{...state, ...action.payload}
            
        }
        default:
            return state
        }
    }
export default AuthReducer


export const SetAuthCreation=(userId,email,login,isAuth)=>{
        return({type:'SET_AUTH_USER', payload:{userId,email,login,isAuth}});
    }

export const AuthMeCreator=()=> (dispatch)=>{
         return MainApi.authMe().then(response=>{
                if (response.data.resultCode===0){
                    let {id,email,login}=response.data.data;
                    dispatch(SetAuthCreation(id,email,login,true))
                }
            });
          }
     

     export const login=(email,password,rememberMe)=>{
        return (dispatch)=>{
            
               
            MainApi.login(email,password,rememberMe).then(response=>{
                if (response.data.resultCode===0){
                    dispatch(AuthMeCreator())
                } else { let message=response.data.messages.length>0 ? response.data.messages:'Some error'
                     dispatch(stopSubmit('login', {_error :message}))}
            });
         }
     }

     export const logout=()=>{
        return (dispatch)=>{
           return MainApi.logout().then(response=>{
                if (response.data.resultCode===0){
                    dispatch(SetAuthCreation(null,null,null,false))
                }
            });
         }
     }
   