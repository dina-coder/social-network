import React from 'react';
import {connect} from 'react-redux'
import Header from './Header';
import {logout} from '../redux/AuthReducer'


class HeaderContainer extends React.Component{


render(){
    return(
        <Header {...this.props}
                {...this.props.logout} />
    )  
}
}
 let mapStateToProps=(state)=>({
isAuth:state.Auth.isAuth,
login:state.Auth.login
})

export default connect(mapStateToProps,{logout})(HeaderContainer)