let initialState={
        
        InfoDialog:[
            {id:1,name:'Masha'},
            {id:2,name: 'Vanya'},
            {id:3,name:'Petya'},
            {id:4,name:'Puta'}
        ],
        InfoMessages:[
            {id:1, message:'Hi'},
            {id:2,message:'Hey'},
            {id:3,message:'Hy'}
        ]
}

const MessageReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD-MESSAGE':{
           
               let body= action.NewMessageText
               return{
                 ...state,
                 InfoMessages:[...state.InfoMessages,{id:6,message:body}]
            }}
          
        default:
            return state;
        }
    }
export default MessageReducer


export const ADDMESSAGE_CREATEACTION=(NewMessageText)=>{
        return({type:'ADD-MESSAGE',NewMessageText});
    }
