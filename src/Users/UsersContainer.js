import React from 'react'
import {connect} from 'react-redux'
import Users from './Users';
import {follow,
        unfollow,
        setUser,
        setCurrentPage,
        setUsersThunkCreator,
        UnFollowing,
        Following} from './../redux/UsersReducer'
import Preloader from '../Preloader';
import { GetsUsersSelector, GetsPagesSize, GetsTotalUsersCount, GetsCurrentPage, GetsIsFetching } from '../redux/FuncReducer';

class UsersContainerAPI extends React.Component
{
    componentDidMount(){
        this.props.setUsersThunkCreator(this.props.currentPage,this.props.pagesSize);
      
    }
    onPageChanged = (pageNumber)=>{
        this.props.setUsersThunkCreator(pageNumber,this.props.pagesSize);
        setCurrentPage(pageNumber);
    }
  
    render () {
       return   <>
                    {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Users totalUsersCount={this.props.totalUsersCount} 
                    pagesSize={this.props.pagesSize} 
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    UnFollowing={this.props.UnFollowing}
                    Following={this.props.Following}/>}
        </>
        }
    }
let  mapStateToProps=(state)=>{
    return{
        users:GetsUsersSelector(state),
        pagesSize:GetsPagesSize(state),
        totalUsersCount:GetsTotalUsersCount(state),
        currentPage:GetsCurrentPage(state),
        isFetching:GetsIsFetching(state)
    }
}

export default connect(mapStateToProps,
    {UnFollowing,Following,follow,unfollow,setUser,
        setCurrentPage,setUsersThunkCreator})(UsersContainerAPI)