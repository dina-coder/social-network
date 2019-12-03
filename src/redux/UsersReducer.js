import {MainApi} from '../api/api'
let initialState={
        users:[] ,
        pagesSize:5,
        totalUsersCount:0,
        currentPage:1,
        isFetching:false
}

const UsersReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'FollowCreator': {
         return {
               ...state,
               users:state.users.map(u=>{
                   if (u.id===action.userId){
                       return{...u,follow:true}
                   }
                   return u;
               })

            }
        }
        case 'UnFollowCreator': {
            return {
                ...state,
                users:state.users.map(u=>{
                    if (u.id===action.userId){
                        return{...u,follow:false }
                    }
                    return u;
                })
 
             }
        }
        case SET_USERS:{
            return{...state,users:action.users}
        }
        case SET_CURRENT_PAGE:{
            return{...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return{...state,totalUsersCount:action.totalUsersCount}
        }
        case TOGGLE_FETCHING:{
            return{...state,isFetching:action.isFetching}
        }
        default:
            return state;
    }
}
export default UsersReducer

const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const TOGGLE_FETCHING='TOGGLE_FETCHING'

export const follow=(userId)=>({type:'FollowCreator',userId})
export const unfollow=(userId)=>({type:'UnFollowCreator',userId});
export const setUser=(users)=>({type:SET_USERS, users})
export const setCurrentPage=(currentPage)=>({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount=(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setToggle=(isFetching)=>({type:TOGGLE_FETCHING,isFetching})

export const setUsersThunkCreator=(currentPage,pagesSize)=>{
   return (dispatch)=>{
        dispatch(setCurrentPage(currentPage))
        dispatch(setToggle(true))
        MainApi.setUsersApi(currentPage,pagesSize).then(data=>{
            dispatch(setToggle(false))
            dispatch(setUser(data.items))
            dispatch(setTotalUsersCount(data.totalCount/10))
        });

    }
}

export const Following=(iduser)=>{
    return (dispatch)=>{
        MainApi.follow(iduser).then(data=>{
            if (data.resultCode===0){dispatch(follow(iduser))}
        });
     }
 }

 export const UnFollowing=(iduser)=>{
    return (dispatch)=>{
        MainApi.unfollow(iduser).then(data=>{
            if (data.resultCode===0){dispatch(unfollow(iduser))}
        });
     }
 }
