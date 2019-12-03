import React from 'react';
import Content from './Content';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { ShowUsers } from '../redux/ProfileReducer';
import {Redirect} from 'react-router-dom'
import {withAuthRedirect} from '../HOC/withAuthRedirect';
import { compose } from 'redux';



class ContentContainer extends React.Component
{
    componentDidMount(){
    
        let idUser=this.props.match.params.idUser
        if (!idUser){
            idUser=this.props.loginidUser;
        }
        this.props.ShowUsers(idUser)
       
    }
    render (){
        if (this.props.isAuth==false) return <Redirect to={'/login'}/>
        return <Content {...this.props} profile={this.props.profile}/>
    }
}
const mapStateToProps=(state)=>({
    profile:state.ProfilePage.profile,
    status:state.ProfilePage.status,
    loginidUser:state.Auth.userId,
    isAuth:state.Auth.isAuth
});

export default compose(
    connect (mapStateToProps,{ShowUsers}),
    withRouter,
    withAuthRedirect
)
(ContentContainer)
