import React from 'react';
import s from './Messages.module.css'
import Message from './Message'
import Dialog from './Dialog'
import {Redirect} from 'react-router-dom'
import {Field,reduxForm} from 'redux-form'


const Messages = (props) => {
  
  const onSubmit=(values)=>{
    props.AddNewMessage(values.NewMessageText);
  }

  let AllInfoMessages = props.InfoMessages.map(el => <Message id={el.id} message={el.message} />)
  let AllInfoDialog=props.InfoDialog.map(el=><Dialog id={el.id} name={el.name}/> );
  if (props.isAuth==false) return <Redirect to={'/login'}/>
  
  return (
    <div>
     <div className={s.MainDialog}>
         <div className={s.Dialog}>
         {AllInfoDialog}
         </div>
         
         
          <div className={s.LinePush}>
          </div>
     
    <div className={s.AllMessages}>
      {AllInfoMessages}
      <MessagesReduxForm onSubmit={onSubmit}/>
    </div>
    </div>
    </div>
  );

}

const MessagesForm=(props)=>{
 
  return <form onSubmit={props.handleSubmit}>
  <Field name='NewMessageText' component={'input'} />
  <button>Отправить</button>
  </form>
}

const MessagesReduxForm=reduxForm(
  {form:
    'message'
  })(MessagesForm)


export default Messages;
