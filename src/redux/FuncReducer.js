import {createSelector} from 'reselect' 

export const GetsUsers = (state) => {
    return state.UsersPage.users
}
export const GetsUsersSelector=createSelector(GetsUsers,(users)=>{
return users.filter(u=>true)
})

export const GetsPagesSize = (state) => {
    return state.UsersPage.pagesSize
}

export const GetsTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}


export const GetsCurrentPage = (state) => {
    return state.UsersPage.currentPage
}

export const GetsIsFetching = (state) => {
    return state.UsersPage.isFetching
}