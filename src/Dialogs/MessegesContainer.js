import React from 'react';
import {ADDMESSAGE_CREATEACTION} from '../redux/MessageReducer'
import Messages from './Messeges';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps =(state)=>{
  return{
    InfoMessages:state.MessagePage.InfoMessages,
    NewMessageText:state.MessagePage.NewMessageText,
    InfoDialog:state.MessagePage.InfoDialog
  }
}

let mapDispatchToProps =(dispatch)=>{
  return{
    AddNewMessage:(NewMessageText)=>{dispatch(ADDMESSAGE_CREATEACTION(NewMessageText))}
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps ),
  withAuthRedirect
)
(Messages)

