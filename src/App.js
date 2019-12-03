import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import {Route} from 'react-router-dom'
import UsersContainer from './Users/UsersContainer';
import MessagesContainer from './Dialogs/MessegesContainer';
import ContentContainer from './Content/ContentContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import {connect} from 'react-redux'
import {InitialApp} from './redux/AppReducer'
import Preloader from './Preloader';

class App extends React.Component {
  componentDidMount(){
    this.props.InitialApp()
  }
  render(){
    if (!this.props.initialized){
      return <Preloader/>
    }
    return (

      <div className="main">
        <HeaderContainer/>
        <Sidebar/>
       <Route path='/profile/:idUser?' render = {() =><ContentContainer/>} />
        <Route path='/dialog' render={() =><MessagesContainer />}/>
     <Route path='/users' render={() =><UsersContainer/>}/>
     <Route path='/login' render={() =><Login/>}/>
      </div>
     );
   }
  }

let MapStateToProps=(state)=>({
  initialized:state.app.initialized
})

export default connect(MapStateToProps,{InitialApp})(App);
