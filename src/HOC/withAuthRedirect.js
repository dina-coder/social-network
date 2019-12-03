import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import React from 'react'

let mapStateToPropsForRedirect=(state)=>({
    isAuth:state.Auth.isAuth
})

export const  withAuthRedirect= (Component)=>{
class RedirectComponent extends React.Component{
    render(){
        if (this.props.isAuth==false) return <Redirect to={'/login'}/>
        return <Component {...this.props}/>
    }
}
let ConnectAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
return ConnectAuthRedirectComponent
}


